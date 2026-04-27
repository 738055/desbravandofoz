// app/blog/page.tsx
import React from 'react';
import Link from 'next/link';
import { TourService } from '@/services/tourService';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog e Dicas | A10 Receptivo',
  description: 'Descubra as melhores dicas, roteiros e curiosidades sobre Foz do Iguaçu.',
};

export default async function BlogPage() {
  const posts = await TourService.getAllPosts();

  return (
    <>
      <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Blog & Experiências</h1>
             <p className="text-gray-600 max-w-2xl mx-auto">Explore nossos artigos exclusivos para tornar sua viagem a Foz do Iguaçu inesquecível.</p>
          </div>

          {posts.length === 0 ? (
             <div className="text-center py-20 bg-white rounded-xl shadow-sm">
                <p className="text-gray-400">Em breve novos artigos...</p>
             </div>
          ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                   <Link href={`/experience/${post.slug}`} key={post.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      <div className="relative h-56 overflow-hidden">
                         <img 
                            src={post.imageUrl} 
                            alt={post.title.pt} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                         />
                         <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                         <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                             {post.title.pt}
                         </h2>
                         <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-1">
                             {post.shortDesc.pt}
                         </p>
                         <span className="text-primary font-bold text-sm uppercase tracking-wide group-hover:underline">
                             Ler Artigo &rarr;
                         </span>
                      </div>
                   </Link>
                ))}
             </div>
          )}
        </div>
      </div>
    </>
  );
}