-- ============================================================
-- DESBRAVANDO FOZ — Schema Completo do Banco de Dados
-- Supabase / PostgreSQL
-- ============================================================

-- ┌─────────────────────────────────────────────────────────┐
-- │  EXTENSÕES                                              │
-- └─────────────────────────────────────────────────────────┘

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";


-- ============================================================
-- TABELAS PRINCIPAIS
-- ============================================================

-- ┌─────────────────────────────────────────────────────────┐
-- │  1. APP_SETTINGS                                        │
-- │  Configurações globais: IDs de rastreamento, etc.       │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.app_settings (
  key         text NOT NULL,
  value       text,
  label       text,
  description text,
  updated_at  timestamp with time zone DEFAULT timezone('utc', now()),
  CONSTRAINT app_settings_pkey PRIMARY KEY (key)
);

COMMENT ON TABLE public.app_settings IS 'Configurações globais da aplicação (tracking IDs, etc.)';


-- ┌─────────────────────────────────────────────────────────┐
-- │  2. CATEGORIES                                          │
-- │  Categorias de passeios (multilingue via JSONB)         │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.categories (
  id         uuid NOT NULL DEFAULT gen_random_uuid(),
  slug       text NOT NULL,
  name       jsonb NOT NULL DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  is_active  boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT timezone('utc', now()),
  CONSTRAINT categories_pkey    PRIMARY KEY (id),
  CONSTRAINT categories_slug_key UNIQUE (slug)
);

COMMENT ON TABLE public.categories IS 'Categorias dos passeios turísticos';


-- ┌─────────────────────────────────────────────────────────┐
-- │  3. TOURS                                               │
-- │  Passeios / Experiências turísticas                     │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.tours (
  id               uuid NOT NULL DEFAULT gen_random_uuid(),
  slug             text NOT NULL,
  status           text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'hidden')),

  -- Mídia
  image            text,
  gallery          text[],

  -- Conteúdo multilingue (JSONB: {"pt":"...", "en":"...", "es":"..."})
  title            jsonb NOT NULL DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  description      jsonb DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  full_description jsonb DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  location         jsonb DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  duration         jsonb DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,

  -- Classificação
  category         text,
  featured         boolean DEFAULT false,
  display_order    numeric DEFAULT 9999,
  rating           numeric DEFAULT 5.0,
  reviews_count    integer DEFAULT 0,

  -- Preços
  pricing_type     text CHECK (pricing_type IN ('per_person', 'per_vehicle')),
  base_price       numeric NOT NULL DEFAULT 0,
  price_promotional numeric,
  vehicle_tiers    jsonb,   -- [{id, vehicleName, minPax, maxPax, price, promotionalPrice}]
  seasonal_rules   jsonb,   -- [{id, startDate, endDate, type, price}]

  -- Detalhes do passeio
  highlights       jsonb,   -- [{"pt":"...", "en":"...", "es":"..."}]
  included         jsonb,
  not_included     jsonb,
  itinerary        jsonb,

  -- SEO
  seo              jsonb DEFAULT '{"metaTitle": "", "metaDescription": ""}'::jsonb,

  created_at       timestamp with time zone DEFAULT timezone('utc', now()),
  CONSTRAINT tours_pkey     PRIMARY KEY (id),
  CONSTRAINT tours_slug_key UNIQUE (slug)
);

COMMENT ON TABLE public.tours IS 'Passeios e experiências turísticas do catálogo';
COMMENT ON COLUMN public.tours.vehicle_tiers IS 'JSON array de tiers por veículo: [{id, vehicleName, minPax, maxPax, price, promotionalPrice}]';
COMMENT ON COLUMN public.tours.seasonal_rules IS 'Regras sazonais de preço: [{id, startDate, endDate, type (fixed|percent), price}]';


-- ┌─────────────────────────────────────────────────────────┐
-- │  4. POSTS (Blog)                                        │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.posts (
  id         uuid NOT NULL DEFAULT gen_random_uuid(),
  slug       text NOT NULL,
  title      jsonb NOT NULL DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  short_desc jsonb NOT NULL DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  content    jsonb NOT NULL DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  image_url  text,
  is_active  boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc', now()),
  CONSTRAINT posts_pkey     PRIMARY KEY (id),
  CONSTRAINT posts_slug_key UNIQUE (slug)
);

COMMENT ON TABLE public.posts IS 'Artigos do blog / dicas de viagem';


