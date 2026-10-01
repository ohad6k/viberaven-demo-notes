import { cookies } from 'next/headers';
import { createServerClient as createSsrClient } from '@supabase/ssr';

export function createServerClient() {
  const cookieStore = cookies();
  return createSsrClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (items) => {
          items.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        }
      }
    }
  );
}
