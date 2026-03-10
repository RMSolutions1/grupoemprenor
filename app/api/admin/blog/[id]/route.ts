import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;
  const { id } = await params;
  const numId = parseInt(id, 10);
  if (Number.isNaN(numId)) return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
  try {
    const body = await request.json();
    const pool = getPool();
    const updates: string[] = [];
    const values: (string | number | null)[] = [];
    if (body.title !== undefined) { updates.push('title = ?'); values.push(String(body.title).trim()); }
    if (body.slug !== undefined) { updates.push('slug = ?'); values.push(String(body.slug).trim()); }
    if (body.excerpt !== undefined) { updates.push('excerpt = ?'); values.push(body.excerpt == null ? null : String(body.excerpt).trim()); }
    if (body.content !== undefined) { updates.push('content = ?'); values.push(body.content == null ? null : String(body.content).trim()); }
    if (body.image_url !== undefined) { updates.push('image_url = ?'); values.push(body.image_url ? String(body.image_url).trim() : null); }
    if (body.published_at !== undefined) { updates.push('published_at = ?'); values.push(body.published_at ? String(body.published_at).trim() : null); }
    if (body.active !== undefined) { updates.push('active = ?'); values.push(body.active ? 1 : 0); }
    if (updates.length === 0) return NextResponse.json({ success: true });
    values.push(numId);
    await pool.execute(`UPDATE blog_posts SET ${updates.join(', ')} WHERE id = ?`, values);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = requireAdmin(_request);
  if (auth.error) return auth.error;
  const { id } = await params;
  const numId = parseInt(id, 10);
  if (Number.isNaN(numId)) return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
  try {
    const pool = getPool();
    await pool.execute('DELETE FROM blog_posts WHERE id = ?', [numId]);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
