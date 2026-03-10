import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      `SELECT u.id, u.email, u.full_name, u.role_id, u.phone, u.company_name, u.active, u.created_at, r.slug AS role_slug, r.name AS role_name
       FROM users u
       JOIN roles r ON r.id = u.role_id
       ORDER BY u.created_at DESC`
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
