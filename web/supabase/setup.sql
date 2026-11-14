-- BinCheck HK new-project setup. Run in the SQL Editor of the NEW BinCheck project.
-- Tables keep compatible field names with the prototype server.
create table if not exists public.facilities (
  id text primary key,
  title text not null,
  lat double precision not null check (lat between 22.14 and 22.58),
  lng double precision not null check (lng between 113.82 and 114.45),
  kind text not null,
  status text not null check (status in ('pending','active','needs_review','unavailable','rejected')),
  photo_id text,
  note text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  demo integer not null default 1 check (demo in (0,1))
);
create table if not exists public.photos (
  id text primary key,
  object_key text not null unique,
  content_type text not null check (content_type in ('image/jpeg','image/png','image/webp')),
  assessment jsonb not null,
  created_at timestamptz not null default now()
);
create table if not exists public.observations (
  id text primary key,
  facility_id text not null references public.facilities(id),
  photo_id text references public.photos(id),
  report_type text not null check (report_type in ('new','present','missing','moved','covered')),
  note text not null default '',
  state text not null default 'pending' check (state in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  review_note text
);
create index if not exists observations_facility_idx on public.observations(facility_id);
create index if not exists observations_state_idx on public.observations(state,created_at);
create table if not exists public.attempts (
  id text primary key,
  count integer not null default 0
);

-- Future accounts have explicit roles. A signed-up user cannot make themselves a reviewer.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default '',
  role text not null default 'viewer' check (role in ('viewer','contributor','reviewer')),
  created_at timestamptz not null default now()
);

alter table public.facilities enable row level security;
alter table public.photos enable row level security;
alter table public.observations enable row level security;
alter table public.attempts enable row level security;
alter table public.profiles enable row level security;

revoke all on public.facilities,public.photos,public.observations,public.attempts,public.profiles from anon,authenticated;
grant select on public.facilities,public.photos,public.observations to anon,authenticated;
grant select on public.profiles to authenticated;
grant all on public.facilities,public.photos,public.observations,public.attempts,public.profiles to service_role;

create policy "Public read reviewed facilities" on public.facilities for select to anon,authenticated
  using (status in ('active','needs_review','unavailable'));
create policy "Public read approved observations" on public.observations for select to anon,authenticated
  using (state='approved');
create policy "Public read approved photo references" on public.photos for select to anon,authenticated
  using (exists(select 1 from public.observations o where o.photo_id=photos.id and o.state='approved'));
create policy "Account reads own profile" on public.profiles for select to authenticated
  using (id=auth.uid());

-- All writes currently pass through the team's protected server routes.
-- Authenticated status by itself does not grant submission or reviewer rights.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('bin-evidence','bin-evidence',false,5000000,array['image/jpeg','image/png','image/webp'])
on conflict (id) do nothing;

create policy "Public read approved evidence" on storage.objects for select to anon,authenticated
  using (bucket_id='bin-evidence' and exists (
    select 1 from public.photos p
    join public.observations o on o.photo_id=p.id
    where p.object_key=storage.objects.name and o.state='approved'
  ));

create or replace function public.bincheck_increment_attempt(attempt_id text)
returns integer language sql set search_path=public as $$
  insert into public.attempts(id,count) values (attempt_id,1)
  on conflict (id) do update set count=public.attempts.count+1
  returning count;
$$;
revoke all on function public.bincheck_increment_attempt(text) from public,anon,authenticated;
grant execute on function public.bincheck_increment_attempt(text) to service_role;

-- Return the expected table names as a final setup check.
select table_name from information_schema.tables
where table_schema='public' and table_name in ('facilities','photos','observations','attempts','profiles')
order by table_name;
