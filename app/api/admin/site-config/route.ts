import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;
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

export async function PATCH(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;
  try {
    const body = await request.json();
    if (typeof body !== 'object' || body === null) {
      return NextResponse.json({ error: 'Cuerpo inválido.' }, { status: 400 });
    }
    const pool = getPool();
    for (const key of Object.keys(body)) {
      const configKey = String(key).trim();
      if (!configKey) continue;
      const configValue = body[key] == null ? null : String(body[key]).trim();
      await pool.execute(
        'INSERT INTO site_config (config_key, config_value) VALUES (?, ?) ON CONFLICT (config_key) DO UPDATE SET config_value = EXCLUDED.config_value',
        [configKey, configValue]
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
