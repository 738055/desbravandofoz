// a10receptivo2.0/app/contato/page.tsx
import React from 'react';
import { Metadata } from 'next';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Fale Conosco | Desbravando Foz',
  description: 'Entre em contato para orçamentos, dúvidas ou reservas. Atendimento rápido via WhatsApp e E-mail.',
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Info */}
            <div>
                <span className="text-secondary font-bold uppercase tracking-widest text-xs">Atendimento</span>
                <h1 className="text-4xl font-serif font-bold text-primary mt-2 mb-6">Estamos aqui por você</h1>
                <p className="text-gray-600 mb-10 text-lg">
                    Tem dúvidas sobre roteiros? Precisa de uma cotação especial para grupos? 
                    Nossa equipe está pronta para ajudar a planejar sua viagem ideal.
                </p>

                <div className="space-y-6">
                    <a href="https://wa.me/5545991083852" target="_blank" className="flex items-center gap-5 p-6 bg-secondary-light rounded-2xl border border-secondary/20 hover:shadow-md hover:border-secondary/50 transition-all group">
                        <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                            <MessageCircle size={22} />
                        </div>
                        <div>
                            <h3 className="font-bold text-primary text-lg">WhatsApp</h3>
                            <p className="text-secondary font-medium text-sm">Conversar agora &rarr;</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-primary">Telefone</h3>
                            <p className="text-gray-600 text-sm">+55 (45) 99108-3852</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-11 h-11 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-primary">E-mail</h3>
                            <p className="text-gray-600 text-sm">a10receptivo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary">Envie uma mensagem</h3>
                <div className="w-10 h-1 bg-secondary rounded-full mt-2" />
              </div>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Nome</label>
                    <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm bg-gray-50" placeholder="Seu nome" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Telefone</label>
                    <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm bg-gray-50" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">E-mail</label>
                  <input type="email" className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all text-sm bg-gray-50" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Assunto</label>
                  <select className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-gray-50 text-sm">
                    <option>Cotação de Transfer</option>
                    <option>Reserva de Passeios</option>
                    <option>Grupos e Eventos</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Mensagem</label>
                  <textarea className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all h-32 resize-none text-sm bg-gray-50" placeholder="Como podemos ajudar?" />
                </div>
                <Button variant="secondary" fullWidth className="py-4 text-base">Enviar Solicitação</Button>
              </form>
            </div>
        </div>
      </div>
    </main>
  );
}