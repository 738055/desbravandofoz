-- ============================================================
-- DESBRAVANDO FOZ — Dados Iniciais (Seed)
-- Execute APÓS o schema.sql
-- ============================================================

-- ============================================================
-- 1. PASSEIOS (TOURS)
-- ============================================================

INSERT INTO public.tours (
  slug, status, image, gallery,
  title, description, full_description, location, duration,
  category, featured, display_order,
  pricing_type, base_price, price_promotional,
  vehicle_tiers,
  highlights, included, not_included, itinerary,
  rating, reviews_count, seo
) VALUES

-- ────────────────────────────────────────────────────────────
-- 1. Cataratas Lado Brasileiro VIP
-- ────────────────────────────────────────────────────────────
(
  'cataratas-brasil-vip',
  'published',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
  ],
  '{"pt": "Cataratas Lado Brasileiro VIP", "en": "Brazilian Falls VIP Tour", "es": "Cataratas Lado Brasileño VIP"}',
  '{"pt": "A melhor vista panorâmica das quedas com transporte exclusivo e guia bilíngue. Uma experiência inesquecível na 8ª maravilha do mundo.", "en": "The best panoramic view of the falls with exclusive transport and bilingual guide. An unforgettable experience at the 8th wonder of the world.", "es": "La mejor vista panorámica de las cataratas con transporte exclusivo y guía bilingüe. Una experiencia inolvidable en la 8va maravilla del mundo."}',
  '{"pt": "<p>Descubra a maravilha natural do mundo com o conforto que a <strong>Desbravando Foz</strong> oferece. O passeio pelo lado brasileiro das Cataratas do Iguaçu proporciona a mais completa vista panorâmica das 275 quedas.</p><p>Caminhe pela trilha de 1.200 metros em meio à exuberante Mata Atlântica, com mirantes deslumbrantes em cada curva do percurso. O ponto culminante é a passarela da icônica <em>Garganta do Diabo</em>, onde você sentirá o poder da natureza em toda sua intensidade.</p><p>Nosso guia credenciado pelo Ministério do Turismo compartilha curiosidades sobre a fauna, flora e a história das cataratas ao longo de todo o percurso.</p>", "en": "<p>Discover the natural wonder of the world with the comfort <strong>Desbravando Foz</strong> offers. The tour on the Brazilian side of Iguaçu Falls provides the most complete panoramic view of all 275 waterfalls.</p><p>Walk the 1,200-meter trail through the lush Atlantic Forest, with breathtaking viewpoints at every turn. The highlight is the walkway at the iconic <em>Devil''s Throat</em>, where you will feel the power of nature in its full intensity.</p><p>Our guide, accredited by the Ministry of Tourism, shares curiosities about the fauna, flora and history of the falls throughout the journey.</p>", "es": "<p>Descubra la maravilla natural del mundo con la comodidad que ofrece <strong>Desbravando Foz</strong>. El paseo por el lado brasileño de las Cataratas del Iguazú proporciona la vista panorámica más completa de las 275 cascadas.</p><p>Camine por el sendero de 1.200 metros en medio de la exuberante Mata Atlántica, con impresionantes miradores en cada curva del recorrido. El punto culminante es la pasarela de la icónica <em>Garganta del Diablo</em>.</p>"}',
  '{"pt": "Parque Nacional do Iguaçu, BR", "en": "Iguaçu National Park, BR", "es": "Parque Nacional Iguazú, BR"}',
  '{"pt": "4 Horas", "en": "4 Hours", "es": "4 Horas"}',
  'cataratas', true, 1,
  'per_person', 250, 220,
  NULL,
  '{"pt": ["Transporte Privativo", "Guia Bilíngue Credenciado", "Acesso Prioritário", "Seguro de Passageiro", "Água Mineral Inclusa"], "en": ["Private Transport", "Certified Bilingual Guide", "Priority Access", "Passenger Insurance", "Mineral Water Included"], "es": ["Transporte Privado", "Guía Bilingüe Acreditado", "Acceso Prioritario", "Seguro de Pasajero", "Agua Mineral Incluida"]}',
  '{"pt": ["Transfer Hotel ↔ Parque", "Água Mineral (500ml)", "Guia Profissional", "Seguro de Passageiro"], "en": ["Hotel ↔ Park Transfer", "Mineral Water (500ml)", "Professional Guide", "Passenger Insurance"], "es": ["Traslado Hotel ↔ Parque", "Agua Mineral (500ml)", "Guía Profesional", "Seguro de Pasajero"]}',
  '{"pt": ["Ingressos do Parque Nacional (R$ 92/adulto)", "Almoço e lanches", "Compras pessoais"], "en": ["National Park Entrance Fees (R$ 92/adult)", "Lunch and snacks", "Personal purchases"], "es": ["Entradas al Parque Nacional (R$ 92/adulto)", "Almuerzo y meriendas", "Compras personales"]}',
  '[{"time": "08:00", "activity": {"pt": "Saída do hotel / Check-in no veículo", "en": "Hotel pickup / Vehicle check-in", "es": "Salida del hotel / Check-in en el vehículo"}}, {"time": "08:30", "activity": {"pt": "Chegada ao Parque Nacional — compra de ingressos", "en": "Arrival at the National Park — ticket purchase", "es": "Llegada al Parque Nacional — compra de entradas"}}, {"time": "09:00", "activity": {"pt": "Início da trilha principal — Mirantes panorâmicos", "en": "Start of main trail — Panoramic viewpoints", "es": "Inicio del sendero principal — Miradores panorámicos"}}, {"time": "11:00", "activity": {"pt": "Garganta do Diabo — ponto culminante do passeio", "en": "Devil''s Throat — the highlight of the tour", "es": "Garganta del Diablo — punto culminante del tour"}}, {"time": "12:00", "activity": {"pt": "Retorno ao hotel", "en": "Return to hotel", "es": "Regreso al hotel"}}]',
  5.0, 342,
  '{"metaTitle": {"pt": "Cataratas do Iguaçu Lado Brasileiro VIP | Desbravando Foz", "en": "Iguaçu Falls Brazilian Side VIP Tour | Desbravando Foz", "es": "Cataratas del Iguazú Lado Brasileño VIP | Desbravando Foz"}, "metaDescription": {"pt": "Passeio VIP nas Cataratas do Iguaçu pelo lado brasileiro com transporte privativo e guia bilíngue. Reserve agora!", "en": "VIP tour at Iguaçu Falls on the Brazilian side with private transport and bilingual guide. Book now!", "es": "Tour VIP en las Cataratas del Iguazú por el lado brasileño con transporte privado y guía bilingüe. ¡Reserve ahora!"}, "keywords": "cataratas iguaçu brasil, tour vip cataratas, passeio cataratas foz"}'
),

