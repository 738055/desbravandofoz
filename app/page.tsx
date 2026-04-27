import React from 'react';
import { Metadata } from 'next';
import { TourService } from '@/services/tourService';
import TourCard from '@/components/TourCard';
import Button from '@/components/Button';
import Link from '@/components/Link';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import InfoCarousel from '@/components/InfoCarousel';
import HotelBanner from '@/components/HotelBanner';
import {
  ArrowRight, CheckCircle2, Shield, Clock, Users, Compass,
  Star, Award, MapPin, Zap, ChevronRight
} from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Desbravando Foz | Turismo Premium em Foz do Iguaçu',
  description: 'Especialistas em receptivo em Foz do Iguaçu. Transfers privativos, passeios nas Cataratas, compras no Paraguai com segurança e conforto.',
  keywords: 'foz do iguaçu, turismo, transfer, cataratas, compras paraguai, receptivo, desbravando foz',
};

export default async function Home() {
  const featuredTours = await TourService.getFeatured().catch(() => []);
  const posts = await TourService.getAllPosts().catch(() => []);

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">

      {/* ── HERO ────────────────────────────────── */}
      <Hero
        title="Desbrave Foz do Iguaçu"
        subtitle="Experiências únicas nas Cataratas. Transfers privativos, roteiros exclusivos e atendimento bilíngue para você e sua família."
        videoUrl="https://yyfepxqhydjqjngytmxc.supabase.co/storage/v1/object/public/videos/VID-20260119-WA0153.mp4"
        imageUrl="/hero-cataratas.jpg"
      />

      {/* ── STATS FLOATING BAR ──────────────────── */}
      <section className="relative z-10 -mt-1">
        <div className="bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {[
                { value: '10+', label: 'Anos de Experiência', icon: Award },
                { value: '15k+', label: 'Clientes Atendidos', icon: Users },
                { value: '5k+', label: 'Transfers Realizados', icon: MapPin },
                { value: '5.0', label: 'Avaliação no Google', icon: Star },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-4 py-6 px-6 group">
                  <Icon size={24} className="text-secondary shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <p className="text-2xl font-bold text-white leading-none">{value}</p>
                    <p className="text-[11px] text-white/50 uppercase tracking-wider mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO / WHY US ──────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-10 bg-secondary" />
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">Por que nos escolher</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-6">
                A melhor forma de<br />
                <span className="text-secondary">viver Foz do Iguaçu</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-10">
                A <strong className="text-primary font-semibold">Desbravando Foz</strong> elimina as preocupações
                da sua viagem. Do aeroporto às Cataratas, cuidamos de cada detalhe com pontualidade,
                segurança e atendimento bilíngue.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: Clock, title: 'Atendimento 24h', desc: 'Suporte contínuo via WhatsApp em português, inglês e espanhol.' },
                  { icon: Shield, title: 'Veículos Monitorados', desc: 'Frota própria com rastreamento e seguro de passageiro incluído.' },
                  { icon: Compass, title: 'Guias Credenciados', desc: 'Profissionais certificados pelo Ministério do Turismo.' },
                  { icon: Users, title: 'Roteiros Personalizados', desc: 'Do casal ao grupo corporativo — planejamos tudo para você.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={18} className="text-secondary" />
                    </div>
                    <div>
                      <p className="font-bold text-primary text-sm">{title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/sobre">
                <Button variant="outline" className="flex items-center gap-2 group">
                  Nossa história
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Imagem + card flutuante */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img src="/hero-cataratas.jpg" alt="Cataratas do Iguaçu" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
              </div>
              {/* card flutuante */}
              <div className="absolute -bottom-6 -left-8 bg-white rounded-2xl shadow-2xl p-5 border border-gray-100 max-w-[220px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-sm leading-tight">+5.000 clientes</p>
                    <p className="text-xs text-gray-400">satisfeitos</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#0CC0CF" stroke="#0CC0CF" />)}
                  <span className="text-xs font-bold text-gray-600 ml-1">5.0</span>
                </div>
              </div>
              {/* badge topo */}
              <div className="absolute -top-4 -right-4 bg-primary rounded-2xl shadow-xl px-4 py-3 text-white">
                <p className="text-2xl font-bold leading-none">10+</p>
                <p className="text-[10px] uppercase tracking-widest opacity-70">anos</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BLOG / INFO CAROUSEL ────────────────── */}
      <section className="bg-background">
        <InfoCarousel posts={posts} />
      </section>

      {/* ── FEATURED TOURS ──────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decoração de fundo */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-secondary-light/20 -skew-x-6 translate-x-16 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-secondary" />
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">Nossas Seleções</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
                Experiências<br />que marcam
              </h2>
              <p className="text-gray-500 mt-3 max-w-sm">
                Os passeios mais desejados de Foz do Iguaçu, escolhidos pela nossa equipe.
              </p>
            </div>
            <Link href="/experiencias" className="shrink-0">
              <Button variant="outline" className="flex items-center gap-2 group">
                Ver catálogo completo
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {featuredTours.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed border-secondary/20 rounded-2xl bg-secondary-light/20">
              <Compass size={40} className="mx-auto mb-3 text-secondary/40" />
              <p className="font-medium text-gray-500">Nenhum destaque selecionado no momento.</p>
            </div>
          )}

          <div className="mt-10 text-center md:hidden">
            <Link href="/experiencias">
              <Button fullWidth variant="secondary">Ver Catálogo Completo</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── DARK CTA SECTION ────────────────────── */}
      <section className="bg-primary-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage:'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize:'28px 28px'}}
        />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 text-center relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 rounded-full px-5 py-2 mb-6">
            <Zap size={14} className="text-secondary" />
            <span className="text-secondary text-xs font-bold uppercase tracking-widest">Reserve agora</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-5 leading-tight">
            Pronto para desbravare<br />as Cataratas?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            Entre em contato pelo WhatsApp e planeje sua viagem com nossa equipe. Atendimento 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/experiencias">
              <Button variant="secondary" size="lg" className="shadow-2xl shadow-secondary/20 hover:-translate-y-0.5 transition-transform">
                Ver Experiências
              </Button>
            </Link>
            <a href="https://wa.me/5545991083852" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-transparent shadow-2xl hover:-translate-y-0.5 transition-transform">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ─────────────────────────────── */}
      <Reviews />

      {/* ── HOTEL BANNER ────────────────────────── */}
      <HotelBanner />

    </main>
  );
}
