// Configurazione Meta Pixel
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '1379601219359267';

// Configurazione Google Tag Manager
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || '';

// Configurazione Google Ads Conversion
export const GOOGLE_ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || '17685540605';
export const GOOGLE_ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || 'JUKFCJ_9krYbEP3dj_FB';

// Eventi personalizzati che puoi tracciare
export const META_EVENTS = {
  PAGE_VIEW: 'PageView',
  VIEW_CONTENT: 'ViewContent',
  LEAD: 'Lead',
  PURCHASE: 'Purchase',
  ADD_TO_CART: 'AddToCart',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  COMPLETE_REGISTRATION: 'CompleteRegistration',
  CONTACT: 'Contact',
  CUSTOM: 'CustomEvent'
} as const; 