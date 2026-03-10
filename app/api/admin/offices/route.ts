import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

export async function GET(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, city, address, zip, phone, order_index, created_at FROM offices ORDER BY order_index ASC, id ASC'
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
    const city = body.city && String(body.city).trim();
    const address = body.address && String(body.address).trim();
    const zip = body.zip ? String(body.zip).trim() : null;
    const phone = body.phone ? String(body.phone).trim() : null;
    const orderIndex = body.order_index != null ? parseInt(String(body.order_index), 10) : 0;
    if (!city || !address) return NextResponse.json({ error: 'Ciudad y dirección obligatorios.' }, { status: 400 });
    const pool = getPool();
    await pool.execute(
      'INSERT INTO offices (city, address, zip, phone, order_index) VALUES (?, ?, ?, ?, ?)',
      [city, address, zip, phone, orderIndex]
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
