

import { Tour, Review, Stat } from './types';

export const TOURS: Tour[] = [
  {
    id: '1',
    slug: 'cataratas-brasil-vip',
    status: 'published',
    image: 'https://picsum.photos/seed/foz1/1200/800',
    title: {
      pt: 'Cataratas Lado Brasileiro VIP',
      en: 'Brazilian Falls VIP Tour',
      es: 'Cataratas Lado Brasileño VIP'
    },
    description: {
      pt: 'A melhor vista panorâmica das quedas com transporte exclusivo e guia bilíngue.',
      en: 'The best panoramic view of the falls with exclusive transport and bilingual guide.',
      es: 'La mejor vista panorámica de las cataratas con transporte exclusivo y guía bilingüe.'
    },
    fullDescription: {
      pt: '<p>Descubra a maravilha natural do mundo com o conforto que a A10 Receptivo oferece. O passeio pelo lado brasileiro proporciona a mais completa vista panorâmica das cataratas.</p><p>Caminhe pela trilha de 1.200 metros em meio à Mata Atlântica. O ponto alto é a passarela da Garganta do Diabo.</p>',
      en: '<p>Discover the natural wonder of the world with the comfort A10 Receptivo offers. The tour on the Brazilian side provides the most complete panoramic view of the falls.</p><p>Walk the 1,200-meter trail through the Atlantic Forest. The highlight is the Devil\'s Throat walkway.</p>',
      es: '<p>Descubra la maravilla natural del mundo con la comodidad que ofrece A10 Receptivo. El paseo por el lado brasileño proporciona la vista panorámica más completa de las cataratas.</p><p>Camine por el sendero de 1.200 metros en medio de la Mata Atlántica. El punto culminante es la pasarela de la Garganta del Diablo.</p>'
    },
    basePrice: 250,
    pricingType: 'per_person',
    rating: 5.0,
    reviewsCount: 340,
    duration: { pt: '4 Horas', en: '4 Hours', es: '4 Horas' },
    location: { pt: 'Parque Nacional, BR', en: 'National Park, BR', es: 'Parque Nacional, BR' },
    category: 'adventure',
    featured: true,
    highlights: {
      pt: ['Transporte Privativo', 'Acesso Rápido', 'Guia Credenciado'],
      en: ['Private Transport', 'Fast Track Access', 'Certified Guide'],
      es: ['Transporte Privado', 'Acceso Rápido', 'Guía Acreditado']
    },
    included: {
      pt: ['Transfer Hotel/Parque', 'Água Mineral', 'Seguro Passageiro'],
      en: ['Hotel/Park Transfer', 'Bottled Water', 'Passenger Insurance'],
      es: ['Traslado Hotel/Parque', 'Agua Mineral', 'Seguro de Pasajero']
    },
    notIncluded: {
      pt: ['Ingressos do Parque', 'Almoço'],
      en: ['Park Entrance Fees', 'Lunch'],
      es: ['Entradas al Parque', 'Almuerzo']
    },
    itinerary: [
      { time: '08:30', activity: { pt: 'Saída do Hotel', en: 'Hotel Pickup', es: 'Salida del Hotel' } },
      { time: '09:00', activity: { pt: 'Chegada ao Parque', en: 'Arrival at Park', es: 'Llegada al Parque' } }
    ]
  },
  {
    id: '2',
    slug: 'compras-paraguai-privativo',
    status: 'published',
    image: 'https://picsum.photos/seed/ciudaddeleste/400/500',
    title: {
      pt: 'Tour de Compras Paraguai Privativo',
      en: 'Private Shopping Tour Paraguay',
      es: 'Tour de Compras Paraguay Privado'
    },
    description: {
      pt: 'Segurança e conforto para suas compras em Ciudad del Este com carro exclusivo.',
      en: 'Safety and comfort for your shopping in Ciudad del Este with an exclusive car.',
      es: 'Seguridad y comodidad para sus compras en Ciudad del Este con auto exclusivo.'
    },
    fullDescription: {
      pt: '<p>Esqueça o estresse. Levamos você às melhores lojas (Cellshop, Monalisa, Shopping China) com total segurança.</p>',
      en: '<p>Forget the stress. We take you to the best stores (Cellshop, Monalisa, Shopping China) with total safety.</p>',
      es: '<p>Olvídese del estrés. Lo llevamos a las mejores tiendas (Cellshop, Monalisa, Shopping China) con total seguridad.</p>'
    },
    basePrice: 150, // Display price (lowest tier per person approx)
    pricingType: 'per_vehicle',
    vehicleTiers: [
      { id: 'tier1', minPax: 1, maxPax: 4, price: 300, vehicleName: 'Sedan Executivo' },
      { id: 'tier2', minPax: 5, maxPax: 15, price: 600, vehicleName: 'Van Executiva' }
    ],
    rating: 4.8,
    reviewsCount: 210,
    duration: { pt: '5 Horas', en: '5 Hours', es: '5 Horas' },
    location: { pt: 'Ciudad del Este, PY', en: 'Ciudad del Este, PY', es: 'Ciudad del Este, PY' },
    category: 'shopping',
    featured: true,
    highlights: {
      pt: ['Horário Flexível', 'Dicas de Lojas'],
      en: ['Flexible Schedule', 'Shopping Tips'],
      es: ['Horario Flexible', 'Consejos de Tiendas']
    },
    included: { pt: [], en: [], es: [] },
    notIncluded: { pt: [], en: [], es: [] },
    itinerary: []
  },
  {
    id: '3',
    slug: 'itaipu-panoramica',
    status: 'published',
    image: 'https://picsum.photos/seed/itaipu/400/500',
    title: {
      pt: 'Itaipu Binacional Panorâmica',
      en: 'Itaipu Dam Panoramic',
      es: 'Itaipu Binacional Panorámica'
    },
    description: {
      pt: 'Conheça a grandiosidade da maior geradora de energia do mundo.',
      en: 'Discover the grandeur of the world\'s largest energy generator.',
      es: 'Conozca la grandiosidad de la mayor generadora de energía del mundo.'
    },
    fullDescription: {
      pt: '<p>Visita externa à barragem.</p>',
      en: '<p>External visit to the dam.</p>',
      es: '<p>Visita externa a la represa.</p>'
    },
    basePrice: 180,
    pricingType: 'per_person',
    rating: 4.7,
    reviewsCount: 150,
    duration: { pt: '3 Horas', en: '3 Hours', es: '3 Horas' },
    location: { pt: 'Foz do Iguaçu, BR', en: 'Foz do Iguaçu, BR', es: 'Foz do Iguaçu, BR' },
    category: 'culture',
    featured: false,
    highlights: { pt: [], en: [], es: [] },
    included: { pt: [], en: [], es: [] },
    notIncluded: { pt: [], en: [], es: [] },
    itinerary: []
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Roberto M.',
    rating: 5,
    date: '15-10-2025',
    content: {
      pt: 'A equipe da A10 Receptivo foi impecável. O motorista nos esperava no aeroporto.',
      en: 'The A10 Receptivo team was impeccable. The driver was waiting for us at the airport.',
      es: 'El equipo de A10 Receptivo fue impecable. El conductor nos esperaba en el aeropuerto.'
    },
    source: 'Google'
  }
];

export const STATS: Stat[] = [
  { id: '1', value: '10+', label: { pt: 'Anos em Foz', en: 'Years in Foz', es: 'Años en Foz' }, iconName: 'Award' },
  { id: '2', value: '5k+', label: { pt: 'Transfers', en: 'Transfers', es: 'Traslados' }, iconName: 'MapPin' },
  { id: '3', value: '15k+', label: { pt: 'Clientes', en: 'Clients', es: 'Clientes' }, iconName: 'Users' },
  { id: '4', value: '5.0', label: { pt: 'Avaliação', en: 'Rating', es: 'Evaluación' }, iconName: 'Star' },
];

export const NEWS = [
  { id: '1', title: 'Novas regras de visitação nas Cataratas' },
  { id: '2', title: 'Temporada de compras no Paraguai: O que saber' },
  { id: '3', title: 'Festival das Cataratas confirma datas para 2025' }
];