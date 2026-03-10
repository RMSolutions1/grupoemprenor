import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') || '50', 10) || 50, 100);
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      `SELECT id, title, slug, excerpt, image_url, published_at FROM blog_posts WHERE active = 1 AND published_at IS NOT NULL ORDER BY published_at DESC LIMIT ?`,
      [limit]
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
