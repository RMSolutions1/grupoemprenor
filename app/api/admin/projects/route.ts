import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, title, slug, description, image_url, division_slug, project_date, order_index, active, created_at FROM projects ORDER BY order_index ASC, id DESC'
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
    const title = body.title && String(body.title).trim();
    const slug = (body.slug && String(body.slug).trim()) || (title && title.toLowerCase().replace(/\s+/g, '-'));
    const description = body.description != null ? String(body.description).trim() : null;
    const imageUrl = body.image_url ? String(body.image_url).trim() : null;
    const divisionSlug = body.division_slug ? String(body.division_slug).trim() : null;
    const projectDate = body.project_date ? String(body.project_date).trim() : null;
    const orderIndex = body.order_index != null ? parseInt(String(body.order_index), 10) : 0;
    const active = body.active !== undefined ? (body.active ? 1 : 0) : 1;
    if (!title || !slug) return NextResponse.json({ error: 'Título y slug obligatorios.' }, { status: 400 });
    const pool = getPool();
    await pool.execute(
      'INSERT INTO projects (title, slug, description, image_url, division_slug, project_date, order_index, active) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [title, slug, description, imageUrl, divisionSlug, projectDate || null, orderIndex, active]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
