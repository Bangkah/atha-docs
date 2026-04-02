type DataLayerEvent = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

function pushToDataLayer(payload: DataLayerEvent) {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  window.dataLayer.push(payload);

  if (process.env.NODE_ENV !== "production") {
    console.info("[analytics]", payload);
  }
}

export function trackCtaClick({
  label,
  location,
  href,
}: {
  label: string;
  location: string;
  href: string;
}) {
  pushToDataLayer({
    event: "atha_cta_click",
    event_category: "engagement",
    event_action: "click",
    event_label: label,
    cta_label: label,
    cta_location: location,
    destination_url: href,
    content_type: "cta",
    timestamp: new Date().toISOString(),
  });
}

export function trackScrollDepth(percent: number) {
  pushToDataLayer({
    event: "atha_scroll_depth",
    event_category: "engagement",
    event_action: "scroll",
    event_label: `${percent}%`,
    scroll_depth_percent: percent,
    timestamp: new Date().toISOString(),
  });
}
