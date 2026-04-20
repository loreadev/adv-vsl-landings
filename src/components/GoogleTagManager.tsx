'use client';

import Script from 'next/script';

interface GoogleTagManagerProps {
  gtmId?: string;
}

/**
 * Componente Google Tag Manager (GTM)
 * 
 * Questo componente carica Google Tag Manager sul sito.
 * GTM è un sistema che permette di gestire tutti i tag di tracking
 * (Google Ads, Facebook Pixel, Analytics, ecc.) da un'unica piattaforma.
 * 
 * Se non hai ancora un GTM ID, puoi crearlo su: https://tagmanager.google.com
 * 
 * @param gtmId - L'ID del container GTM (formato: GTM-XXXXXXX)
 */
export default function GoogleTagManager({ gtmId }: GoogleTagManagerProps) {
  // Se non c'è un GTM ID, non carichiamo nulla
  if (!gtmId) {
    return null;
  }

  return (
    <>
      {/* Script GTM - va nel <head> */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `,
        }}
      />
      
      {/* Noscript fallback - va subito dopo l'apertura del <body> */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

