import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { getBearerToken, verifyToken } from '@/lib/auth';

export async function GET(request: Request) {
  const token = getBearerToken(request);
  if (!token) {
    return NextResponse.json({ error: 'No autorizado.' }, { status: 401 });
  }

  const payload = verifyToken(token);
  if (!payload) {
    return NextResponse.json({ error: 'Sesión inválida o expirada.' }, { status: 401 });
  }

  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      `SELECT u.id, u.email, u.full_name, r.slug AS role_slug
       FROM users u
       JOIN roles r ON r.id = u.role_id
       WHERE u.id = ? AND u.active = 1
       LIMIT 1`,
      [payload.userId]
    );

    const user = (rows as { id: number; email: string; full_name: string; role_slug: string }[])[0];
    if (!user) {
      return NextResponse.json({ error: 'Usuario no encontrado.' }, { status: 404 });
    }

    return NextResponse.json({
      id: user.id,
      email: user.email,
      fullName: user.full_name,
      role: user.role_slug,
    });
  } catch {
    return NextResponse.json({ error: 'Error al obtener el usuario.' }, { status: 500 });
  }
}
