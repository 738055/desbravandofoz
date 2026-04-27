'use client';

import React from 'react';
import { NEWS } from '../constants';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Button from './Button';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname();

  if (pathname && pathname.startsWith('/admin')) {
    return null;
  }

  const logoSrc = '/logo.png';

  return (
    <footer className="bg-primary-dark text-white pt-24 pb-10 border-t border-white/5">
      {/* Newsletter Strip */}
      <div className="container mx-auto px-4 mb-20">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-90" />
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-5"
            style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px'}}
          />
          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-secondary/20 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />

          <div className="relative z-10 p-8 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:pr-12 max-w-xl">
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-2 block">Newsletter</span>
              <h3 className="font-serif font-bold text-3xl md:text-4xl mb-3 leading-tight text-white">
                {t.footer.newsletterTitle}
              </h3>
              <p className="text-white/75 text-base font-light">{t.footer.newsletterDesc}</p>
            </div>

            <div className="w-full lg:w-auto flex-1 max-w-md">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t.footer.emailPlaceholder}
                  className="flex-grow px-5 py-4 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-secondary shadow-inner text-sm"
                />
                <Button variant="secondary" className="whitespace-nowrap py-4 px-7 shadow-lg">
                  {t.footer.subscribe}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 border-b border-white/10 pb-16">

        {/* Brand / Services */}
        <div>
          <img src={logoSrc} alt="Desbravando Foz" className="h-10 mb-8 brightness-0 invert" />

          <h4 className="font-sans font-bold text-sm text-secondary mb-5 uppercase tracking-widest">
            {t.footer.servicesTitle}
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {[t.footer.service1, t.footer.service2, t.footer.service3, t.footer.service4].map((service, i) => (
              <li key={i}>
                <a href="#" className="hover:text-secondary transition-colors flex items-center gap-2 py-0.5 group">
                  <span className="w-1 h-1 rounded-full bg-secondary/40 group-hover:bg-secondary transition-colors" />
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* News */}
        <div className="lg:col-span-2">
          <h4 className="font-sans font-bold text-sm text-secondary mb-6 uppercase tracking-widest">
            {t.footer.newsTitle}
          </h4>
          <ul className="space-y-5">
            {NEWS.map((item) => (
              <li key={item.id} className="group">
                <a href="#" className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h5 className="text-gray-300 font-medium group-hover:text-secondary transition-colors leading-snug text-sm">
                      {item.title}
                    </h5>
                    <span className="text-xs text-gray-600 mt-1 block uppercase tracking-wider">
                      {t.footer.readArticle}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-sans font-bold text-sm text-secondary mb-6 uppercase tracking-widest">
            {t.footer.supportTitle}
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                <Phone size={16} />
              </div>
              <span className="group-hover:text-white transition-colors">+55 (45) 99108-3852</span>
            </li>
            <li className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                <WhatsAppIcon size={16} />
              </div>
              <span className="group-hover:text-white transition-colors">+55 (45) 99108-3852</span>
            </li>
            <li className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                <Mail size={16} />
              </div>
              <span className="group-hover:text-white transition-colors text-xs">a10receptivo@gmail.com</span>
            </li>
            <li className="flex items-center gap-3 group cursor-pointer">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all">
                <MapPin size={16} />
              </div>
              <span className="group-hover:text-white transition-colors text-xs">Foz do Iguaçu, PR</span>
            </li>

            <li className="pt-4">
              <div className="flex space-x-2">
                <a href="#" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all text-gray-400">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all text-gray-400">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all text-gray-400">
                  <Youtube size={16} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-medium uppercase tracking-widest gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-0.5 bg-secondary/40" />
          <p>{t.footer.copyright}</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-secondary transition-colors">{t.footer.privacy}</a>
          <a href="#" className="hover:text-secondary transition-colors">{t.footer.terms}</a>
          <a href="#" className="hover:text-secondary transition-colors">{t.footer.sitemap}</a>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppIcon = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default Footer;
