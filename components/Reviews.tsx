'use client';

import React from 'react';
import { REVIEWS } from '@/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { Star } from 'lucide-react';

const Reviews = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary-light/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none"
        style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #0CC0CF 1px, transparent 0)', backgroundSize: '32px 32px'}}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">
            Avaliações
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
            O que nossos clientes dizem
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-secondary/20 relative flex flex-col"
            >
              {/* Quote decoration */}
              <div className="absolute top-5 right-5 text-5xl font-serif text-secondary/10 leading-none select-none">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#0CC0CF" stroke="#0CC0CF" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm leading-relaxed italic mb-6 flex-grow">
                &ldquo;{review.content[language]}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