-- ────────────────────────────────────────────────────────────
-- 2. Cataratas Lado Argentino
-- ────────────────────────────────────────────────────────────
(
  'cataratas-argentina',
  'published',
  'https://images.unsplash.com/photo-1543158266-0066955047b1?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1543158266-0066955047b1?w=800',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800'
  ],
  '{"pt": "Cataratas Lado Argentino — Garganta do Diabo", "en": "Argentine Falls — Devil''s Throat", "es": "Cataratas Lado Argentino — Garganta del Diablo"}',
  '{"pt": "Viva a experiência de caminhar SOBRE as cataratas no icônico circuito superior e inferior da Argentina.", "en": "Experience walking ABOVE the falls on the iconic upper and lower circuit in Argentina.", "es": "Viva la experiencia de caminar SOBRE las cataratas en el icónico circuito superior e inferior de Argentina."}',
  '{"pt": "<p>O lado argentino das Cataratas do Iguaçu é mundialmente reconhecido por permitir que os visitantes se aproximem das quedas de forma única. Os circuitos superior, inferior e a trilha da Garganta do Diabo (trem panorâmico) oferecem perspectivas completamente diferentes das do lado brasileiro.</p><p>A viagem inclui a travessia da fronteira Brasil–Argentina com toda a documentação tratada por nossa equipe.</p>", "en": "<p>The Argentine side of Iguaçu Falls is world-renowned for allowing visitors to get up close to the falls in a unique way. The upper circuit, lower circuit, and Devil''s Throat trail (panoramic train) offer completely different perspectives from the Brazilian side.</p><p>The trip includes the Brazil–Argentina border crossing with all documentation handled by our team.</p>", "es": "<p>El lado argentino de las Cataratas del Iguazú es reconocido mundialmente por permitir a los visitantes acercarse a las cataratas de forma única.</p>"}',
  '{"pt": "Puerto Iguazú, Argentina", "en": "Puerto Iguazú, Argentina", "es": "Puerto Iguazú, Argentina"}',
  '{"pt": "8 Horas (Dia Inteiro)", "en": "8 Hours (Full Day)", "es": "8 Horas (Día Completo)"}',
  'cataratas', true, 2,
  'per_person', 320, NULL,
  NULL,
  '{"pt": ["Circuito Superior e Inferior", "Trem da Garganta do Diabo", "Travessia de Fronteira Assistida", "Guia Bilíngue"], "en": ["Upper and Lower Circuit", "Devil''s Throat Train", "Assisted Border Crossing", "Bilingual Guide"], "es": ["Circuito Superior e Inferior", "Tren de la Garganta del Diablo", "Cruce de Frontera Asistido", "Guía Bilingüe"]}',
  '{"pt": ["Transfer Hotel ↔ Parque (AR)", "Cruzamento de fronteira assistido", "Guia Profissional", "Seguro de Passageiro"], "en": ["Hotel ↔ Park Transfer (AR)", "Assisted border crossing", "Professional Guide", "Passenger Insurance"], "es": ["Traslado Hotel ↔ Parque (AR)", "Cruce de frontera asistido", "Guía Profesional", "Seguro de Pasajero"]}',
  '{"pt": ["Ingresso Parque Argentina (ARS/USD)", "Almoço", "Passeio de barco Macuco Safari (opcional)"], "en": ["Argentina Park Entrance (ARS/USD)", "Lunch", "Macuco Safari boat ride (optional)"], "es": ["Entrada Parque Argentina (ARS/USD)", "Almuerzo", "Paseo en barco Macuco Safari (opcional)"]}',
  '[{"time": "07:30", "activity": {"pt": "Saída do hotel rumo à fronteira", "en": "Hotel departure towards the border", "es": "Salida del hotel hacia la frontera"}}, {"time": "08:30", "activity": {"pt": "Cruzamento da fronteira Brasil–Argentina", "en": "Brazil–Argentina border crossing", "es": "Cruce de frontera Brasil–Argentina"}}, {"time": "09:30", "activity": {"pt": "Início dos circuitos — Trilha Inferior", "en": "Start of circuits — Lower Trail", "es": "Inicio de circuitos — Sendero Inferior"}}, {"time": "12:00", "activity": {"pt": "Almoço livre na praça de alimentação do parque", "en": "Free lunch at the park food court", "es": "Almuerzo libre en el patio de comidas del parque"}}, {"time": "13:30", "activity": {"pt": "Trem panorâmico — Garganta do Diabo", "en": "Panoramic train — Devil''s Throat", "es": "Tren panorámico — Garganta del Diablo"}}, {"time": "16:00", "activity": {"pt": "Retorno ao hotel", "en": "Return to hotel", "es": "Regreso al hotel"}}]',
  4.9, 218,
  '{"metaTitle": {"pt": "Cataratas Lado Argentino — Dia Inteiro | Desbravando Foz", "en": "Argentine Falls — Full Day Tour | Desbravando Foz", "es": "Cataratas Lado Argentino — Día Completo | Desbravando Foz"}, "metaDescription": {"pt": "Tour completo no lado argentino das Cataratas do Iguaçu com circuitos superior, inferior e Garganta do Diabo.", "en": "Complete tour on the Argentine side of Iguaçu Falls with upper, lower circuits and Devil''s Throat.", "es": "Tour completo en el lado argentino de las Cataratas del Iguazú con circuito superior, inferior y Garganta del Diablo."}, "keywords": "cataratas argentina, garganta do diabo, iguazu falls argentina"}'
),

-- ────────────────────────────────────────────────────────────
-- 3. Cataratas Full Day Brasil + Argentina
-- ────────────────────────────────────────────────────────────
(
  'cataratas-full-day',
  'published',
  'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800'
  ],
  '{"pt": "Full Day — Cataratas Brasil + Argentina", "en": "Full Day — Brazilian + Argentine Falls", "es": "Full Day — Cataratas Brasil + Argentina"}',
  '{"pt": "O pacote mais completo! Visite os dois lados das Cataratas em um único dia inesquecível.", "en": "The most complete package! Visit both sides of the Falls in a single unforgettable day.", "es": "¡El paquete más completo! Visite ambos lados de las Cataratas en un único día inolvidable."}',
  '{"pt": "<p>Para quem quer aproveitar ao máximo a visita às Cataratas do Iguaçu, este é o passeio ideal. Em um único dia, você visita ambos os lados — primeiro o brasileiro (melhor para fotos panorâmicas pela manhã) e depois o argentino (onde você caminha sobre as quedas).</p><p>Inclui cruzamento de fronteira assistido, guia bilíngue o dia inteiro e transporte exclusivo.</p>", "en": "<p>For those who want to make the most of their visit to Iguaçu Falls, this is the ideal tour. In a single day, you visit both sides — first the Brazilian side (best for panoramic photos in the morning) and then the Argentine side (where you walk above the falls).</p>", "es": "<p>Para quienes quieran aprovechar al máximo la visita a las Cataratas del Iguazú, este es el tour ideal. En un solo día, visita ambos lados.</p>"}',
  '{"pt": "Foz do Iguaçu, BR + Puerto Iguazú, AR", "en": "Foz do Iguaçu, BR + Puerto Iguazú, AR", "es": "Foz do Iguaçu, BR + Puerto Iguazú, AR"}',
  '{"pt": "12 Horas (Dia Inteiro)", "en": "12 Hours (Full Day)", "es": "12 Horas (Día Completo)"}',
  'cataratas', true, 3,
  'per_person', 520, 480,
  NULL,
  '{"pt": ["Dois Países em Um Dia", "Guia Bilíngue o Dia Todo", "Travessia de Fronteira", "Máximo Aproveitamento"], "en": ["Two Countries in One Day", "Bilingual Guide All Day", "Border Crossing", "Maximum Experience"], "es": ["Dos Países en Un Día", "Guía Bilingüe Todo el Día", "Cruce de Frontera", "Máximo Aprovechamiento"]}',
  '{"pt": ["Transfer durante todo o dia", "Cruzamento de fronteira assistido", "Guia Profissional", "Água Mineral", "Seguro de Passageiro"], "en": ["All-day transfer", "Assisted border crossing", "Professional Guide", "Mineral Water", "Passenger Insurance"], "es": ["Traslado durante todo el día", "Cruce de frontera asistido", "Guía Profesional", "Agua Mineral", "Seguro de Pasajero"]}',
  '{"pt": ["Ingressos Brasil + Argentina (aprox. R$92 + USD 30)", "Almoço e lanches", "Passeios adicionais opcionais"], "en": ["Brazil + Argentina tickets (approx. R$92 + USD 30)", "Lunch and snacks", "Optional additional tours"], "es": ["Entradas Brasil + Argentina (aprox. R$92 + USD 30)", "Almuerzo y meriendas", "Tours adicionales opcionales"]}',
  '[{"time": "07:00", "activity": {"pt": "Saída rumo ao Parque Nacional Brasileiro", "en": "Departure to the Brazilian National Park", "es": "Salida hacia el Parque Nacional Brasileño"}}, {"time": "08:00", "activity": {"pt": "Visita ao lado brasileiro — trilha e mirantes", "en": "Visit to the Brazilian side — trail and viewpoints", "es": "Visita al lado brasileño — sendero y miradores"}}, {"time": "11:30", "activity": {"pt": "Travessia da fronteira para a Argentina", "en": "Border crossing to Argentina", "es": "Cruce de frontera a Argentina"}}, {"time": "12:30", "activity": {"pt": "Almoço livre em Puerto Iguazú", "en": "Free lunch in Puerto Iguazú", "es": "Almuerzo libre en Puerto Iguazú"}}, {"time": "14:00", "activity": {"pt": "Circuitos Superior e Inferior — lado argentino", "en": "Upper and Lower Circuits — Argentine side", "es": "Circuitos Superior e Inferior — lado argentino"}}, {"time": "16:00", "activity": {"pt": "Trem para a Garganta do Diabo", "en": "Train to Devil''s Throat", "es": "Tren hacia la Garganta del Diablo"}}, {"time": "19:00", "activity": {"pt": "Retorno ao hotel em Foz do Iguaçu", "en": "Return to hotel in Foz do Iguaçu", "es": "Regreso al hotel en Foz do Iguaçu"}}]',
  5.0, 97,
  '{"metaTitle": {"pt": "Full Day Cataratas Brasil e Argentina | Desbravando Foz", "en": "Full Day Iguaçu Falls Brazil & Argentina | Desbravando Foz", "es": "Full Day Cataratas Brasil y Argentina | Desbravando Foz"}, "metaDescription": {"pt": "O melhor pacote das Cataratas: visite Brasil e Argentina em um dia. Guia bilíngue, transporte exclusivo.", "en": "The best Falls package: visit Brazil and Argentina in one day. Bilingual guide, exclusive transport.", "es": "El mejor paquete de Cataratas: visita Brasil y Argentina en un día. Guía bilingüe, transporte exclusivo."}, "keywords": "cataratas full day, cataratas brasil argentina, iguazu ambos lados"}'
),

