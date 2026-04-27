'use client';

import React, { useState } from 'react';
import { BlogPost } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';
import Link from './Link';

interface InfoCarouselProps {
  posts: BlogPost[];
}

const InfoCarousel: React.FC<InfoCarouselProps> = ({ posts }) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!posts || posts.length === 0) {
    return null;
  }

  const prevSlide = () => {
    setCurrentIndex(i => (i === 0 ? posts.length - 1 : i - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(i => (i === posts.length - 1 ? 0 : i + 1));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Blog & Dicas</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Conheça Foz do Iguaçu
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-secondary hover:text-secondary text-gray-400 transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-secondary hover:text-secondary text-gray-400 transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="min-w-full flex-shrink-0 group">
                <div className="relative w-full h-80 md:h-[440px]">
                  <img
                    src={post.imageUrl}
                    alt={post.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                        <BookOpen size={12} className="text-secondary" />
                      </div>
                      <span className="text-secondary text-xs font-bold uppercase tracking-widest">Artigo</span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors leading-tight max-w-2xl">
                      {post.title[language]}
                    </h3>
                    <p className="text-white/75 max-w-xl text-sm md:text-base line-clamp-2">
                      {post.shortDesc[language]}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-secondary text-sm font-bold">
                      <span>Ler artigo</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Mobile controls */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute top-1/2 -translate-y-1/2 left-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="md:hidden absolute top-1/2 -translate-y-1/2 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all"
          >
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Dots */}
        {posts.length > 1 && (
          <div className="flex justify-center gap-2 mt-5">
            {posts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex ? 'w-6 h-2 bg-secondary' : 'w-2 h-2 bg-gray-200 hover:bg-secondary/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default InfoCarousel;