-- ┌─────────────────────────────────────────────────────────┐
-- │  5. FAQS                                                │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.faqs (
  id         uuid NOT NULL DEFAULT gen_random_uuid(),
  question   jsonb NOT NULL DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  answer     jsonb NOT NULL DEFAULT '{"pt": "", "en": "", "es": ""}'::jsonb,
  is_active  boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT faqs_pkey PRIMARY KEY (id)
);

COMMENT ON TABLE public.faqs IS 'Perguntas frequentes';


-- ┌─────────────────────────────────────────────────────────┐
-- │  6. COMPANIES                                           │
-- │  Empresas que usam o sistema (multi-tenant)             │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.companies (
  id            uuid NOT NULL DEFAULT gen_random_uuid(),
  name          text NOT NULL,
  cnpj          text,
  email         text,
  phone         text,
  whatsapp      text,
  address       text,
  city          text DEFAULT 'Foz do Iguaçu',
  state         text DEFAULT 'PR',
  logo_url      text,
  language      text DEFAULT 'pt' CHECK (language IN ('pt', 'en')),
  primary_color text DEFAULT '#0D3561',
  is_active     boolean DEFAULT true,
  created_at    timestamp with time zone DEFAULT now(),
  updated_at    timestamp with time zone DEFAULT now(),
  CONSTRAINT companies_pkey PRIMARY KEY (id)
);

COMMENT ON TABLE public.companies IS 'Empresas receptivas cadastradas no sistema';


-- ┌─────────────────────────────────────────────────────────┐
-- │  7. AGENCIES                                            │
-- │  Agências parceiras / revendedoras                      │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.agencies (
  id             uuid NOT NULL DEFAULT gen_random_uuid(),
  name           text NOT NULL,
  cnpj           text,
  email          text,
  phone          text,
  whatsapp       text,
  address        text,
  city           text DEFAULT 'Foz do Iguaçu',
  state          text DEFAULT 'PR',
  contact_person text,
  is_active      boolean DEFAULT true,
  notes          text,
  created_at     timestamp with time zone DEFAULT now(),
  updated_at     timestamp with time zone DEFAULT now(),
  CONSTRAINT agencies_pkey PRIMARY KEY (id)
);

COMMENT ON TABLE public.agencies IS 'Agências parceiras de turismo';


-- ┌─────────────────────────────────────────────────────────┐
-- │  8. VOUCHERS                                            │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.vouchers (
  id               uuid NOT NULL DEFAULT gen_random_uuid(),
  voucher_number   text NOT NULL,
  agency_id        uuid,
  agency_name      text NOT NULL,
  company_id       uuid,
  company_name     text DEFAULT 'Desbravando Foz',
  company_language text DEFAULT 'pt',
  holder_name      text NOT NULL,
  service_date     date,
  hotel            text,
  pickup_time      text,
  notes            text,
  amount_paid      numeric NOT NULL DEFAULT 0,
  status           text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'used', 'cancelled')),
  created_at       timestamp with time zone DEFAULT now(),
  updated_at       timestamp with time zone DEFAULT now(),
  CONSTRAINT vouchers_pkey             PRIMARY KEY (id),
  CONSTRAINT vouchers_voucher_number_key UNIQUE (voucher_number),
  CONSTRAINT vouchers_agency_id_fkey   FOREIGN KEY (agency_id)  REFERENCES public.agencies(id),
  CONSTRAINT vouchers_company_id_fkey  FOREIGN KEY (company_id) REFERENCES public.companies(id)
);

COMMENT ON TABLE public.vouchers IS 'Vouchers de serviços emitidos para clientes';


-- ┌─────────────────────────────────────────────────────────┐
-- │  9. VOUCHER_ITEMS                                       │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.voucher_items (
  id           uuid NOT NULL DEFAULT gen_random_uuid(),
  voucher_id   uuid NOT NULL,
  service_name text NOT NULL,
  service_type text NOT NULL DEFAULT 'Tour',
  sort_order   integer DEFAULT 0,
  created_at   timestamp with time zone DEFAULT now(),
  CONSTRAINT voucher_items_pkey          PRIMARY KEY (id),
  CONSTRAINT voucher_items_voucher_id_fkey FOREIGN KEY (voucher_id) REFERENCES public.vouchers(id) ON DELETE CASCADE
);

COMMENT ON TABLE public.voucher_items IS 'Itens de serviço dentro de um voucher';


-- ┌─────────────────────────────────────────────────────────┐
-- │  10. VOUCHER_PAX                                        │
-- └─────────────────────────────────────────────────────────┘

