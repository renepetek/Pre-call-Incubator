/*
Thin wrapper around the Meta Pixel `fbq` global. The base init + first
PageView fire from the snippet in client/index.html on initial load; this
module covers SPA route changes and named events (Lead, etc.).
*/

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackPixelPageView() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "PageView");
}

export function trackPixelLead() {
  if (typeof window === "undefined") return;
  window.fbq?.("track", "Lead");
}
