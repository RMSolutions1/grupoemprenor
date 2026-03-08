import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { verifyPassword, signToken } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Email y contraseña son obligatorios.' },
        { status: 400 }
      );
    }

    const pool = getPool();
    const [rows] = await pool.execute(
      `SELECT u.id, u.email, u.password_hash, u.full_name, u.role_id, u.active, r.slug AS role_slug
       FROM users u
       JOIN roles r ON r.id = u.role_id
       WHERE u.email = ? AND u.active = 1 LIMIT 1`,
      [email.trim().toLowerCase()]
    );

    const user = (rows as Record<string, unknown>[])[0];
    if (!user) {
      return NextResponse.json({ error: 'Credenciales incorrectas.' }, { status: 401 });
    }

    const valid = await verifyPassword(password, user.password_hash as string);
    if (!valid) {
      return NextResponse.json({ error: 'Credenciales incorrectas.' }, { status: 401 });
    }

    const token = signToken({
      userId: user.id as number,
      email: user.email as string,
      role: user.role_slug as string,
      roleId: user.role_id as number,
    });

    return NextResponse.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        fullName: user.full_name,
        role: user.role_slug,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error al iniciar sesión';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
