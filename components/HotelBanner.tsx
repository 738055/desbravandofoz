import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { translations } from '@/utils/translations';
import { MapPin, Phone } from 'lucide-react';

const HotelBanner = () => {
  const t = translations.pt.hotelBanner;

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary/80" />
      <div className="absolute inset-0 opacity-5"
        style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px'}}
      />
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-dark/30 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
            <MapPin size={14} className="text-secondary" />
            <span className="text-white/90 font-bold tracking-widest uppercase text-xs">Foz do Iguaçu</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3 leading-tight">
            {t.title}
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://wa.me/5545991083852" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="shadow-xl shadow-secondary/30 hover:-translate-y-1 flex items-center gap-2">
                <Phone size={16} />
                {t.cta}
              </Button>
            </Link>
            <Link href="/experiencias">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary shadow-xl">
                Ver Passeios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelBanner;