-- ────────────────────────────────────────────────────────────
-- 4. Tour de Compras Paraguai (por veículo)
-- ────────────────────────────────────────────────────────────
(
  'compras-paraguai-privativo',
  'published',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'
  ],
  '{"pt": "Tour de Compras Paraguai — Privativo", "en": "Private Shopping Tour Paraguay", "es": "Tour de Compras Paraguay — Privado"}',
  '{"pt": "Segurança e conforto para suas compras em Ciudad del Este. Eletrônicos, perfumes e grifes com até 60% de desconto.", "en": "Safety and comfort for your shopping in Ciudad del Este. Electronics, perfumes and brands with up to 60% discount.", "es": "Seguridad y comodidad para sus compras en Ciudad del Este. Electrónicos, perfumes y marcas con hasta 60% de descuento."}',
  '{"pt": "<p>Ciudad del Este é um dos maiores centros de comércio da América do Sul. Com a <strong>Desbravando Foz</strong>, você vai às melhores lojas com total segurança e a praticidade de um motorista particular esperando por você.</p><p>Indicamos os melhores endereços para cada tipo de compra: eletrônicos (Shopping Monalisa, Cellshop), roupas e acessórios, perfumes importados e muito mais.</p><p><strong>Dica:</strong> Brasileiros têm direito à cota de US$300 de isenção. Nossa equipe te orienta sobre as regras da Receita Federal.</p>", "en": "<p>Ciudad del Este is one of the largest commercial centers in South America. With <strong>Desbravando Foz</strong>, you go to the best stores in total safety and with the convenience of a private driver waiting for you.</p><p>We recommend the best addresses for each type of purchase: electronics (Shopping Monalisa, Cellshop), clothing and accessories, imported perfumes and much more.</p>", "es": "<p>Ciudad del Este es uno de los mayores centros comerciales de América del Sur. Con <strong>Desbravando Foz</strong>, va a las mejores tiendas con total seguridad y la comodidad de un conductor privado esperándolo.</p>"}',
  '{"pt": "Ciudad del Este, Paraguai", "en": "Ciudad del Este, Paraguay", "es": "Ciudad del Este, Paraguay"}',
  '{"pt": "5–7 Horas (horário flexível)", "en": "5–7 Hours (flexible schedule)", "es": "5–7 Horas (horario flexible)"}',
  'compras', true, 4,
  'per_vehicle', 300, NULL,
  '[{"id": "cde-sedan", "vehicleName": "Sedan Executivo (1–4 pessoas)", "minPax": 1, "maxPax": 4, "price": 300, "promotionalPrice": 0}, {"id": "cde-van", "vehicleName": "Van Executiva (5–15 pessoas)", "minPax": 5, "maxPax": 15, "price": 580, "promotionalPrice": 520}]',
  '{"pt": ["Motorista Particular o Dia Todo", "Dicas Exclusivas de Lojas", "Horário Flexível", "Sem Estresse na Fronteira"], "en": ["Private Driver All Day", "Exclusive Shopping Tips", "Flexible Schedule", "Stress-Free Border Crossing"], "es": ["Conductor Privado Todo el Día", "Consejos Exclusivos de Tiendas", "Horario Flexible", "Sin Estrés en la Frontera"]}',
  '{"pt": ["Transporte privativo até Ciudad del Este", "Motorista esperando durante as compras", "Orientação sobre regras de importação"], "en": ["Private transport to Ciudad del Este", "Driver waiting during shopping", "Guidance on import rules"], "es": ["Transporte privado a Ciudad del Este", "Conductor esperando durante las compras", "Orientación sobre reglas de importación"]}',
  '{"pt": ["Compras e gastos pessoais", "Alimentação", "Taxas de importação (se aplicável)"], "en": ["Personal shopping expenses", "Food and beverages", "Import taxes (if applicable)"], "es": ["Gastos de compras personales", "Alimentación", "Tasas de importación (si aplica)"]}',
  '[{"time": "08:00", "activity": {"pt": "Saída do hotel rumo à Ponte da Amizade", "en": "Hotel departure towards the Friendship Bridge", "es": "Salida del hotel hacia el Puente de la Amistad"}}, {"time": "09:00", "activity": {"pt": "Cruzamento para Ciudad del Este — início das compras", "en": "Crossing to Ciudad del Este — shopping begins", "es": "Cruce a Ciudad del Este — inicio de compras"}}, {"time": "13:00", "activity": {"pt": "Pausa para almoço (por conta própria)", "en": "Lunch break (at own expense)", "es": "Pausa para almuerzo (por cuenta propia)"}}, {"time": "15:00", "activity": {"pt": "Retorno à fronteira e retorno ao hotel", "en": "Return to the border and back to hotel", "es": "Regreso a la frontera y de vuelta al hotel"}}]',
  4.8, 186,
  '{"metaTitle": {"pt": "Tour de Compras no Paraguai | Desbravando Foz", "en": "Shopping Tour Paraguay | Desbravando Foz", "es": "Tour de Compras en Paraguay | Desbravando Foz"}, "metaDescription": {"pt": "Transfer privativo para compras em Ciudad del Este, Paraguai. Motorista exclusivo, dicas de lojas, sem estresse.", "en": "Private transfer for shopping in Ciudad del Este, Paraguay. Exclusive driver, store tips, stress-free.", "es": "Traslado privado para compras en Ciudad del Este, Paraguay. Conductor exclusivo, consejos de tiendas, sin estrés."}, "keywords": "compras paraguai, ciudad del este, tour compras foz iguacu"}'
),

