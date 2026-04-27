'use client';

import React from 'react';
import { STATS } from '@/constants';
import { Award, MapPin, Users, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const iconMap: { [key: string]: React.ElementType } = {
  Award,
  MapPin,
  Users,
  Star,
};

const TrustBar = () => {
  const { language } = useLanguage();

  return (
    <section className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => {
            const Icon = iconMap[stat.iconName] || Star;
            return (
              <div
                key={stat.id}
                className="flex flex-col items-center gap-2 group text-center p-4 rounded-2xl hover:bg-secondary-light/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors mb-1">
                  <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label[language]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
