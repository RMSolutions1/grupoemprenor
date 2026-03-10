import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = body.name && String(body.name).trim();
    const email = body.email && String(body.email).trim();
    const phone = body.phone ? String(body.phone).trim() : null;
    const message = body.body != null ? String(body.body).trim() : (body.message != null ? String(body.message).trim() : null);
    const source = body.source ? String(body.source).trim() : 'contacto';
    const serviceSlug = body.service_slug ? String(body.service_slug).trim() : null;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nombre y email son obligatorios.' },
        { status: 400 }
      );
    }

    const pool = getPool();
    await pool.execute(
      'INSERT INTO requests (source, name, email, phone, body, service_slug, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [source, name, email, phone || null, message || null, serviceSlug || null, 'nuevo']
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
      `SELECT id, source, name, email, phone, body, service_slug, status, admin_notes, created_at
       FROM requests
       ORDER BY created_at DESC`
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
