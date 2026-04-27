// a10receptivo2.0/types.ts

export type Language = 'pt' | 'en' | 'es';

export interface LocalizedContent {
  pt: string;
  en: string;
  es: string;
}

export interface LocalizedArray {
  pt: string[];
  en: string[];
  es: string[];
}

export type PricingType = 'per_person' | 'per_vehicle';
export type TourStatus = 'draft' | 'published' | 'hidden';

export interface VehicleTier {
  id: string;
  minPax: number;
  maxPax: number;
  price: number;
  vehicleName: string;
  promotionalPrice?: number;
}

export interface SeasonalRule {
  id: string;
  startDate: string; 
  endDate: string;   
  price: number;     
  type: 'fixed' | 'percentage'; 
}

export interface ItineraryItem {
  time: string;
  activity: LocalizedContent;
}

export interface SeoConfig {
  metaTitle: LocalizedContent;
  metaDescription: LocalizedContent;
  keywords?: string;
}

export interface Tour {
  id: string;
  slug: string;
  status: TourStatus;
  
  image: string;
  gallery?: string[];
  
  title: LocalizedContent;
  description: LocalizedContent; 
  fullDescription: LocalizedContent; 
  
  rating: number;
  reviewsCount: number;
  duration: LocalizedContent;
  location: LocalizedContent;
  category: string;
  featured: boolean;
  
  displayOrder?: number; // <--- NOVO CAMPO DE ORDEM

  pricingType: PricingType;
  basePrice: number; 
  pricePromotional?: number;
  vehicleTiers?: VehicleTier[];
  seasonalRules?: SeasonalRule[]; 

  highlights: LocalizedArray;
  included: LocalizedArray;
  notIncluded: LocalizedArray;
  itinerary: ItineraryItem[];

  seo?: SeoConfig;
  createdAt?: string; 
}

export interface BlogPost {
  id: string;
  slug: string;
  title: LocalizedContent;
  shortDesc: LocalizedContent;
  content: LocalizedContent;
  imageUrl: string;
  isActive: boolean;
  createdAt?: string;
}

export interface Faq {
  id: string;
  question: LocalizedContent;
  answer: LocalizedContent;
  isActive: boolean;
  createdAt?: string;
}

export interface CartItem {
  tourId: string;
  tourTitle: string; 
  date: string;
  guests: number;
  price: number;
  pricingType: PricingType;
  selectedTierName?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: LocalizedContent; 
  isActive: boolean;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  content: LocalizedContent;
  source: string;
}

export interface Stat {
  id: string;
  value: string;
  label: LocalizedContent;
  iconName: string;
}

export interface AppSetting {
  key: string;
  value: string;
  label: string;
  description?: string;
}

// Interface para itens dentro do carrinho/checkout para Analytics
export interface AnalyticsItem {
  item_id: string;
  item_name: string;
  item_category?: string;
  price: number;
  quantity: number;
  currency?: string;
}