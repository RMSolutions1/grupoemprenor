import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;

  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, slug, title, short_title, description, long_description, icon, order_index, active, created_at FROM services ORDER BY order_index ASC, id ASC'
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;

  try {
    const body = await request.json();
    const slug = body.slug && String(body.slug).trim().toLowerCase().replace(/\s+/g, '-');
    const title = body.title && String(body.title).trim();
    const shortTitle = body.short_title != null ? String(body.short_title).trim() : '';
    const description = body.description != null ? String(body.description).trim() : null;
    const longDescription = body.long_description != null ? String(body.long_description).trim() : null;
    const icon = body.icon ? String(body.icon).trim() : null;
    const orderIndex = body.order_index != null ? parseInt(String(body.order_index), 10) : 0;
    const active = body.active !== undefined ? (body.active ? 1 : 0) : 1;

    if (!slug || !title) {
      return NextResponse.json({ error: 'Slug y título son obligatorios.' }, { status: 400 });
    }

    const pool = getPool();
    await pool.execute(
      'INSERT INTO services (slug, title, short_title, description, long_description, icon, order_index, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [slug, title, shortTitle, description, longDescription, icon, orderIndex, active]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
