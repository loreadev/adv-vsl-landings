'use client';

import { useCallback } from 'react';
import { META_EVENTS } from '@/config/meta';

export const useMetaPixel = () => {
  const trackEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
  }, []);

  const trackPageView = useCallback(() => {
    trackEvent(META_EVENTS.PAGE_VIEW);
  }, [trackEvent]);

  const trackViewContent = useCallback((contentName?: string, contentCategory?: string) => {
    trackEvent(META_EVENTS.VIEW_CONTENT, {
      content_name: contentName,
      content_category: contentCategory,
    });
  }, [trackEvent]);

  const trackLead = useCallback((value?: number, currency?: string) => {
    trackEvent(META_EVENTS.LEAD, {
      value: value,
      currency: currency || 'EUR',
    });
  }, [trackEvent]);

  const trackPurchase = useCallback((value: number, currency?: string, contentIds?: string[]) => {
    trackEvent(META_EVENTS.PURCHASE, {
      value: value,
      currency: currency || 'EUR',
      content_ids: contentIds,
    });
  }, [trackEvent]);

  const trackCustomEvent = useCallback((eventName: string, parameters?: Record<string, unknown>) => {
    // Usa trackCustom per eventi personalizzati (consigliato da Meta)
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', eventName, parameters);
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
    trackViewContent,
    trackLead,
    trackPurchase,
    trackCustomEvent,
  };
}; 