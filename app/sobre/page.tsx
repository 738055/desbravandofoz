
import React from 'react';
import { Metadata } from 'next';
import { Shield, Clock, Heart, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quem Somos | Desbravando Foz',
  description: 'Conheça a história da Desbravando Foz. Oferecendo excelência em turismo e transporte executivo na Tríplice Fronteira.',
};

export default function AboutPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Sobre nós</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Nossa História
          </h1>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 leading-relaxed">
            Fundada com a missão de elevar o padrão do turismo em Foz do Iguaçu, a <strong className="text-primary">Desbravando Foz</strong> combina a hospitalidade brasileira com a eficiência logística necessária para uma viagem perfeita.
          </p>
        </div>

        {/* Imagem + Texto */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=1000&auto=format&fit=crop" 
                    alt="Cataratas do Iguaçu" 
                    className="w-full h-full object-cover"
                 />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-primary">Por que existimos?</h3>
              <p className="text-gray-600 leading-relaxed">
                Acreditamos que viajar é colecionar memórias. Por isso, eliminamos as preocupações logísticas. Somos anfitriões que conhecem cada canto da cidade, os melhores horários para visitar os atrativos e aquele restaurante especial que só os locais conhecem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { Icon: Shield, title: 'Segurança Total', desc: 'Veículos monitorados e revisados, com seguro total para passageiros.' },
                  { Icon: Heart, title: 'Atendimento Humano', desc: 'Nossa equipe está disponível via WhatsApp para qualquer necessidade.' },
                  { Icon: Clock, title: 'Pontualidade', desc: 'Respeito ao seu tempo. Transfers no horário certo, sempre.' },
                  { Icon: Users, title: 'Equipe Especializada', desc: 'Guias credenciados e bilíngues para uma experiência completa.' },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="bg-secondary-light/50 p-5 rounded-2xl border border-secondary/20 group hover:border-secondary/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary transition-colors">
                      <Icon className="text-secondary group-hover:text-white transition-colors" size={20} />
                    </div>
                    <h4 className="font-bold text-primary mb-1">{title}</h4>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Estatísticas */}
        <div className="bg-gradient-to-br from-primary via-primary-light to-secondary/80 rounded-3xl p-12 text-white text-center grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px'}} />
            {[
                { label: 'Anos de Experiência', value: '10+' },
                { label: 'Clientes Atendidos', value: '15k+' },
                { label: 'Destinos', value: '20+' },
                { label: 'Avaliação Média', value: '5.0' },
            ].map((stat, i) => (
                <div key={i}>
                    <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                    <div className="text-white/70 uppercase tracking-wider text-xs font-bold">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}