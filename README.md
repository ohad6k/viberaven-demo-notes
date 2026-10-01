# Notes

A tiny notes app. Next.js App Router on the front, Supabase for auth and the database, deployed to Vercel.

## Stack
- Next.js 14 (App Router)
- Supabase (auth + Postgres)
- Vercel (hosting)
- Cloudflare (edge + authoritative DNS)

## Local
1. Copy `.env.example` to `.env.local` and fill in your Supabase project URL and anon key.
2. Apply the migration in `supabase/migrations`.
3. `npm run dev`.

Run `npm run verify:cloudflare` with the Cloudflare variables configured to confirm that the zone is active and the read-only API token is valid.