-- ────────────────────────────────────────────────────────────
-- 5. Transfer Aeroporto IGU (por veículo)
-- ────────────────────────────────────────────────────────────
(
  'transfer-aeroporto-iguacu',
  'published',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'
  ],
  '{"pt": "Transfer Aeroporto de Foz do Iguaçu (IGU)", "en": "Foz do Iguaçu Airport Transfer (IGU)", "es": "Transfer Aeropuerto de Foz do Iguaçu (IGU)"}',
  '{"pt": "Chegue tranquilo. Monitoramos seu voo e um motorista credenciado te espera no desembarque com placa de identificação.", "en": "Arrive in peace. We monitor your flight and a credentialed driver awaits you at arrivals with an identification sign.", "es": "Llegue tranquilo. Monitoreamos su vuelo y un conductor acreditado lo espera en llegadas con placa de identificación."}',
  '{"pt": "<p>Nosso serviço de transfer aeroporto é pontual, confortável e totalmente rastreado. Monitoramos seu voo em tempo real — se houver atraso, nosso motorista acompanha automaticamente.</p><p>Veículos climatizados, espaço para bagagens e motoristas uniformizados com placa de identificação na saída do desembarque.</p><p>Disponível 24h por dia, 7 dias por semana, incluindo feriados.</p>", "en": "<p>Our airport transfer service is punctual, comfortable and fully tracked. We monitor your flight in real time — if there is a delay, our driver automatically adjusts.</p><p>Air-conditioned vehicles, luggage space and uniformed drivers with identification sign at the arrivals exit.</p><p>Available 24/7, including holidays.</p>", "es": "<p>Nuestro servicio de transfer aeropuerto es puntual, cómodo y completamente monitoreado. Monitoreamos su vuelo en tiempo real.</p>"}',
  '{"pt": "Aeroporto Internacional de Foz do Iguaçu — IGU", "en": "Foz do Iguaçu International Airport — IGU", "es": "Aeropuerto Internacional de Foz do Iguaçu — IGU"}',
  '{"pt": "Conforme chegada / saída do voo", "en": "As per flight arrival / departure", "es": "Según llegada / salida del vuelo"}',
  'transfer', false, 5,
  'per_vehicle', 120, NULL,
  '[{"id": "trf-sedan", "vehicleName": "Sedan (1–3 passageiros)", "minPax": 1, "maxPax": 3, "price": 120, "promotionalPrice": 0}, {"id": "trf-suv", "vehicleName": "SUV / Minivan (4–6 passageiros)", "minPax": 4, "maxPax": 6, "price": 180, "promotionalPrice": 0}, {"id": "trf-van", "vehicleName": "Van Executiva (7–15 passageiros)", "minPax": 7, "maxPax": 15, "price": 280, "promotionalPrice": 0}]',
  '{"pt": ["Monitoramento do Voo em Tempo Real", "Placa de Identificação no Aeroporto", "Veículos Climatizados", "Disponível 24h / 7 dias"], "en": ["Real-Time Flight Monitoring", "Identification Sign at Airport", "Air-Conditioned Vehicles", "Available 24/7"], "es": ["Monitoreo del Vuelo en Tiempo Real", "Placa de Identificación en el Aeropuerto", "Vehículos Climatizados", "Disponible 24h / 7 días"]}',
  '{"pt": ["Monitoramento do voo", "Motorista com placa de identificação", "Veículo climatizado com espaço para bagagens", "Pontualidade garantida"], "en": ["Flight monitoring", "Driver with identification sign", "Air-conditioned vehicle with luggage space", "Guaranteed punctuality"], "es": ["Monitoreo del vuelo", "Conductor con placa de identificación", "Vehículo climatizado con espacio para equipaje", "Puntualidad garantizada"]}',
  '{"pt": ["Gorjeta (opcional)", "Pedágios adicionais fora do trajeto"], "en": ["Tip (optional)", "Additional tolls outside the route"], "es": ["Propina (opcional)", "Peajes adicionales fuera de la ruta"]}',
  '[]',
  5.0, 421,
  '{"metaTitle": {"pt": "Transfer Aeroporto Foz do Iguaçu | Desbravando Foz", "en": "Foz do Iguaçu Airport Transfer | Desbravando Foz", "es": "Transfer Aeropuerto Foz do Iguaçu | Desbravando Foz"}, "metaDescription": {"pt": "Transfer privativo do aeroporto de Foz do Iguaçu para seu hotel. Monitoramento de voo, motorista uniforme, 24h.", "en": "Private transfer from Foz do Iguaçu airport to your hotel. Flight monitoring, uniformed driver, 24h.", "es": "Transfer privado desde el aeropuerto de Foz do Iguaçu a su hotel. Monitoreo de vuelo, conductor uniformado, 24h."}, "keywords": "transfer aeroporto foz iguacu, taxi foz iguacu, shuttle iguacu"}'
),

-- ────────────────────────────────────────────────────────────
-- 6. Itaipu Binacional Panorâmica
-- ────────────────────────────────────────────────────────────
(
  'itaipu-panoramica',
  'published',
  'https://images.unsplash.com/photo-1585677116323-2b5e30f2d1d1?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1585677116323-2b5e30f2d1d1?w=800'
  ],
  '{"pt": "Itaipu Binacional — Visita Panorâmica", "en": "Itaipu Dam — Panoramic Visit", "es": "Itaipu Binacional — Visita Panorámica"}',
  '{"pt": "Conheça a maior usina hidrelétrica do mundo em geração de energia. Uma obra de engenharia que impressiona qualquer visitante.", "en": "Visit the world''s largest hydroelectric plant by energy generation. An engineering feat that impresses every visitor.", "es": "Conozca la mayor central hidroeléctrica del mundo en generación de energía. Una obra de ingeniería que impresiona."}',
  '{"pt": "<p>A Usina Hidrelétrica de Itaipu é uma das maiores obras de engenharia do século XX. Nossa visita panorâmica inclui tour de ônibus pela estrutura externa da barragem, visita ao centro de visitantes e projeção do documentário oficial.</p><p>Para quem quiser ir além, oferecemos também o upgrade para a <strong>Visita Especial</strong>, que inclui a descida ao vertedouro e ao interior da usina.</p>", "en": "<p>The Itaipu Hydroelectric Plant is one of the greatest engineering works of the 20th century. Our panoramic visit includes a bus tour of the dam''s external structure, a visit to the visitor center and a screening of the official documentary.</p>", "es": "<p>La Central Hidroeléctrica de Itaipu es una de las mayores obras de ingeniería del siglo XX. Nuestra visita panorámica incluye tour en autobús por la estructura externa de la represa.</p>"}',
  '{"pt": "Foz do Iguaçu, BR", "en": "Foz do Iguaçu, BR", "es": "Foz do Iguaçu, BR"}',
  '{"pt": "3 Horas", "en": "3 Hours", "es": "3 Horas"}',
  'itaipu', false, 6,
  'per_person', 180, NULL,
  NULL,
  '{"pt": ["Maior Geradora de Energia do Mundo", "Centro de Visitantes e Museu", "Documentário Oficial", "Guia Credenciado"], "en": ["World''s Largest Energy Generator", "Visitor Center and Museum", "Official Documentary", "Certified Guide"], "es": ["Mayor Generadora de Energía del Mundo", "Centro de Visitantes y Museo", "Documental Oficial", "Guía Acreditado"]}',
  '{"pt": ["Transfer hotel ↔ Itaipu", "Ingresso Visita Panorâmica", "Guia Profissional", "Seguro de Passageiro"], "en": ["Hotel ↔ Itaipu transfer", "Panoramic Visit Ticket", "Professional Guide", "Passenger Insurance"], "es": ["Traslado hotel ↔ Itaipu", "Entrada Visita Panorámica", "Guía Profesional", "Seguro de Pasajero"]}',
  '{"pt": ["Alimentação", "Visita Especial (upgrade opcional)"], "en": ["Food and beverages", "Special Visit (optional upgrade)"], "es": ["Alimentación", "Visita Especial (upgrade opcional)"]}',
  '[{"time": "08:30", "activity": {"pt": "Saída do hotel", "en": "Hotel pickup", "es": "Salida del hotel"}}, {"time": "09:30", "activity": {"pt": "Chegada a Itaipu — Centro de Visitantes", "en": "Arrival at Itaipu — Visitor Center", "es": "Llegada a Itaipu — Centro de Visitantes"}}, {"time": "10:00", "activity": {"pt": "Tour panorâmico de ônibus pela barragem", "en": "Panoramic bus tour of the dam", "es": "Tour panorámico en autobús por la represa"}}, {"time": "11:30", "activity": {"pt": "Retorno ao hotel", "en": "Return to hotel", "es": "Regreso al hotel"}}]',
  4.7, 134,
  '{"metaTitle": {"pt": "Visita à Usina de Itaipu Foz do Iguaçu | Desbravando Foz", "en": "Itaipu Dam Visit Foz do Iguaçu | Desbravando Foz", "es": "Visita Usina Itaipu Foz do Iguaçu | Desbravando Foz"}, "metaDescription": {"pt": "Passeio à Itaipu Binacional com transfer e guia. A maior geradora de energia do mundo em Foz do Iguaçu.", "en": "Tour to Itaipu Binacional with transfer and guide. The world''s largest energy generator in Foz do Iguaçu.", "es": "Paseo a Itaipu Binacional con traslado y guía. La mayor generadora de energía del mundo."}, "keywords": "itaipu, usina itaipu, foz do iguacu itaipu"}'
),

