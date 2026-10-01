-- Shared notes: let a note owner share a note with another user.
create table public.shared_notes (
  id uuid primary key default gen_random_uuid(),
  note_id uuid not null references public.notes(id) on delete cascade,
  shared_with uuid not null,
  created_at timestamptz not null default now()
);
