'use client';

import Script from 'next/script';

interface GoogleAdsConversionProps {
  conversionId: string;
  conversionLabel: string;
}

/**
 * Componente per il tag di conversione Google Ads
 * 
 * Questo componente carica il tag di conversione Google Ads che traccia
 * quando un utente completa un'azione importante (es: click su pulsante Telegram).
 * 
 * @param conversionId - L'ID della conversione (es: 17685540605)
 * @param conversionLabel - Il label della conversione (es: JUKFCJ_9krYbEP3dj_FB)
 */
export default function GoogleAdsConversion({
  conversionId,
  conversionLabel,
}: GoogleAdsConversionProps) {
  if (!conversionId || !conversionLabel) {
    return null;
  }

  return (
    <>
      {/* Script di conversione Google Ads */}
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-${conversionId}/${conversionLabel}',
              'value': 1.0,
              'currency': 'EUR'
            });
          `,
        }}
      />
    </>
  );
}

