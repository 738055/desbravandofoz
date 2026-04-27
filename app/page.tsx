import React from 'react';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import HotelBanner from '@/components/HotelBanner';
import InfoCarousel from '@/components/InfoCarousel';
import ToursGrid from '@/components/ToursGrid';
import Reviews from '@/components/Reviews';
import TrustBar from '@/components/TrustBar';
import { TourService } from '@/services/tourService';
import Button from '@/components/Button';
import Link from '@/components/Link';
import { ArrowRight, CheckCircle2, Compass, Shield, Clock, Users } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Desbravando Foz | Turismo e Transfers em Foz do Iguaçu',
  description: 'Especialistas em receptivo em Foz do Iguaçu. Transfers privativos, passeios nas Cataratas, compras no Paraguai e muito mais com segurança e conforto.',
  keywords: 'foz do iguaçu, turismo, transfer, cataratas, compras paraguai, receptivo, desbravando foz'
};

export default async function Home() {
  const featuredTours = await TourService.getFeatured().catch(() => []);
  const posts = await TourService.getAllPosts().catch(() => []);

  return (
    <main className="min-h-screen bg-background">
      <Hero
        title="Desbrave Foz do Iguaçu"
        subtitle="Experiências únicas nas Cataratas. Transfers privativos, roteiros exclusivos e atendimento bilíngue para você e sua família."
        videoUrl="https://yyfepxqhydjqjngytmxc.supabase.co/storage/v1/object/public/videos/VID-20260119-WA0153.mp4"
        imageUrl="/hero-cataratas.jpg"
      />

      {/* TrustBar */}
      <TrustBar />

      {/* Seção de Valor */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">
                Bem-vindo à Foz
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                Viva a Terra das Cataratas
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                A <strong className="text-primary">Desbravando Foz</strong> cuida de cada detalhe da sua viagem —
                do aeroporto aos passeios mais incríveis, garantindo segurança, pontualidade e
                momentos inesquecíveis.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, label: 'Atendimento 24h' },
                  { icon: Shield, label: 'Frota Privativa' },
                  { icon: Compass, label: 'Guias Credenciados' },
                  { icon: Users, label: 'Roteiros Personalizados' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 rounded-xl bg-secondary-light/50 border border-secondary/20">
                    <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-secondary" />
                    </div>
                    <span className="text-sm font-semibold text-primary">{label}</span>
                  </div>
                ))}
              </div>

              <Link href="/sobre">
                <Button variant="outline" className="flex items-center gap-2">
                  Conheça Nossa História <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

            {/* Visual decorativo */}
            <div className="relative hidden md:block">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-cataratas.jpg"
                  alt="Cataratas do Iguaçu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm">+5.000 clientes</p>
                    <p className="text-xs text-gray-500">satisfeitos atendidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* InfoCarousel */}
      <InfoCarousel posts={posts} />

      {/* Destaques */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">
                Experiências
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Nossas Seleções</h2>
              <p className="text-gray-500 mt-2 text-sm">Os passeios mais desejados e exclusivos para você.</p>
            </div>
            <Link href="/experiencias">
              <Button variant="outline" className="flex items-center gap-2 shrink-0">
                Ver Todas as Experiências <ArrowRight size={16} />
              </Button>
            </Link>
          </div>

          {featuredTours.length > 0 ? (
            <ToursGrid tours={featuredTours} />
          ) : (
            <div className="text-center py-16 text-gray-400 border-2 border-dashed border-secondary/20 rounded-2xl bg-secondary-light/20">
              <Compass size={40} className="mx-auto mb-3 text-secondary/40" />
              <p className="font-medium">Nenhum destaque selecionado no momento.</p>
              <p className="text-xs mt-1">Vá ao Admin e marque a opção "Destaque" em um passeio.</p>
            </div>
          )}

          <div className="mt-10 text-center md:hidden">
            <Link href="/experiencias">
              <Button fullWidth variant="secondary">Ver Catálogo Completo</Button>
            </Link>
          </div>
        </div>
      </section>

      <HotelBanner />

      <Reviews />
    </main>
  );
}
