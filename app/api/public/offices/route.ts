import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, city, address, zip, phone, order_index FROM offices ORDER BY order_index ASC, id ASC'
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