-- ────────────────────────────────────────────────────────────
-- 7. Parque das Aves
-- ────────────────────────────────────────────────────────────
(
  'parque-das-aves',
  'published',
  'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800'
  ],
  '{"pt": "Parque das Aves de Foz do Iguaçu", "en": "Bird Park — Foz do Iguaçu", "es": "Parque de las Aves — Foz do Iguaçu"}',
  '{"pt": "Mais de 1.400 pássaros de 150 espécies, incluindo araras, tucanos e garças. Ideal para famílias e amantes da natureza.", "en": "More than 1,400 birds of 150 species, including macaws, toucans and herons. Ideal for families and nature lovers.", "es": "Más de 1.400 aves de 150 especies, incluyendo guacamayos, tucanes y garzas. Ideal para familias y amantes de la naturaleza."}',
  '{"pt": "<p>O Parque das Aves é um dos mais importantes centros de conservação de aves da América Latina. Localizado na borda do Parque Nacional do Iguaçu, abriga mais de 1.400 pássaros de 150 espécies em imensos aviários arborizados.</p><p>Você pode entrar dentro dos aviários e interagir com as aves, incluindo as deslumbrantes araras-azuis. Uma experiência mágica para toda a família.</p>", "en": "<p>The Bird Park is one of the most important bird conservation centers in Latin America. Located on the edge of Iguaçu National Park, it houses more than 1,400 birds of 150 species in large wooded aviaries.</p><p>You can enter the aviaries and interact with the birds, including the stunning blue macaws. A magical experience for the whole family.</p>", "es": "<p>El Parque de las Aves es uno de los centros de conservación de aves más importantes de América Latina.</p>"}',
  '{"pt": "Foz do Iguaçu, BR (próximo ao Parque Nacional)", "en": "Foz do Iguaçu, BR (near National Park)", "es": "Foz do Iguaçu, BR (cerca del Parque Nacional)"}',
  '{"pt": "2–3 Horas", "en": "2–3 Hours", "es": "2–3 Horas"}',
  'aventura', false, 7,
  'per_person', 160, NULL,
  NULL,
  '{"pt": ["Interação com Araras e Tucanos", "150 Espécies de Aves", "Ideal para Famílias", "Fotos Incríveis com as Aves"], "en": ["Interaction with Macaws and Toucans", "150 Bird Species", "Ideal for Families", "Amazing Photos with Birds"], "es": ["Interacción con Guacamayos y Tucanes", "150 Especies de Aves", "Ideal para Familias", "Fotos Increíbles con las Aves"]}',
  '{"pt": ["Transfer hotel ↔ Parque das Aves", "Ingresso incluso", "Guia Profissional"], "en": ["Hotel ↔ Bird Park transfer", "Ticket included", "Professional Guide"], "es": ["Traslado hotel ↔ Parque de las Aves", "Entrada incluida", "Guía Profesional"]}',
  '{"pt": ["Alimentação", "Lembranças e souvenirs"], "en": ["Food and beverages", "Souvenirs"], "es": ["Alimentación", "Souvenirs"]}',
  '[{"time": "09:00", "activity": {"pt": "Saída do hotel", "en": "Hotel pickup", "es": "Salida del hotel"}}, {"time": "09:30", "activity": {"pt": "Chegada ao Parque das Aves — início da visita", "en": "Arrival at Bird Park — visit begins", "es": "Llegada al Parque de las Aves — inicio de visita"}}, {"time": "11:30", "activity": {"pt": "Retorno ao hotel", "en": "Return to hotel", "es": "Regreso al hotel"}}]',
  4.9, 88,
  '{"metaTitle": {"pt": "Parque das Aves Foz do Iguaçu | Desbravando Foz", "en": "Bird Park Foz do Iguaçu | Desbravando Foz", "es": "Parque de las Aves Foz do Iguaçu | Desbravando Foz"}, "metaDescription": {"pt": "Visite o Parque das Aves em Foz do Iguaçu com transfer e ingresso. Araras, tucanos e mais de 150 espécies.", "en": "Visit the Bird Park in Foz do Iguaçu with transfer and ticket. Macaws, toucans and over 150 species.", "es": "Visita el Parque de las Aves en Foz do Iguaçu con traslado y entrada."}, "keywords": "parque das aves foz iguacu, araras foz, aves iguacu"}'
),

