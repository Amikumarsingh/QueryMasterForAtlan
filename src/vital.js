// Importing web-vitals functions to measure key performance metrics
import { getCLS, getFCP, getFID, getLCP, getTTFB } from "web-vitals";

// URL to send the performance metrics data
const vitalsUrl = "https://vitals.vercel-analytics.com/v1/vitals";

// Function to determine the user's network connection speed
function getConnectionSpeed() {
  return "connection" in navigator &&
    navigator["connection"] &&
    "effectiveType" in navigator["connection"]
    ? navigator["connection"]["effectiveType"] // Returns the effective connection type (e.g., '4g', '3g')
    : ""; // Returns an empty string if connection information is unavailable
}

// Function to send performance metrics to the analytics server
function sendToAnalytics(metric, options) {
  // Replace dynamic parameters in the path with placeholders
  const page = Object.entries(options.params).reduce(
    (acc, [key, value]) => acc.replace(value, `[${key}]`),
    options.path
  );

  // Construct the payload to send
  const body = {
    dsn: options.analyticsId, // Analytics ID for the project
    id: "prj_Nk4sISuAwbRdqsxyq1Y6dCNwVr0R", // Static project ID
    page, // Page path with placeholders
    href: location.href, // Current page URL
    event_name: metric.name, // Name of the metric (e.g., 'CLS', 'LCP')
    value: metric.value.toString(), // Metric value as a string
    speed: getConnectionSpeed(), // User's connection speed
  };

  // Log the payload to the console if debugging is enabled
  if (options.debug) {
    console.log("[Analytics]", metric.name, JSON.stringify(body, null, 2));
  }

  // Create a Blob object to send the data
  const blob = new Blob([new URLSearchParams(body).toString()], {
    type: "application/x-www-form-urlencoded",
  });

  // Use the Beacon API if available, otherwise fallback to fetch
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, blob);
  } else {
    fetch(vitalsUrl, {
      body: blob,
      method: "POST",
      credentials: "omit",
      keepalive: true,
    });
  }
}

// Function to initialize and send web-vitals metrics
export function webVitals(options) {
  try {
    // Measure and send First Input Delay (FID)
    getFID((metric) => sendToAnalytics(metric, options));
    // Measure and send Time to First Byte (TTFB)
    getTTFB((metric) => sendToAnalytics(metric, options));
    // Measure and send Largest Contentful Paint (LCP)
    getLCP((metric) => sendToAnalytics(metric, options));
    // Measure and send Cumulative Layout Shift (CLS)
    getCLS((metric) => sendToAnalytics(metric, options));
    // Measure and send First Contentful Paint (FCP)
    getFCP((metric) => sendToAnalytics(metric, options));
  } catch (err) {
    // Log any errors that occur during the process
    console.error("[Analytics]", err);
  }
}
