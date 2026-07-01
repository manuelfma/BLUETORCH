-- Session 16: Videoreport.ai lead capture table
-- Run this in Supabase SQL Editor if the professor asks for database proof.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text not null default 'session16-videoreport-ai',
  page text not null default 'landing',
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

drop policy if exists "Allow public lead capture inserts" on public.leads;

create policy "Allow public lead capture inserts"
on public.leads
for insert
to anon
with check (
  email is not null
  and length(email) <= 320
  and position('@' in email) > 1
);

-- No public SELECT policy is created.
-- Anonymous visitors can submit a lead, but cannot read the leads table.

