import React from 'react';
import Button from './Button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl?: string;
  videoUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageUrl, videoUrl }) => {
  return (
    <div className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center text-white text-center overflow-hidden">
      {/* Overlay gradiente: azul profundo → transparente */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-dark/80 via-primary/60 to-primary-dark/70" />

      {/* Linha turquesa decorativa no topo */}
      <div className="absolute top-0 left-0 w-full h-1 z-20 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover animate-kenburns"
        />
      ) : null}

      {/* Conteúdo */}
      <div className="relative z-20 px-4 animate-fade-in-up max-w-5xl mx-auto">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">
            Foz do Iguaçu
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-5 drop-shadow-2xl leading-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md text-white/90 leading-relaxed mb-10">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/experiencias">
            <Button size="lg" variant="secondary" className="shadow-2xl shadow-secondary/30 hover:-translate-y-1">
              Ver Experiências
            </Button>
          </Link>
          <Link href="/contato">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary shadow-2xl">
              Falar Conosco
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 opacity-60 animate-bounce">
        <span className="text-white text-[10px] uppercase tracking-widest">Explorar</span>
        <ChevronDown size={20} className="text-secondary" />
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#F0F8FF" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
