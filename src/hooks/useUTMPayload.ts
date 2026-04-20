'use client';

import { useState, useEffect } from 'react';

export const useUTMPayload = () => {
  const [payload, setPayload] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Estrai solo utm_source dall'URL
    const urlParams = new URLSearchParams(window.location.search);
    const utm_source = urlParams.get('utm_source');
    if (!utm_source) {
      setPayload('');
      return;
    }

    // Codifica solo utm_source come JSON
    const json = JSON.stringify({ utm_source });
    // Codifica in base64 url-safe senza padding
    const base64 = typeof window !== 'undefined' && window.btoa
      ? window.btoa(unescape(encodeURIComponent(json)))
      : Buffer.from(json, 'utf-8').toString('base64');
    let base64url = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    if (base64url.length > 64) {
      base64url = base64url.substring(0, 64);
    }
    setPayload(base64url);
  }, []);

  const telegramDeepLink = payload
    ? `tg://resolve?domain=lorea_metaplug_bot&start=${payload}`
    : 'tg://resolve?domain=lorea_metaplug_bot&start=';

  return {
    payload,
    telegramDeepLink,
    hasUTM: payload.length > 0
  };
}; 