-- ────────────────────────────────────────────────────────────
-- 8. Marco das Três Fronteiras + Rio Iguaçu
-- ────────────────────────────────────────────────────────────
(
  'marco-tres-fronteiras',
  'published',
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200',
  ARRAY[
    'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800'
  ],
  '{"pt": "Marco das Três Fronteiras + Passeio de Barco", "en": "Triple Border Landmark + Boat Tour", "es": "Marco de las Tres Fronteras + Paseo en Barco"}',
  '{"pt": "O ponto onde Brasil, Argentina e Paraguai se encontram. Vista panorâmica do Rio Iguaçu e passeio de barco pela tríplice fronteira.", "en": "The point where Brazil, Argentina and Paraguay meet. Panoramic view of the Iguaçu River and boat tour along the triple border.", "es": "El punto donde Brasil, Argentina y Paraguay se encuentran. Vista panorámica del Río Iguazú y paseo en barco."}',
  '{"pt": "<p>Um dos atrativos mais simbólicos de Foz do Iguaçu: o Marco das Três Fronteiras é onde os rios Iguaçu e Paraná se encontram, separando Brasil, Argentina e Paraguai.</p><p>O passeio inclui visita ao mirante panorâmico e um emocionante passeio de barco pelo Rio Iguaçu, chegando até o ponto exato da fronteira.</p>", "en": "<p>One of the most symbolic attractions of Foz do Iguaçu: the Triple Border Landmark is where the Iguaçu and Paraná rivers meet, separating Brazil, Argentina and Paraguay.</p><p>The tour includes a visit to the panoramic viewpoint and an exciting boat ride on the Iguaçu River, reaching the exact border point.</p>", "es": "<p>Uno de los atractivos más simbólicos de Foz do Iguaçu: el Marco de las Tres Fronteras es donde los ríos Iguazú y Paraná se encuentran.</p>"}',
  '{"pt": "Foz do Iguaçu, BR", "en": "Foz do Iguaçu, BR", "es": "Foz do Iguaçu, BR"}',
  '{"pt": "3 Horas", "en": "3 Hours", "es": "3 Horas"}',
  'city-tour', false, 8,
  'per_person', 110, NULL,
  NULL,
  '{"pt": ["Passeio de Barco Incluído", "Ponto Fotográfico Imperdível", "Três Países em Um Passeio", "Guia Informativo"], "en": ["Boat Ride Included", "Unmissable Photo Spot", "Three Countries in One Tour", "Informative Guide"], "es": ["Paseo en Barco Incluido", "Punto Fotográfico Imperdible", "Tres Países en Un Tour", "Guía Informativo"]}',
  '{"pt": ["Transfer hotel ↔ Marco das Três Fronteiras", "Passeio de barco pelo Rio Iguaçu", "Guia Profissional"], "en": ["Hotel ↔ Triple Border transfer", "Boat ride on the Iguaçu River", "Professional Guide"], "es": ["Traslado hotel ↔ Marco de las Tres Fronteras", "Paseo en barco por el Río Iguazú", "Guía Profesional"]}',
  '{"pt": ["Ingresso do Marco das Três Fronteiras (aprox. R$20)", "Alimentação"], "en": ["Triple Border ticket (approx. R$20)", "Food and beverages"], "es": ["Entrada del Marco de las Tres Fronteras (aprox. R$20)", "Alimentación"]}',
  '[{"time": "14:00", "activity": {"pt": "Saída do hotel", "en": "Hotel pickup", "es": "Salida del hotel"}}, {"time": "14:30", "activity": {"pt": "Chegada ao Marco das Três Fronteiras — mirante", "en": "Arrival at Triple Border Landmark — viewpoint", "es": "Llegada al Marco de las Tres Fronteras — mirador"}}, {"time": "15:15", "activity": {"pt": "Passeio de barco pelo Rio Iguaçu", "en": "Boat ride on the Iguaçu River", "es": "Paseo en barco por el Río Iguazú"}}, {"time": "17:00", "activity": {"pt": "Retorno ao hotel", "en": "Return to hotel", "es": "Regreso al hotel"}}]',
  4.8, 65,
  '{"metaTitle": {"pt": "Marco das Três Fronteiras Foz | Desbravando Foz", "en": "Triple Border Landmark Foz | Desbravando Foz", "es": "Marco de las Tres Fronteras Foz | Desbravando Foz"}, "metaDescription": {"pt": "Passeio ao Marco das Três Fronteiras em Foz do Iguaçu com barco. Brasil, Argentina e Paraguai em um só ponto.", "en": "Tour to the Triple Border Landmark in Foz do Iguaçu with boat. Brazil, Argentina and Paraguay in one spot.", "es": "Tour al Marco de las Tres Fronteras en Foz do Iguaçu con barco."}, "keywords": "marco tres fronteiras, foz iguacu triple fronteira, passeio barco iguacu"}'
),

-- ────────────────────────────────────────────────────────────
-- 9. City Tour Foz do Iguaçu
-- ────────────────────────────────────────────────────────────
(
  'city-tour-foz',
  'published',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
  NULL,
  '{"pt": "City Tour Foz do Iguaçu — Pontos Turísticos", "en": "Foz do Iguaçu City Tour — Tourist Highlights", "es": "City Tour Foz do Iguaçu — Puntos Turísticos"}',
  '{"pt": "Conheça os principais pontos turísticos da cidade em um único passeio: Mesquita Árabe, Templo Budista, Lago de Itaipu e muito mais.", "en": "Discover the main tourist attractions of the city in one tour: Arab Mosque, Buddhist Temple, Itaipu Lake and more.", "es": "Conozca los principales atractivos turísticos de la ciudad en un solo tour: Mezquita Árabe, Templo Budista, Lago de Itaipu y más."}',
  '{"pt": "<p>Foz do Iguaçu é uma cidade cosmopolita com uma diversidade cultural única no Brasil. Nosso City Tour passa pelos pontos mais emblemáticos:</p><ul><li><strong>Mesquita Omar Ibn Al-Khattab</strong> — uma das maiores da América do Sul</li><li><strong>Templo Budista Chen Tien</strong> — réplica autêntica de templos da China</li><li><strong>Lago de Itaipu</strong> — orla linda para fotos</li><li><strong>Catedral de Santo Agostinho</strong></li><li><strong>Marco das Três Fronteiras</strong> (mirante externo)</li></ul>", "en": "<p>Foz do Iguaçu is a cosmopolitan city with unique cultural diversity in Brazil. Our City Tour passes through the most iconic spots: Arab Mosque, Buddhist Temple Chen Tien, Itaipu Lake, and more.</p>", "es": "<p>Foz do Iguaçu es una ciudad cosmopolita con una diversidad cultural única en Brasil. Nuestro City Tour pasa por los puntos más emblemáticos.</p>"}',
  '{"pt": "Foz do Iguaçu, Paraná, Brasil", "en": "Foz do Iguaçu, Paraná, Brazil", "es": "Foz do Iguaçu, Paraná, Brasil"}',
  '{"pt": "4 Horas (Manhã ou Tarde)", "en": "4 Hours (Morning or Afternoon)", "es": "4 Horas (Mañana o Tarde)"}',
  'city-tour', false, 9,
  'per_vehicle', 200, NULL,
  '[{"id": "ct-sedan", "vehicleName": "Sedan (1–4 pessoas)", "minPax": 1, "maxPax": 4, "price": 200, "promotionalPrice": 0}, {"id": "ct-van", "vehicleName": "Van (5–12 pessoas)", "minPax": 5, "maxPax": 12, "price": 380, "promotionalPrice": 350}]',
  '{"pt": ["Mesquita + Templo Budista", "Lago de Itaipu", "Múltiplas Culturas em 4h", "Ótimo para Chegada à Cidade"], "en": ["Mosque + Buddhist Temple", "Itaipu Lake", "Multiple Cultures in 4h", "Great for City Arrival"], "es": ["Mezquita + Templo Budista", "Lago de Itaipu", "Múltiples Culturas en 4h", "Ideal para Llegada a la Ciudad"]}',
  '{"pt": ["Transporte privativo durante todo o city tour", "Guia Profissional", "Paradas fotográficas em cada ponto"], "en": ["Private transport throughout the city tour", "Professional Guide", "Photo stops at each attraction"], "es": ["Transporte privado durante todo el city tour", "Guía Profesional", "Paradas fotográficas en cada punto"]}',
  '{"pt": ["Ingressos individuais se houver cobrança", "Alimentação"], "en": ["Individual tickets if charged", "Food and beverages"], "es": ["Entradas individuales si hay cobro", "Alimentación"]}',
  '[{"time": "09:00", "activity": {"pt": "Saída do hotel", "en": "Hotel pickup", "es": "Salida del hotel"}}, {"time": "09:30", "activity": {"pt": "Mesquita Omar Ibn Al-Khattab", "en": "Omar Ibn Al-Khattab Mosque", "es": "Mezquita Omar Ibn Al-Khattab"}}, {"time": "10:15", "activity": {"pt": "Templo Budista Chen Tien", "en": "Chen Tien Buddhist Temple", "es": "Templo Budista Chen Tien"}}, {"time": "11:00", "activity": {"pt": "Lago de Itaipu — orla e fotos", "en": "Itaipu Lake — waterfront and photos", "es": "Lago de Itaipu — malecón y fotos"}}, {"time": "12:00", "activity": {"pt": "Marco das Três Fronteiras (mirante externo)", "en": "Triple Border Landmark (external viewpoint)", "es": "Marco de las Tres Fronteras (mirador externo)"}}, {"time": "13:00", "activity": {"pt": "Retorno ao hotel", "en": "Return to hotel", "es": "Regreso al hotel"}}]',
  4.7, 52,
  '{"metaTitle": {"pt": "City Tour Foz do Iguaçu | Desbravando Foz", "en": "Foz do Iguaçu City Tour | Desbravando Foz", "es": "City Tour Foz do Iguaçu | Desbravando Foz"}, "metaDescription": {"pt": "City Tour por Foz do Iguaçu com Mesquita Árabe, Templo Budista, Lago de Itaipu e Marco das Três Fronteiras.", "en": "City Tour through Foz do Iguaçu with Arab Mosque, Buddhist Temple, Itaipu Lake and Triple Border.", "es": "City Tour por Foz do Iguaçu con Mezquita Árabe, Templo Budista, Lago de Itaipu y Marco de las Tres Fronteras."}, "keywords": "city tour foz iguacu, turismo foz, pontos turisticos foz"}'
);


