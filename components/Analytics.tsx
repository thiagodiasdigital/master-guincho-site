"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { analyticsConfigTemplate } from "../config/analytics.config";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

function pushEvent(event: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...params
  });

  window.gtag?.("event", event, params);
}

function getLinkLabel(link: HTMLAnchorElement) {
  return link.textContent?.replace(/\s+/g, " ").trim().slice(0, 120) || link.href;
}

function getContactEvent(link: HTMLAnchorElement) {
  const href = link.href.toLowerCase();
  const label = getLinkLabel(link).toLowerCase();

  if (analyticsConfigTemplate.trackWhatsappClicks && (href.includes("wa.me") || href.includes("api.whatsapp.com"))) {
    return {
      event: "generate_lead",
      params: {
        method: "whatsapp"
      }
    };
  }

  if (analyticsConfigTemplate.trackPhoneClicks && href.startsWith("tel:")) {
    return {
      event: "phone_call_click",
      params: {
        method: "phone"
      }
    };
  }

  if (analyticsConfigTemplate.trackEmailClicks && href.startsWith("mailto:")) {
    return {
      event: "email_click",
      params: {
        method: "email"
      }
    };
  }

  if (
    analyticsConfigTemplate.trackGoogleBusinessClicks &&
    (label.includes("avalia") || href.includes("maps.app.goo.gl") || href.includes("google.com/maps"))
  ) {
    return {
      event: "google_business_click",
      params: {
        method: "google_business_profile"
      }
    };
  }

  return null;
}

function ContactClickTracker() {
  const pathname = usePathname();
  const firstPageView = useRef(true);

  useEffect(() => {
    if (!analyticsConfigTemplate.enableAnalytics) {
      return;
    }

    if (firstPageView.current) {
      firstPageView.current = false;
      return;
    }

    pushEvent("virtual_page_view", {
      page_path: pathname
    });

    if (analyticsConfigTemplate.ga4Id) {
      window.gtag?.("config", analyticsConfigTemplate.ga4Id, {
        page_path: pathname
      });
    }
  }, [pathname]);

  useEffect(() => {
    if (!analyticsConfigTemplate.enableAnalytics) {
      return undefined;
    }

    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest("a");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const contactEvent = getContactEvent(link);

      if (!contactEvent) {
        return;
      }

      pushEvent(contactEvent.event, {
        ...contactEvent.params,
        link_url: link.href,
        link_text: getLinkLabel(link),
        page_path: window.location.pathname
      });
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return null;
}

export function Analytics() {
  if (!analyticsConfigTemplate.enableAnalytics) {
    return null;
  }

  return <ContactClickTracker />;
}
