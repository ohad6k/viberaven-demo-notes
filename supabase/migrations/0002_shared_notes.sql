-- Shared notes: let a note owner share a note with another user.
create table public.shared_notes (
  id uuid primary key default gen_random_uuid(),
  note_id uuid not null references public.notes(id) on delete cascade,
  shared_with uuid not null,
  created_at timestamptz not null default now()
);

alter table public.shared_notes enable row level security;

create policy "owner and recipient read shared notes" on public.shared_notes
  for select using (
    shared_with = auth.uid()
    or exists (select 1 from public.notes n where n.id = note_id and n.user_id = auth.uid())
  );