-- ============================================================
-- 2. POSTS (BLOG)
-- ============================================================

INSERT INTO public.posts (slug, title, short_desc, content, image_url, is_active) VALUES

(
  'melhor-epoca-visitar-cataratas',
  '{"pt": "Melhor época para visitar as Cataratas do Iguaçu", "en": "Best time to visit Iguaçu Falls", "es": "Mejor época para visitar las Cataratas del Iguazú"}',
  '{"pt": "Descubra qual o período ideal para visitar as Cataratas do Iguaçu e aproveitar ao máximo a experiência.", "en": "Discover the ideal period to visit Iguaçu Falls and make the most of the experience.", "es": "Descubra el período ideal para visitar las Cataratas del Iguazú y aprovechar al máximo la experiencia."}',
  '{"pt": "<h2>Quando visitar as Cataratas do Iguaçu?</h2><p>As Cataratas do Iguaçu são belíssimas durante todo o ano, mas existem períodos em que a experiência é ainda mais especial...</p><h3>Alta Temporada (Julho e Janeiro)</h3><p>Julho (férias de inverno) e janeiro (férias de verão) são os períodos de maior movimento. Reserve com antecedência!</p><h3>Melhor Período para Ver as Cataratas Cheias</h3><p>Entre março e maio, após as chuvas de verão, o volume de água é máximo. Uma das vistas mais espetaculares.</p><h3>Época Mais Tranquila</h3><p>Maio, junho e agosto oferecem menos filas, preços mais acessíveis e clima agradável.</p>", "en": "<h2>When to visit Iguaçu Falls?</h2><p>Iguaçu Falls is beautiful year-round, but there are periods when the experience is even more special.</p><h3>Peak Season (July and January)</h3><p>July (winter break) and January (summer break) are the busiest periods. Book in advance!</p>", "es": "<h2>¿Cuándo visitar las Cataratas del Iguazú?</h2><p>Las Cataratas del Iguazú son hermosas durante todo el año, pero hay períodos en que la experiencia es aún más especial.</p>"}',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
  true
),

(
  'dicas-compras-paraguai',
  '{"pt": "Guia Completo: Compras no Paraguai em Foz do Iguaçu", "en": "Complete Guide: Shopping in Paraguay from Foz do Iguaçu", "es": "Guía Completa: Compras en Paraguay desde Foz do Iguaçu"}',
  '{"pt": "Tudo o que você precisa saber para fazer compras em Ciudad del Este sem estresse e sem cair em armadilhas.", "en": "Everything you need to know to shop in Ciudad del Este without stress and without falling into traps.", "es": "Todo lo que necesitas saber para comprar en Ciudad del Este sin estrés y sin caer en trampas."}',
  '{"pt": "<h2>Compras no Paraguai: O Guia Definitivo</h2><p>Ciudad del Este é um dos destinos de compras mais populares da América do Sul. Com os preços corretos e as lojas certas, você pode economizar muito.</p><h3>Cota de Isenção</h3><p>Cada brasileiro tem direito a trazer até <strong>US$ 300</strong> em mercadorias sem pagar impostos (via terrestre). Acima disso, incide 50% de imposto sobre o excedente.</p><h3>Melhores Lojas para Eletrônicos</h3><ul><li><strong>Shopping Monalisa</strong> — Apple, Samsung, DJI</li><li><strong>Cellshop</strong> — Grande variedade de smartphones</li><li><strong>Shopping China</strong> — Eletrônicos variados</li></ul><h3>Dica de Ouro</h3><p>Sempre pesquise o preço no Brasil antes de sair. Nem tudo é mais barato no Paraguai!</p>", "en": "<h2>Shopping in Paraguay: The Definitive Guide</h2><p>Ciudad del Este is one of the most popular shopping destinations in South America.</p>", "es": "<h2>Compras en Paraguay: La Guía Definitiva</h2><p>Ciudad del Este es uno de los destinos de compras más populares de América del Sur.</p>"}',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
  true
),

(
  '3-dias-foz-iguacu',
  '{"pt": "O que fazer em Foz do Iguaçu em 3 dias: Roteiro Completo", "en": "What to do in Foz do Iguaçu in 3 days: Complete Itinerary", "es": "Qué hacer en Foz do Iguaçu en 3 días: Itinerario Completo"}',
  '{"pt": "Planeje sua viagem perfeita com este roteiro de 3 dias em Foz do Iguaçu, cobrindo os principais atrativos da região.", "en": "Plan your perfect trip with this 3-day itinerary in Foz do Iguaçu, covering the main attractions of the region.", "es": "Planifique su viaje perfecto con este itinerario de 3 días en Foz do Iguaçu, cubriendo los principales atractivos."}',
  '{"pt": "<h2>Roteiro Ideal — 3 Dias em Foz do Iguaçu</h2><h3>Dia 1 — Cataratas Brasileiras</h3><p>Comece pelo lado brasileiro das Cataratas. Chegue cedo (abertura às 9h) para evitar multidões e aproveitar a iluminação matinal nas quedas. À tarde, visite o Marco das Três Fronteiras.</p><h3>Dia 2 — Cataratas Argentinas + Puerto Iguazú</h3><p>Reserve o dia inteiro para o lado argentino. O Circuito Inferior oferece vistas únicas de baixo das quedas, enquanto o trem da Garganta do Diabo é uma experiência à parte.</p><h3>Dia 3 — Itaipu + City Tour + Paraguai</h3><p>Pela manhã, visita à Usina de Itaipu. À tarde, City Tour pela cidade cosmopolita. Se sobrar energia, cruce para o Paraguai no final do dia para compras rápidas.</p>", "en": "<h2>Ideal Itinerary — 3 Days in Foz do Iguaçu</h2><h3>Day 1 — Brazilian Falls</h3><p>Start with the Brazilian side of the Falls. Arrive early for fewer crowds and beautiful morning light on the falls.</p>", "es": "<h2>Itinerario Ideal — 3 Días en Foz do Iguaçu</h2><h3>Día 1 — Cataratas Brasileñas</h3><p>Comience por el lado brasileño de las Cataratas.</p>"}',
  'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800',
  true
),

