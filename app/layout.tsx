import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Providers } from './providers';
import JsonLd from '@/components/JsonLd'; // Componente para injetar dados estruturados
import Analytics from '@/components/Analytics';
import { SettingsService } from '@/services/settingsService';
import './globals.css';

// Configuração das fontes
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
});

// Metadados Globais do Site
export const metadata: Metadata = {
  metadataBase: new URL('https://www.desbravandofoz.com.br'),
  title: {
    default: 'Desbravando Foz | Agência de Turismo em Foz do Iguaçu',
    template: '%s | Desbravando Foz'
  },
  description: 'Sua agência de receptivo em Foz do Iguaçu. Especialistas em Cataratas, Compras no Paraguai, Transfers Privativos e roteiros personalizados.',
  keywords: ['Turismo Foz do Iguaçu', 'Receptivo Foz', 'Transfer Cataratas', 'Compras Paraguai', 'Agência de Turismo Foz', 'Desbravando Foz'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Desbravando Foz',
    description: 'Experiências exclusivas e transporte privativo na Tríplice Fronteira.',
    url: 'https://www.desbravandofoz.com.br',
    siteName: 'Desbravando Foz',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo Desbravando Foz',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // SCHEMA.ORG: Dados Estruturados para Negócios Locais (GEO SEO)
  // Isso ajuda você a aparecer no Google Maps e nas respostas de IA
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Desbravando Foz",
    "image": "https://www.desbravandofoz.com.br/logo.png",
    "@id": "https://www.desbravandofoz.com.br",
    "url": "https://www.desbravandofoz.com.br",
    "telephone": "+5545991083852", // ATUALIZE COM SEU WHATSAPP/FONE REAL
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Agata, 150, Porto Meira", // ATUALIZE COM SEU ENDEREÇO
      "addressLocality": "Foz do Iguaçu",
      "addressRegion": "PR",
      "postalCode": "85.854-070", // ATUALIZE SEU CEP
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.56839487124298, // ATUALIZE (Pegue no Google Maps clicando com botão direito no local)
      "longitude": -54.5787923423285// ATUALIZE
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00", // Funcionamento 24h (ajuste se necessário)
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/desbravandofoz",
      "https://www.facebook.com/desbravandofoz"
    ]
  };

  // Buscando configurações do Supabase no servidor
  const settings = await SettingsService.getSettingsMap();

  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable} scroll-smooth`}>
      <body className="bg-background text-text font-sans antialiased overflow-x-hidden">
        {/* Gerenciador de Rastreamento Dinâmico */}
        <Suspense fallback={null}>
          <Analytics 
            metaPixelId={settings.meta_pixel_id}
            googleAnalyticsId={settings.google_analytics_id}
            googleAdsId={settings.google_ads_id}
          />
        </Suspense>

        {/* Injeção do Schema LocalBusiness para IAs e Google */}
        <JsonLd data={businessSchema} />
        
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow w-full">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}