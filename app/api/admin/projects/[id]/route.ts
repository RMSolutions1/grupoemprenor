import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;

  const { id } = await params;
  const numId = parseInt(id, 10);
  if (Number.isNaN(numId)) {
    return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const pool = getPool();
    const updates: string[] = [];
    const values: (string | number | null)[] = [];

    if (body.title !== undefined) { updates.push('title = ?'); values.push(String(body.title).trim()); }
    if (body.slug !== undefined) { updates.push('slug = ?'); values.push(String(body.slug).trim().toLowerCase().replace(/\s+/g, '-')); }
    if (body.description !== undefined) { updates.push('description = ?'); values.push(body.description == null ? null : String(body.description).trim()); }
    if (body.image_url !== undefined) { updates.push('image_url = ?'); values.push(body.image_url ? String(body.image_url).trim() : null); }
    if (body.division_slug !== undefined) { updates.push('division_slug = ?'); values.push(body.division_slug ? String(body.division_slug).trim() : null); }
    if (body.project_date !== undefined) { updates.push('project_date = ?'); values.push(body.project_date ? String(body.project_date).trim() : null); }
    if (body.order_index !== undefined) { updates.push('order_index = ?'); values.push(parseInt(String(body.order_index), 10)); }
    if (body.active !== undefined) { updates.push('active = ?'); values.push(body.active ? 1 : 0); }

    if (updates.length === 0) return NextResponse.json({ success: true });
    values.push(numId);
    await pool.execute(`UPDATE projects SET ${updates.join(', ')} WHERE id = ?`, values);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(_request);
  if (auth.error) return auth.error;

  const { id } = await params;
  const numId = parseInt(id, 10);
  if (Number.isNaN(numId)) {
    return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
  }

  try {
    const pool = getPool();
    await pool.execute('DELETE FROM projects WHERE id = ?', [numId]);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