(
  'transfer-aeroporto-foz-dicas',
  '{"pt": "Transfer do Aeroporto de Foz do Iguaçu: Tudo que Você Precisa Saber", "en": "Foz do Iguaçu Airport Transfer: Everything You Need to Know", "es": "Transfer del Aeropuerto de Foz do Iguaçu: Todo lo que Necesitas Saber"}',
  '{"pt": "Como funciona o transfer privativo do aeroporto IGU para seu hotel? Tire todas as dúvidas antes de chegar.", "en": "How does the private transfer from IGU airport to your hotel work? Get all your questions answered before you arrive.", "es": "¿Cómo funciona el transfer privado desde el aeropuerto IGU a su hotel? Resuelva todas sus dudas antes de llegar."}',
  '{"pt": "<h2>Transfer Aeroporto IGU — Sem Surpresas</h2><p>O Aeroporto Internacional de Foz do Iguaçu (IGU) fica a apenas 15 minutos do centro da cidade. Mas após uma viagem, o que você menos quer é se preocupar com transporte.</p><h3>Como Funciona Nosso Transfer?</h3><ol><li>Você nos envia o número do voo pelo WhatsApp</li><li>Monitoramos seu voo em tempo real</li><li>Nosso motorista aguarda com placa de identificação no desembarque</li><li>Transfer direto ao seu hotel, sem paradas</li></ol><h3>Posso Pedir Uber em Foz?</h3><p>Sim, o Uber funciona em Foz. Mas para grupos, famílias com bagagem ou chegadas tardias, o transfer privativo é mais seguro e econômico.</p>", "en": "<h2>IGU Airport Transfer — No Surprises</h2><p>Foz do Iguaçu International Airport (IGU) is just 15 minutes from the city center.</p>", "es": "<h2>Transfer Aeropuerto IGU — Sin Sorpresas</h2><p>El Aeropuerto Internacional de Foz do Iguaçu (IGU) está a solo 15 minutos del centro de la ciudad.</p>"}',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
  true
);


-- ============================================================
-- 3. FAQs ADICIONAIS
-- (O schema.sql já inseriu 5 FAQs básicas)
-- ============================================================

INSERT INTO public.faqs (question, answer, is_active) VALUES

(
  '{"pt": "Posso levar crianças nos passeios?", "en": "Can I bring children on the tours?", "es": "¿Puedo llevar niños en los tours?"}',
  '{"pt": "Sim! Todos os nossos passeios são adequados para famílias com crianças. Crianças até 5 anos geralmente não pagam ingresso nas atrações. Cadeirinhas de bebê estão disponíveis nos veículos — informe na reserva.", "en": "Yes! All our tours are suitable for families with children. Children up to 5 years old generally don''t pay admission at attractions. Baby seats are available in vehicles — inform us at booking.", "es": "¡Sí! Todos nuestros tours son adecuados para familias con niños. Los niños hasta 5 años generalmente no pagan entrada. Las sillas de bebé están disponibles en los vehículos — infórmenos en la reserva."}',
  true
),

(
  '{"pt": "Vocês aceitam cartão de crédito?", "en": "Do you accept credit cards?", "es": "¿Aceptan tarjeta de crédito?"}',
  '{"pt": "Sim! Aceitamos cartão de crédito e débito (Visa, Master, Elo), Pix (com desconto especial de 5%) e dinheiro em BRL, USD, ARS e PYG. O parcelamento no crédito está disponível em até 3x sem juros.", "en": "Yes! We accept credit and debit cards (Visa, Master, Elo), Pix (with special 5% discount) and cash in BRL, USD, ARS and PYG. Credit installments are available up to 3x interest-free.", "es": "¡Sí! Aceptamos tarjetas de crédito y débito (Visa, Master, Elo), Pix (con descuento especial del 5%) y efectivo en BRL, USD, ARS y PYG."}',
  true
),

(
  '{"pt": "O que acontece se chover no dia do passeio?", "en": "What happens if it rains on the day of the tour?", "es": "¿Qué sucede si llueve el día del tour?"}',
  '{"pt": "As Cataratas são ainda mais impressionantes com chuva! O passeio normalmente ocorre em qualquer clima. Em caso de fechamento do parque por condições climáticas extremas, reagendamos sem custo adicional.", "en": "The Falls are even more impressive in the rain! The tour normally takes place in any weather. In case of park closure due to extreme weather conditions, we reschedule at no extra cost.", "es": "¡Las Cataratas son aún más impresionantes con lluvia! El tour normalmente se realiza con cualquier clima. En caso de cierre del parque por condiciones climáticas extremas, reprogramamos sin costo adicional."}',
  true
),

(
  '{"pt": "Como funciona o passeio para o lado argentino? Preciso de passaporte?", "en": "How does the Argentine side tour work? Do I need a passport?", "es": "¿Cómo funciona el tour al lado argentino? ¿Necesito pasaporte?"}',
  '{"pt": "Brasileiros não precisam de passaporte para entrar na Argentina — apenas RG ou CNH válidos. Para outros países, consulte a necessidade de visto. Nossa equipe orienta toda a documentação necessária para a travessia de fronteira.", "en": "Brazilians don''t need a passport to enter Argentina — just a valid ID or driver''s license. For other countries, check visa requirements. Our team guides all necessary documentation for the border crossing.", "es": "Los brasileños no necesitan pasaporte para entrar a Argentina — solo RG o licencia de conducir válidos. Para otros países, consulte el requisito de visa."}',
  true
),

(
  '{"pt": "Vocês têm veículos adaptados para cadeirantes?", "en": "Do you have vehicles adapted for wheelchair users?", "es": "¿Tienen vehículos adaptados para personas en silla de ruedas?"}',
  '{"pt": "Sim! Temos veículos adaptados para cadeirantes mediante solicitação prévia. O Parque Nacional do Iguaçu também tem trilha e mirantes acessíveis. Informe suas necessidades no momento da reserva para que possamos garantir a melhor experiência.", "en": "Yes! We have vehicles adapted for wheelchair users upon prior request. Iguaçu National Park also has accessible trails and viewpoints. Please inform your needs at the time of booking so we can ensure the best experience.", "es": "¡Sí! Tenemos vehículos adaptados para personas en silla de ruedas previa solicitud. El Parque Nacional del Iguazú también tiene senderos y miradores accesibles."}',
  true
)

ON CONFLICT DO NOTHING;


-- ============================================================
-- 4. AGÊNCIAS PARCEIRAS (SAMPLE)
-- ============================================================

INSERT INTO public.agencies (name, email, phone, whatsapp, city, state, contact_person, is_active, notes) VALUES
(
  'Iguassu Prime Travel',
  'reservas@iguassuprime.com.br',
  '+55 (45) 3025-1234',
  '5545991112233',
  'Foz do Iguaçu',
  'PR',
  'Marcos Oliveira',
  true,
  'Agência especializada em grupos corporativos. Atende principalmente executivos e congressistas.'
),
(
  'Cataratas Tour & Travel',
  'contato@cataratastour.com',
  '+55 (45) 3522-9876',
  '5545998765432',
  'Foz do Iguaçu',
  'PR',
  'Fernanda Santos',
  true,
  'Foco em turismo receptivo para turistas argentinos e paraguaios.'
),
(
  'VIP Transfers Foz',
  'vip@viptransfersfoz.com.br',
  '+55 (45) 99876-5432',
  '5545997654321',
  'Foz do Iguaçu',
  'PR',
  'Ricardo Alves',
  true,
  'Especializada em transfers executivos aeroporto/hotel para hóspedes de hotéis 5 estrelas.'
);


-- ============================================================
-- FIM DO SEED
-- ============================================================
