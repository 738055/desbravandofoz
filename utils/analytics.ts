import { AnalyticsItem } from '../types';

// Tipos de Eventos Padronizados
type EventName = 
  | 'ViewContent' 
  | 'AddToCart' 
  | 'InitiateCheckout' 
  | 'Purchase' 
  | 'Contact' 
  | 'Search';

interface EventParams {
  currency?: string;
  value?: number;
  items?: AnalyticsItem[]; // Usando a interface tipada
  transaction_id?: string;
  search_term?: string;
  
  // Parâmetros Específicos de Google Ads
  gAdsConversionLabel?: string; // Ex: 'AW-123/AbCdEfG'
}

// Helper para acessar window com segurança
const getWindow = () => (typeof window !== 'undefined' ? (window as any) : undefined);

// 1. Rastreamento de PageView Manual (para SPA)
export const pageView = (url: string) => {
  const w = getWindow();
  if (!w) return;

  // Facebook
  if (w.fbq) w.fbq('track', 'PageView');

  // Google Analytics 4 (Atualiza o path virtualmente)
  if (w.gtag) {
    w.gtag('event', 'page_view', {
      page_path: url,
      send_to: w.googleAnalyticsId // Opcional se configurado globalmente, mas seguro
    });
  }
};

// 2. Disparo de Eventos Principais
export const trackEvent = (name: EventName, params: EventParams = {}) => {
  const w = getWindow();
  if (!w) return;

  const { 
    value = 0, 
    currency = 'BRL', 
    items = [], 
    transaction_id, 
    search_term,
    gAdsConversionLabel 
  } = params;

  // --- META PIXEL STRATEGY ---
  // O Facebook gosta de IDs simples array ['123', '456'] e content_type
  if (w.fbq) {
    const fbParams: any = {
      currency: currency,
      value: value,
      content_type: 'product', // Importante para Catálogo Dinâmico
    };

    if (items.length > 0) {
      fbParams.content_ids = items.map(i => i.item_id);
      fbParams.num_items = items.reduce((acc, curr) => acc + curr.quantity, 0);
      fbParams.content_name = items[0].item_name; // Pega o nome do primeiro item como referência
    }

    if (search_term) fbParams.search_string = search_term;

    w.fbq('track', name, fbParams);
  }

  // --- GOOGLE ANALYTICS 4 (GA4) STRATEGY ---
  // O GA4 exige um array de objetos 'items' com estrutura estrita
  if (w.gtag) {
    const ga4EventMap: Record<EventName, string> = {
      'ViewContent': 'view_item',
      'AddToCart': 'add_to_cart',
      'InitiateCheckout': 'begin_checkout',
      'Purchase': 'purchase',
      'Contact': 'generate_lead',
      'Search': 'search'
    };

    const ga4Name = ga4EventMap[name] || name;

    const ga4Params: any = {
      currency: currency,
      value: value,
      items: items, // Passa o array completo com { item_id, item_name, price... }
      transaction_id: transaction_id
    };

    if (search_term) ga4Params.search_term = search_term;

    w.gtag('event', ga4Name, ga4Params);

    // --- GOOGLE ADS CONVERSION (DISPARO DIRETO) ---
    // Se passarmos um Label de Conversão, disparamos especificamente para o Ads
    // Isso é vital para "Purchase" e "Contact" (Whatsapp)
    if (gAdsConversionLabel) {
      w.gtag('event', 'conversion', {
        'send_to': gAdsConversionLabel,
        'value': value,
        'currency': currency,
        'transaction_id': transaction_id
      });
    }
  }
};