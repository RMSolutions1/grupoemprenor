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
    const values: (string | number)[] = [];
    if (body.active !== undefined) { updates.push('active = ?'); values.push(body.active ? 1 : 0); }
    if (body.role_id !== undefined) { updates.push('role_id = ?'); values.push(parseInt(String(body.role_id), 10)); }
    if (body.full_name !== undefined) { updates.push('full_name = ?'); values.push(String(body.full_name).trim()); }
    if (body.phone !== undefined) { updates.push('phone = ?'); values.push(body.phone ? String(body.phone).trim() : ''); }
    if (body.company_name !== undefined) { updates.push('company_name = ?'); values.push(body.company_name ? String(body.company_name).trim() : ''); }
    if (updates.length === 0) return NextResponse.json({ success: true });
    values.push(numId);
    await pool.execute(`UPDATE users SET ${updates.join(', ')} WHERE id = ?`, values);
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
