import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Car, Plane, Ticket, Briefcase, Map, Star, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Serviços de Transfer e Turismo | Desbravando Foz',
  description: 'Transfers aeroporto, city tours, transporte para eventos e ingressos. Tudo em Foz do Iguaçu.',
};

const services = [
  {
    icon: Plane,
    num: '01',
    title: 'Transfer Aeroporto (IGU)',
    desc: 'Monitoramos seu voo em tempo real. Motorista com placa de identificação aguarda no desembarque — direto ao seu hotel, 24h por dia.',
    tags: ['24h / 7 dias', 'Monitoramento de voo', 'Todos os hotéis'],
  },
  {
    icon: Map,
    num: '02',
    title: 'Passeios Turísticos',
    desc: 'Cataratas do Iguaçu (BR/AR), Itaipu Binacional, Parque das Aves e Marco das Três Fronteiras com guias credenciados e veículos climatizados.',
    tags: ['Brasil & Argentina', 'Guia bilíngue', 'Privativo'],
  },
  {
    icon: Car,
    num: '03',
    title: 'Diárias à Disposição',
    desc: 'Veículo com motorista disponível pelo tempo que precisar — compras, reuniões, visitas médicas ou roteiros personalizados.',
    tags: ['Flexível', 'Sedan ou Van', 'Qualquer destino'],
  },
  {
    icon: Briefcase,
    num: '04',
    title: 'Corporativo & Eventos',
    desc: 'Logística completa para congressos, feiras e eventos corporativos. Frotas executivas e coordenação de transporte para grupos de qualquer tamanho.',
    tags: ['Grupos grandes', 'Vans executivas', 'Pontualidade'],
  },
  {
    icon: Ticket,
    num: '05',
    title: 'Ingressos Antecipados',
    desc: 'Facilitamos a compra dos ingressos das atrações de Foz do Iguaçu. Evite filas e garanta seu acesso com antecedência.',
    tags: ['Cataratas', 'Itaipu', 'Parque das Aves'],
  },
  {
    icon: Star,
    num: '06',
    title: 'Experiências VIP',
    desc: 'Jantares exclusivos com vista para as cataratas, passeios de helicóptero, barcos privativos e experiências únicas para ocasiões especiais.',
    tags: ['Premium', 'Sob medida', 'Ocasiões especiais'],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* ── HERO HEADER ─────────────────────────── */}
      <div className="bg-gradient-to-br from-primary via-primary-light to-secondary/70 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage:'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize:'20px 20px'}}
        />
        <div className="absolute -bottom-1 left-0 w-full">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,0 C360,60 1080,0 1440,40 L1440,60 L0,60 Z" fill="#F0F8FF" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-secondary/60" />
            <span className="text-secondary/80 font-bold text-xs uppercase tracking-widest">O que oferecemos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4">
            Nossos Serviços
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Transporte executivo e experiências turísticas para você aproveitar cada momento em Foz do Iguaçu.
          </p>
        </div>
      </div>

      {/* ── SERVICES LIST ───────────────────────── */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start gap-0">
                {/* Número lateral */}
                <div className="flex items-center justify-center md:w-24 py-6 md:py-8 px-6 bg-secondary-light/40 group-hover:bg-secondary/10 transition-colors shrink-0 w-full md:self-stretch">
                  <span className="text-4xl font-bold text-secondary/40 group-hover:text-secondary transition-colors font-serif">
                    {s.num}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary transition-colors">
                    <s.icon size={22} className="text-secondary group-hover:text-white transition-colors" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-bold text-primary bg-secondary-light px-3 py-1 rounded-full uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Link href="/contato">
                      <div className="w-10 h-10 rounded-xl border-2 border-gray-200 group-hover:border-secondary flex items-center justify-center text-gray-300 group-hover:text-secondary transition-all">
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────── */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-primary rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{backgroundImage:'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize:'20px 20px'}}
          />
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Precisa de um serviço personalizado?
              </h3>
              <p className="text-white/70">
                Entre em contato e montamos o pacote ideal para você.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="https://wa.me/5545991083852" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="whitespace-nowrap shadow-xl">
                  Falar no WhatsApp
                </Button>
              </a>
              <Link href="/experiencias">
                <Button className="bg-white text-primary hover:bg-gray-100 border-transparent whitespace-nowrap">
                  Ver Passeios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
