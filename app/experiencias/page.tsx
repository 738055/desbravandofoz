import React from 'react';
import { Metadata } from 'next';
import { TourService } from '@/services/tourService';
import ToursGrid from '@/components/ToursGrid';
import { Filter, Search } from 'lucide-react';
import Link from 'next/link';

// CORREÇÃO 1: Força a página a ser dinâmica para aceitar searchParams sem erro
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Experiências e Passeios em Foz do Iguaçu | Desbravando Foz',
  description: 'Confira nossa lista completa de passeios, transfers e pacotes para as Cataratas do Iguaçu, Itaipu e Paraguai.',
};

interface PageProps {
  searchParams?: { 
      category?: string;
      q?: string;
  };
}

export default async function ExperiencesPage({ searchParams }: PageProps) {
  // 1. Busca Segura dos Dados (Evita que a página quebre se o banco falhar)
  const allTours = await TourService.getAll().catch(err => {
    console.error("Erro crítico ao buscar tours:", err);
    return [];
  });

  const publishedTours = allTours.filter(t => t.status === 'published');

  // 2. Extrair categorias únicas de forma segura
  const categories = Array.from(new Set(
    publishedTours.map(t => t.category).filter((c): c is string => !!c)
  ));

  // 3. Lógica de Filtros Segura
  let filteredTours = publishedTours;
  
  // Tratamento para garantir que searchParams existe
  const params = searchParams || {};
  const categoryFilter = params.category;
  const queryFilter = params.q?.toLowerCase();

  if (categoryFilter && categoryFilter !== 'todas') {
      filteredTours = filteredTours.filter(t => t.category === categoryFilter);
  }

  if (queryFilter) {
      filteredTours = filteredTours.filter(t => 
        t.title?.pt?.toLowerCase().includes(queryFilter) || 
        t.location?.pt?.toLowerCase().includes(queryFilter)
      );
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Catálogo</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Experiências Exclusivas
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore o melhor de Foz do Iguaçu com nossos roteiros personalizados.
          </p>
          <div className="w-16 h-1 bg-secondary mx-auto mt-5 rounded-full" />
        </div>

        {/* Barra de Filtros */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-24 z-30">
          {/* Categorias */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <Link
              href="/experiencias"
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all ${
                !categoryFilter ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-secondary-light hover:text-primary'
              }`}
            >
              Todas
            </Link>
            {categories.map(cat => (
              <Link
                key={cat}
                href={`/experiencias?category=${cat}`}
                className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-bold transition-all capitalize ${
                  categoryFilter === cat ? 'bg-secondary text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-secondary-light hover:text-primary'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Busca */}
          <div className="w-full md:w-72">
            <form className="relative">
              <input
                name="q"
                defaultValue={queryFilter}
                placeholder="Buscar passeio..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none text-sm bg-gray-50"
              />
              <Search className="absolute left-3 top-3 text-gray-400" size={16} />
            </form>
          </div>
        </div>

        {/* Resultados */}
        {filteredTours.length > 0 ? (
          <ToursGrid tours={filteredTours} />
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-secondary/20">
            <Filter className="mx-auto text-secondary/30 mb-4" size={48} />
            <h3 className="text-lg font-bold text-primary">Nenhum passeio encontrado</h3>
            <p className="text-gray-500 mb-4 text-sm">Tente ajustar seus filtros de busca.</p>
            <Link href="/experiencias">
              <button className="text-secondary font-bold hover:underline text-sm">Limpar Filtros</button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}