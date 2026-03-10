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
    let pos = 0;

    if (body.slug !== undefined) { updates.push(`slug = ?`); values.push(String(body.slug).trim().toLowerCase().replace(/\s+/g, '-')); pos++; }
    if (body.title !== undefined) { updates.push(`title = ?`); values.push(String(body.title).trim()); pos++; }
    if (body.short_title !== undefined) { updates.push(`short_title = ?`); values.push(String(body.short_title).trim()); pos++; }
    if (body.description !== undefined) { updates.push(`description = ?`); values.push(body.description == null ? null : String(body.description).trim()); pos++; }
    if (body.long_description !== undefined) { updates.push(`long_description = ?`); values.push(body.long_description == null ? null : String(body.long_description).trim()); pos++; }
    if (body.icon !== undefined) { updates.push(`icon = ?`); values.push(body.icon ? String(body.icon).trim() : null); pos++; }
    if (body.order_index !== undefined) { updates.push(`order_index = ?`); values.push(parseInt(String(body.order_index), 10)); pos++; }
    if (body.active !== undefined) { updates.push(`active = ?`); values.push(body.active ? 1 : 0); pos++; }

    if (updates.length === 0) {
      return NextResponse.json({ success: true });
    }
    values.push(numId);
    await pool.execute(`UPDATE services SET ${updates.join(', ')} WHERE id = ?`, values);
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
    await pool.execute('DELETE FROM services WHERE id = ?', [numId]);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
