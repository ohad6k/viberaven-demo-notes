import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  const supabase = createServerClient();
  const { body } = await request.json();

  const { data, error } = await supabase
    .from('notes')
    .insert({ body })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ ok: false, message: error.message }, { status: 400 });
  }
  return NextResponse.json({ ok: true, note: data });
}
