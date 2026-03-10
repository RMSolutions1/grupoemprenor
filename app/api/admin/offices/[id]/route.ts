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

    if (body.city !== undefined) { updates.push('city = ?'); values.push(String(body.city).trim()); }
    if (body.address !== undefined) { updates.push('address = ?'); values.push(String(body.address).trim()); }
    if (body.zip !== undefined) { updates.push('zip = ?'); values.push(body.zip ? String(body.zip).trim() : null); }
    if (body.phone !== undefined) { updates.push('phone = ?'); values.push(body.phone ? String(body.phone).trim() : null); }
    if (body.order_index !== undefined) { updates.push('order_index = ?'); values.push(parseInt(String(body.order_index), 10)); }

    if (updates.length === 0) return NextResponse.json({ success: true });
    values.push(numId);
    await pool.execute(`UPDATE offices SET ${updates.join(', ')} WHERE id = ?`, values);
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
    await pool.execute('DELETE FROM offices WHERE id = ?', [numId]);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
