create table if not exists notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users (id),
  body text not null,
  created_at timestamptz not null default now()
);

alter table notes enable row level security;

-- Reads are scoped to the owner.
create policy "read own notes"
  on notes for select
  using (auth.uid() = user_id);

-- NOTE: writes are wide open. Any authenticated request can insert any row.
create policy "insert notes"
  on notes for insert
  with check (true);
