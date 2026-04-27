-- ============================================================
-- RESET — Drop todas as tabelas (use com cuidado!)
-- Execute ANTES de rodar schema.sql do zero
-- ============================================================

DROP VIEW IF EXISTS public.voucher_summary;
DROP VIEW IF EXISTS public.active_posts;
DROP VIEW IF EXISTS public.published_tours;

DROP TABLE IF EXISTS public.voucher_pax    CASCADE;
DROP TABLE IF EXISTS public.voucher_items  CASCADE;
DROP TABLE IF EXISTS public.vouchers       CASCADE;
DROP TABLE IF EXISTS public.agencies       CASCADE;
DROP TABLE IF EXISTS public.companies      CASCADE;
DROP TABLE IF EXISTS public.faqs           CASCADE;
DROP TABLE IF EXISTS public.posts          CASCADE;
DROP TABLE IF EXISTS public.tours          CASCADE;
DROP TABLE IF EXISTS public.categories     CASCADE;
DROP TABLE IF EXISTS public.app_settings   CASCADE;

DROP FUNCTION IF EXISTS public.set_updated_at() CASCADE;
