import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name && String(body.name).trim();
    const email = body.email && String(body.email).trim();
    const phone = body.phone ? String(body.phone).trim() : null;
    const message = body.message && String(body.message).trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Nombre, email y mensaje son obligatorios.' }, { status: 400 });
    }

    const pool = getPool();
    await pool.execute(
      'INSERT INTO contacts (name, email, phone, message, status) VALUES (?, ?, ?, ?, ?)',
      [name, email, phone || null, message, 'nuevo']
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;

  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, name, email, phone, message, status, admin_notes, created_at FROM contacts ORDER BY created_at DESC'
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
