import React from 'react';
import Link from 'next/link';
import { TourService } from '@/services/tourService';
import { Metadata } from 'next';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog e Dicas | Desbravando Foz',
  description: 'Descubra as melhores dicas, roteiros e curiosidades sobre Foz do Iguaçu.',
};

export default async function BlogPage() {
  const posts = await TourService.getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <main className="min-h-screen bg-background pt-28 pb-20">

      {/* ── PAGE HEADER ──────────────────────── */}
      <div className="container mx-auto px-4 mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-secondary" />
          <span className="text-secondary font-bold text-xs uppercase tracking-widest">Blog</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
            Dicas & Experiências
          </h1>
          <p className="text-gray-500 max-w-sm md:text-right">
            Tudo o que você precisa saber para aproveitar Foz do Iguaçu ao máximo.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">

        {posts.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-secondary/20">
            <BookOpen size={48} className="mx-auto mb-4 text-secondary/30" />
            <p className="text-gray-400 font-medium">Em breve novos artigos...</p>
          </div>
        ) : (
          <>
            {/* ── FEATURED POST (magazine hero) ──── */}
            {featured && (
              <Link href={`/blog/${featured.slug}`} className="group block mb-10">
                <div className="relative rounded-3xl overflow-hidden aspect-[21/9] md:aspect-[3/1] shadow-2xl">
                  <img
                    src={featured.imageUrl}
                    alt={featured.title.pt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent" />

                  <div className="absolute inset-0 flex items-end p-8 md:p-14">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6 rounded-lg bg-secondary/20 border border-secondary/40 flex items-center justify-center">
                          <BookOpen size={12} className="text-secondary" />
                        </div>
                        <span className="text-secondary text-xs font-bold uppercase tracking-widest">Artigo em Destaque</span>
                      </div>
                      <h2 className="text-2xl md:text-4xl font-serif font-bold text-white mb-3 group-hover:text-secondary transition-colors leading-tight">
                        {featured.title.pt}
                      </h2>
                      <p className="text-white/70 text-sm md:text-base line-clamp-2 mb-5 max-w-lg">
                        {featured.shortDesc.pt}
                      </p>
                      <div className="inline-flex items-center gap-2 bg-secondary text-white text-sm font-bold px-5 py-2.5 rounded-xl group-hover:bg-secondary-dark transition-colors">
                        Ler artigo completo
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* ── REST GRID ─────────────────────── */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link
                    href={`/blog/${post.slug}`}
                    key={post.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-secondary/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[16/9]">
                      <img
                        src={post.imageUrl}
                        alt={post.title.pt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          Artigo
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-base font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors leading-snug">
                        {post.title.pt}
                      </h2>
                      <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                        {post.shortDesc.pt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                          <Clock size={12} />
                          <span>5 min de leitura</span>
                        </div>
                        <span className="text-secondary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                          Ler mais <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
