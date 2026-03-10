import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute('SELECT config_key, config_value FROM site_config ORDER BY config_key ASC');
    const map: Record<string, string> = {};
    (rows as { config_key: string; config_value: string | null }[]).forEach((r) => {
      map[r.config_key] = r.config_value ?? '';
    });
    return NextResponse.json(map);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
