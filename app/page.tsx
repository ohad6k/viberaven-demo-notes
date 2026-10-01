import { createServerClient } from '@/lib/supabase/server';

export default async function HomePage() {
  const supabase = createServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  const { data: notes } = await supabase
    .from('notes')
    .select('id, body, created_at')
    .order('created_at', { ascending: false });

  return (
    <main style={{ maxWidth: 640, margin: '40px auto', fontFamily: 'system-ui' }}>
      <h1>Notes</h1>
      <p>{user ? `Signed in as ${user.id}` : 'Not signed in'}</p>
      <ul>
        {(notes ?? []).map((n) => (
          <li key={n.id}>{n.body}</li>
        ))}
      </ul>
    </main>
  );
}