CREATE TABLE IF NOT EXISTS public.voucher_pax (
  id              uuid NOT NULL DEFAULT gen_random_uuid(),
  voucher_item_id uuid NOT NULL,
  pax_type        text NOT NULL,
  quantity        integer NOT NULL DEFAULT 1,
  price_per_pax   numeric NOT NULL DEFAULT 0,
  CONSTRAINT voucher_pax_pkey              PRIMARY KEY (id),
  CONSTRAINT voucher_pax_item_id_fkey      FOREIGN KEY (voucher_item_id) REFERENCES public.voucher_items(id) ON DELETE CASCADE
);

COMMENT ON TABLE public.voucher_pax IS 'Tipos e quantidade de passageiros por item do voucher';


-- ============================================================
-- ÍNDICES DE PERFORMANCE
-- ============================================================

-- Tours
CREATE INDEX IF NOT EXISTS idx_tours_slug        ON public.tours (slug);
CREATE INDEX IF NOT EXISTS idx_tours_status       ON public.tours (status);
CREATE INDEX IF NOT EXISTS idx_tours_featured     ON public.tours (featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_tours_category     ON public.tours (category);
CREATE INDEX IF NOT EXISTS idx_tours_display_order ON public.tours (display_order ASC);
CREATE INDEX IF NOT EXISTS idx_tours_created_at   ON public.tours (created_at DESC);

-- Posts
CREATE INDEX IF NOT EXISTS idx_posts_slug      ON public.posts (slug);
CREATE INDEX IF NOT EXISTS idx_posts_is_active ON public.posts (is_active) WHERE is_active = true;
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON public.posts (created_at DESC);

-- FAQs
CREATE INDEX IF NOT EXISTS idx_faqs_is_active ON public.faqs (is_active);

-- Categories
CREATE INDEX IF NOT EXISTS idx_categories_slug      ON public.categories (slug);
CREATE INDEX IF NOT EXISTS idx_categories_is_active ON public.categories (is_active);

-- Vouchers
CREATE INDEX IF NOT EXISTS idx_vouchers_number     ON public.vouchers (voucher_number);
CREATE INDEX IF NOT EXISTS idx_vouchers_agency_id  ON public.vouchers (agency_id);
CREATE INDEX IF NOT EXISTS idx_vouchers_company_id ON public.vouchers (company_id);
CREATE INDEX IF NOT EXISTS idx_vouchers_status     ON public.vouchers (status);
CREATE INDEX IF NOT EXISTS idx_vouchers_date       ON public.vouchers (service_date);

-- Voucher Items
CREATE INDEX IF NOT EXISTS idx_voucher_items_voucher_id ON public.voucher_items (voucher_id);

-- Voucher Pax
CREATE INDEX IF NOT EXISTS idx_voucher_pax_item_id ON public.voucher_pax (voucher_item_id);

-- App Settings
CREATE INDEX IF NOT EXISTS idx_app_settings_key ON public.app_settings (key);


-- ============================================================
-- FUNÇÕES AUXILIARES
-- ============================================================

-- Atualiza updated_at automaticamente
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc', now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers de updated_at
CREATE OR REPLACE TRIGGER trg_companies_updated_at
  BEFORE UPDATE ON public.companies
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE TRIGGER trg_agencies_updated_at
  BEFORE UPDATE ON public.agencies
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE TRIGGER trg_vouchers_updated_at
  BEFORE UPDATE ON public.vouchers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE TRIGGER trg_app_settings_updated_at
  BEFORE UPDATE ON public.app_settings
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================================

-- Ativa RLS em todas as tabelas
ALTER TABLE public.app_settings  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tours          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts          ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.companies      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.agencies       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vouchers       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.voucher_items  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.voucher_pax    ENABLE ROW LEVEL SECURITY;

-- ──────────────────────────────────────────────────────────
-- POLÍTICAS PÚBLICAS (leitura sem autenticação)
-- Permite que o site público leia conteúdo publicado.
-- ──────────────────────────────────────────────────────────

-- Tours: qualquer um pode ver os publicados
CREATE POLICY "tours_public_read"
  ON public.tours FOR SELECT
  USING (status = 'published');

-- Categorias ativas: leitura pública
CREATE POLICY "categories_public_read"
  ON public.categories FOR SELECT
  USING (is_active = true);

-- Posts ativos: leitura pública
CREATE POLICY "posts_public_read"
  ON public.posts FOR SELECT
  USING (is_active = true);

-- FAQs ativas: leitura pública
CREATE POLICY "faqs_public_read"
  ON public.faqs FOR SELECT
  USING (is_active = true);

-- App Settings: leitura pública (necessário para carregar Analytics/Pixel no servidor)
CREATE POLICY "app_settings_public_read"
  ON public.app_settings FOR SELECT
  USING (true);

-- ──────────────────────────────────────────────────────────
-- POLÍTICAS ADMIN (leitura e escrita autenticada)
-- Usuários autenticados têm acesso total (painel admin).
-- ──────────────────────────────────────────────────────────

-- Tours: admin CRUD completo
CREATE POLICY "tours_admin_all"
  ON public.tours FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Categories: admin CRUD completo
CREATE POLICY "categories_admin_all"
  ON public.categories FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Posts: admin CRUD completo
CREATE POLICY "posts_admin_all"
  ON public.posts FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- FAQs: admin CRUD completo
CREATE POLICY "faqs_admin_all"
  ON public.faqs FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- App Settings: admin escrita
CREATE POLICY "app_settings_admin_write"
  ON public.app_settings FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Companies: apenas autenticados
CREATE POLICY "companies_admin_all"
  ON public.companies FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Agencies: apenas autenticados
CREATE POLICY "agencies_admin_all"
  ON public.agencies FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Vouchers: apenas autenticados
CREATE POLICY "vouchers_admin_all"
  ON public.vouchers FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Voucher Items: apenas autenticados
CREATE POLICY "voucher_items_admin_all"
  ON public.voucher_items FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Voucher Pax: apenas autenticados
CREATE POLICY "voucher_pax_admin_all"
  ON public.voucher_pax FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');


-- ============================================================
-- DADOS INICIAIS (SEED)
-- ============================================================

-- ──────────────────────────────────────────────────────────
-- App Settings padrão
-- ──────────────────────────────────────────────────────────

INSERT INTO public.app_settings (key, value, label, description) VALUES
  (
    'google_analytics_id',
    '',
    'Google Analytics 4 ID',
    'ID de medição do GA4. Formato: G-XXXXXXXXXX'
  ),
  (
    'google_ads_id',
    '',
    'Google Ads ID',
    'ID da conta do Google Ads. Formato: AW-XXXXXXXXXX'
  ),
  (
    'meta_pixel_id',
    '',
    'Meta Pixel ID',
    'ID do Pixel do Facebook/Instagram. Formato numérico.'
  ),
  (
    'whatsapp_number',
    '5545991083852',
    'Número de WhatsApp',
    'Número para receber reservas via WhatsApp (somente dígitos, com DDI).'
  ),
  (
    'google_ads_conversion_label',
    '',
    'Google Ads — Label de Conversão (Compra)',
    'Label da ação de conversão "Compra" no Google Ads.'
  )
ON CONFLICT (key) DO NOTHING;

-- ──────────────────────────────────────────────────────────
-- Empresa padrão: Desbravando Foz
-- ──────────────────────────────────────────────────────────

INSERT INTO public.companies (
  name, email, phone, whatsapp, city, state,
  primary_color, language, is_active
) VALUES (
  'Desbravando Foz',
  'contato@desbravandofoz.com.br',
  '+55 (45) 99108-3852',
  '5545991083852',
  'Foz do Iguaçu',
  'PR',
  '#0D3561',
  'pt',
  true
) ON CONFLICT DO NOTHING;

-- ──────────────────────────────────────────────────────────
-- Categorias padrão
-- ──────────────────────────────────────────────────────────

INSERT INTO public.categories (slug, name, is_active) VALUES
  ('cataratas',  '{"pt": "Cataratas",          "en": "Waterfalls",  "es": "Cataratas"}'::jsonb,        true),
  ('transfer',   '{"pt": "Transfer",            "en": "Transfer",    "es": "Transfer"}'::jsonb,          true),
  ('compras',    '{"pt": "Compras",             "en": "Shopping",    "es": "Compras"}'::jsonb,           true),
  ('itaipu',     '{"pt": "Itaipu",              "en": "Itaipu",      "es": "Itaipu"}'::jsonb,            true),
  ('aventura',   '{"pt": "Aventura",            "en": "Adventure",   "es": "Aventura"}'::jsonb,          true),
  ('city-tour',  '{"pt": "City Tour",           "en": "City Tour",   "es": "City Tour"}'::jsonb,         true),
  ('vip',        '{"pt": "Experiências VIP",    "en": "VIP Experiences", "es": "Experiencias VIP"}'::jsonb, true)
ON CONFLICT (slug) DO NOTHING;

-- ──────────────────────────────────────────────────────────
-- FAQs padrão
-- ──────────────────────────────────────────────────────────

INSERT INTO public.faqs (question, answer, is_active) VALUES
  (
    '{"pt": "Como funciona o transfer do aeroporto?", "en": "How does the airport transfer work?", "es": "¿Cómo funciona el traslado al aeropuerto?"}',
    '{"pt": "Monitoramos o seu voo em tempo real e um motorista credenciado aguarda sua chegada no desembarque com placa de identificação. O transfer é privativo, direto ao seu hotel.", "en": "We monitor your flight in real time and a credentialed driver awaits your arrival at the terminal with an identification sign. The transfer is private and direct to your hotel.", "es": "Monitoreamos su vuelo en tiempo real y un conductor acreditado espera su llegada en la terminal con una señal de identificación. El traslado es privado y directo a su hotel."}',
    true
  ),
  (
    '{"pt": "Vocês atendem grupos grandes?", "en": "Do you serve large groups?", "es": "¿Atienden grupos grandes?"}',
    '{"pt": "Sim! Temos vans executivas e ônibus para grupos de qualquer tamanho. Entre em contato para orçamento personalizado.", "en": "Yes! We have executive vans and buses for groups of any size. Contact us for a personalized quote.", "es": "¡Sí! Tenemos camionetas ejecutivas y autobuses para grupos de cualquier tamaño. Contáctenos para un presupuesto personalizado."}',
    true
  ),
  (
    '{"pt": "O pagamento pode ser feito na hora?", "en": "Can I pay on the spot?", "es": "¿Puedo pagar en el momento?"}',
    '{"pt": "Sim, aceitamos pagamento em dinheiro (BRL, USD, ARS, PYG), cartão de crédito/débito e Pix. O pagamento é combinado diretamente via WhatsApp.", "en": "Yes, we accept cash (BRL, USD, ARS, PYG), credit/debit card and Pix. Payment is arranged directly via WhatsApp.", "es": "Sí, aceptamos efectivo (BRL, USD, ARS, PYG), tarjeta de crédito/débito y Pix. El pago se coordina directamente por WhatsApp."}',
    true
  ),
  (
    '{"pt": "Com quanto tempo de antecedência devo reservar?", "en": "How far in advance should I book?", "es": "¿Con cuánta anticipación debo reservar?"}',
    '{"pt": "Recomendamos reservar com pelo menos 24h de antecedência, especialmente em feriados e alta temporada. Para grupos, com 48–72h.", "en": "We recommend booking at least 24 hours in advance, especially on holidays and peak season. For groups, 48–72 hours.", "es": "Recomendamos reservar con al menos 24 horas de anticipación, especialmente en días festivos y temporada alta. Para grupos, 48–72 horas."}',
    true
  ),
  (
    '{"pt": "Os guias falam inglês e espanhol?", "en": "Do your guides speak English and Spanish?", "es": "¿Los guías hablan inglés y español?"}',
    '{"pt": "Sim! Nossa equipe é bilíngue (PT/EN/ES). Todos os guias são credenciados pelo Ministério do Turismo.", "en": "Yes! Our team is bilingual (PT/EN/ES). All guides are accredited by the Ministry of Tourism.", "es": "¡Sí! Nuestro equipo es bilingüe (PT/EN/ES). Todos los guías están acreditados por el Ministerio de Turismo."}',
    true
  )
ON CONFLICT DO NOTHING;


-- ============================================================
-- VIEWS ÚTEIS
-- ============================================================

-- View: tours publicados ordenados para exibição no site
CREATE OR REPLACE VIEW public.published_tours AS
  SELECT *
  FROM public.tours
  WHERE status = 'published'
  ORDER BY display_order ASC, created_at DESC;

-- View: posts ativos para o blog
CREATE OR REPLACE VIEW public.active_posts AS
  SELECT *
  FROM public.posts
  WHERE is_active = true
  ORDER BY created_at DESC;

-- View: resumo de vouchers com dados da agência
CREATE OR REPLACE VIEW public.voucher_summary AS
  SELECT
    v.id,
    v.voucher_number,
    v.holder_name,
    v.service_date,
    v.hotel,
    v.pickup_time,
    v.amount_paid,
    v.status,
    v.company_name,
    v.created_at,
    a.name AS agency_name,
    a.phone AS agency_phone,
    COUNT(vi.id) AS items_count
  FROM public.vouchers v
  LEFT JOIN public.agencies a ON a.id = v.agency_id
  LEFT JOIN public.voucher_items vi ON vi.voucher_id = v.id
  GROUP BY v.id, a.name, a.phone;


-- ============================================================
-- REALTIME (Supabase)
-- Habilita atualizações em tempo real para o painel admin
-- ============================================================

ALTER PUBLICATION supabase_realtime ADD TABLE public.tours;
ALTER PUBLICATION supabase_realtime ADD TABLE public.vouchers;


-- ============================================================
-- FIM DO SCHEMA
-- ============================================================
