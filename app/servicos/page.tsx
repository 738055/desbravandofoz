// a10receptivo2.0/app/servicos/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Car, Plane, Ticket, Briefcase, Map, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços de Transfer e Turismo | Desbravando Foz',
  description: 'Transfers aeroporto, city tours, transporte para eventos e ingressos. Tudo o que você precisa em Foz do Iguaçu em um só lugar.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Plane,
      title: 'Transfer Aeroporto (IGU)',
      desc: 'Chegue com tranquilidade. Monitoramos seu voo e aguardamos no desembarque com placa de identificação.'
    },
    {
      icon: Map,
      title: 'Passeios Turísticos',
      desc: 'Levamos você às Cataratas (BR/AR), Itaipu, Parque das Aves e Marco das Três Fronteiras com conforto.'
    },
    {
      icon: Briefcase,
      title: 'Corporativo & Eventos',
      desc: 'Logística completa para congressos e reuniões. Vans executivas e coordenação de transporte para grandes grupos.'
    },
    {
      icon: Ticket,
      title: 'Ingressos Antecipados',
      desc: 'Facilitamos sua entrada nos atrativos. Compre ingressos conosco e evite filas nas bilheterias.'
    },
    {
      icon: Car,
      title: 'Diárias à Disposição',
      desc: 'Veículo com motorista à sua disposição pelo tempo que precisar, para compras ou reuniões.'
    },
    {
      icon: Star,
      title: 'Experiências VIP',
      desc: 'Jantares exclusivos, passeios de helicóptero e barcos privados para momentos especiais.'
    }
  ];

  return (
    <main className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">O que oferecemos</span>
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Nossos Serviços</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Transporte e guias credenciados para experiências incríveis em todos os atrativos da tríplice fronteira.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-5 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-secondary/30 group hover:-translate-y-1">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-5 group-hover:bg-secondary group-hover:text-white transition-all">
                <s.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}