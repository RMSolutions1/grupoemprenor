import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, title, slug, description, image_url, division_slug, project_date, order_index FROM projects WHERE active = 1 ORDER BY order_index ASC, project_date DESC NULLS LAST, id DESC'
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
