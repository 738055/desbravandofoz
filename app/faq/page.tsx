'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaqService } from '@/services/faqService';
import { Faq } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqPage() {
    const { t, language } = useLanguage();
    const [faqs, setFaqs] = useState<Faq[]>([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        const fetchFaqs = async () => {
            const data = await FaqService.getActive();
            setFaqs(data);
            setLoading(false);
        };
        fetchFaqs();
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Header />
            <div className="pt-32 pb-14 px-6 bg-gradient-to-br from-primary via-primary-light to-secondary/70 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '20px 20px'}} />
              <div className="container mx-auto max-w-4xl text-center relative z-10">
                <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Dúvidas</span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{t.faq.title}</h1>
                <p className="text-white/80 text-lg font-light">{t.faq.subtitle}</p>
              </div>
            </div>

            <div className="flex-1 container mx-auto max-w-3xl px-6 py-12">
                {loading ? (
                    <div className="text-center py-12 text-gray-400">Carregando...</div>
                ) : faqs.length === 0 ? (
                    <div className="text-center py-12 text-gray-500 bg-white rounded-xl shadow-sm p-8">
                        {t.faq.empty}
                    </div>
                ) : (
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                className={`bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
                                  openIndex === index ? 'border-secondary/40 shadow-md' : 'border-gray-100 shadow-sm hover:border-secondary/20 hover:shadow-md'
                                }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                                >
                                    <span className="font-sans font-bold text-base text-primary pr-4">
                                        {faq.question[language]}
                                    </span>
                                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                      openIndex === index ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary'
                                    }`}>
                                      {openIndex === index ? (
                                          <ChevronUp size={16} />
                                      ) : (
                                          <ChevronDown size={16} />
                                      )}
                                    </div>
                                </button>

                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="pt-2 text-gray-600 leading-relaxed border-t border-secondary/10 text-sm">
                                        {faq.answer[language]}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </main>
    );
}