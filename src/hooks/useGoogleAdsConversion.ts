'use client';

/**
 * Hook per tracciare conversioni Google Ads
 * 
 * Questo hook fornisce una funzione per tracciare manualmente
 * le conversioni Google Ads quando si verifica un'azione specifica
 * (es: click su pulsante Telegram).
 * 
 * IMPORTANTE: Per funzionare, devi avere:
 * 1. Google Tag Manager installato OPPURE
 * 2. Il tag gtag.js di Google Ads caricato nella pagina
 */

interface ConversionParams {
  conversionId: string;
  conversionLabel: string;
  value?: number;
  currency?: string;
}

export function useGoogleAdsConversion() {
  /**
   * Traccia una conversione Google Ads
   * 
   * @param params - Parametri della conversione
   * @param params.conversionId - ID conversione (es: 17685540605)
   * @param params.conversionLabel - Label conversione (es: JUKFCJ_9krYbEP3dj_FB)
   * @param params.value - Valore opzionale della conversione
   * @param params.currency - Valuta (default: EUR)
   */
  const trackConversion = ({
    conversionId,
    conversionLabel,
    value = 1.0,
    currency = 'EUR',
  }: ConversionParams) => {
    // Verifica che siamo nel browser
    if (typeof window === 'undefined') {
      return;
    }

    // Metodo 1: Se hai gtag.js caricato (Google Tag Manager o Google Ads)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        send_to: `AW-${conversionId}/${conversionLabel}`,
        value: value,
        currency: currency,
      });
      console.log('✅ Conversione Google Ads tracciata:', {
        conversionId,
        conversionLabel,
      });
      return;
    }

    // Metodo 2: Se hai dataLayer (Google Tag Manager)
    if (typeof window.dataLayer !== 'undefined') {
      window.dataLayer.push({
        event: 'conversion',
        send_to: `AW-${conversionId}/${conversionLabel}`,
        value: value,
        currency: currency,
      });
      console.log('✅ Conversione Google Ads tracciata via dataLayer:', {
        conversionId,
        conversionLabel,
      });
      return;
    }

    // Se nessuno dei due metodi è disponibile, logga un warning
    console.warn(
      '⚠️ Google Ads conversion tracking non disponibile. Assicurati che GTM o gtag.js sia caricato.'
    );
  };

  return { trackConversion };
}

