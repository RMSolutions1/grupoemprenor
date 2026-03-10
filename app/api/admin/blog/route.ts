import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, title, slug, excerpt, content, image_url, published_at, active, created_at FROM blog_posts ORDER BY published_at DESC NULLS LAST, created_at DESC'
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
    const excerpt = body.excerpt != null ? String(body.excerpt).trim() : null;
    const content = body.content != null ? String(body.content).trim() : null;
    const imageUrl = body.image_url ? String(body.image_url).trim() : null;
    const publishedAt = body.published_at ? String(body.published_at).trim() : null;
    const active = body.active !== undefined ? (body.active ? 1 : 0) : 1;
    if (!title || !slug) return NextResponse.json({ error: 'Título y slug obligatorios.' }, { status: 400 });
    const pool = getPool();
    await pool.execute(
      'INSERT INTO blog_posts (title, slug, excerpt, content, image_url, published_at, active) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, slug, excerpt, content, imageUrl, publishedAt || null, active]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
