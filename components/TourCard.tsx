'use client';

import React from 'react';
import Link from 'next/link';
import { Tour } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star, Tag, ArrowRight, Clock } from 'lucide-react';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { language, t } = useLanguage();

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const getDisplayDetails = () => {
    let price = tour.basePrice;
    let isPromo = false;

    if (tour.pricingType === 'per_vehicle' && tour.vehicleTiers && tour.vehicleTiers.length > 0) {
      const prices = tour.vehicleTiers.map(tier =>
        (tier.promotionalPrice && tier.promotionalPrice > 0 && tier.promotionalPrice < tier.price)
          ? tier.promotionalPrice
          : tier.price
      );
      price = Math.min(...prices);
      isPromo = tour.vehicleTiers.some(
        tier => tier.promotionalPrice && tier.promotionalPrice > 0 && tier.promotionalPrice < tier.price
      );
    } else {
      if (tour.pricePromotional && tour.pricePromotional > 0 && tour.pricePromotional < tour.basePrice) {
        price = tour.pricePromotional;
        isPromo = true;
      }
    }

    return { price, isPromo };
  };

  const { price: displayPrice, isPromo } = getDisplayDetails();
  const rating = tour.rating ? tour.rating.toFixed(1) : '5.0';

  return (
    <Link
      href={`/tour/${tour.slug}`}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 flex flex-col border border-gray-100 hover:border-secondary/30 hover:-translate-y-1"
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={tour.image}
          alt={tour.title[language]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />

        {/* Category badge */}
        {tour.category && (
          <div className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full capitalize shadow-md tracking-wider">
            {tour.category}
          </div>
        )}

        {/* Promo badge */}
        {isPromo && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
            <Tag size={9} /> OFERTA
          </div>
        )}

        {/* Rating badge (overlapping bottom) */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-full shadow-md">
          <Star size={12} fill="#0CC0CF" stroke="#0CC0CF" />
          <span className="font-bold text-xs">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          className="font-serif text-lg font-bold text-primary mb-1.5 line-clamp-1 group-hover:text-secondary transition-colors"
          title={tour.title[language]}
        >
          {tour.title[language]}
        </h3>

        <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed flex-grow">
          {tour.description[language]}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
              {t.tours.from || 'A partir de'}
            </p>
            <div className="flex items-baseline gap-1.5">
              <p className="text-xl font-bold text-primary">{formatCurrency(displayPrice)}</p>
              {tour.pricingType === 'per_vehicle' && (
                <span className="text-[10px] text-gray-400 font-medium uppercase">/ Veículo</span>
              )}
            </div>
          </div>

          <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
            <ArrowRight size={16} className="text-secondary group-hover:text-white transition-colors" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
