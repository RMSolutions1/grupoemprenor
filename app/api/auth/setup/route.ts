import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email;
    const password = body.password;
    const fullName = body.fullName;

    if (!email || !password || typeof email !== 'string' || typeof password !== 'string') {
      return NextResponse.json(
        { error: 'Email y contraseña son obligatorios.' },
        { status: 400 }
      );
    }

    const pool = getPool();
    const [countRows] = await pool.execute('SELECT COUNT(*) AS count FROM users');
    const first = (countRows as Record<string, unknown>[])[0];
    const count = first?.count != null ? Number(first.count) : 0;

    if (count > 0) {
      return NextResponse.json(
        { error: 'Ya existe al menos un usuario. Use la pantalla de login.' },
        { status: 403 }
      );
    }

    const [roleRows] = await pool.execute(
      "SELECT id FROM roles WHERE slug = 'administracion' LIMIT 1"
    );
    const roleFirst = (roleRows as Record<string, unknown>[])[0];
    const roleId = roleFirst?.id != null ? Number(roleFirst.id) : 0;
    if (!roleId) {
      return NextResponse.json(
        { error: 'Rol administración no encontrado. Ejecute el SQL del proyecto.' },
        { status: 500 }
      );
    }

    const passwordHash = await hashPassword(password);
    const name =
      typeof fullName === 'string' && fullName.trim() ? fullName.trim() : 'Administrador';

    await pool.execute(
      'INSERT INTO users (email, password_hash, full_name, role_id, active) VALUES (?, ?, ?, ?, 1)',
      [email.trim().toLowerCase(), passwordHash, name, roleId]
    );

    return NextResponse.json({
      success: true,
      message: 'Usuario administrador creado. Ya puede iniciar sesión en /login.',
    });
  } catch (err) {
    const raw = err instanceof Error ? err.message : String(err);
    let message = raw;
    if (raw.includes('ECONNREFUSED') || raw.includes('ENOTFOUND')) {
      message = 'No se pudo conectar a la base de datos. Revise DATABASE_URL (Neon) en Vercel o .env.local.';
    } else if (raw.includes('password') && raw.includes('authentication')) {
      message = 'Usuario o contraseña de la base de datos incorrectos. Revise DATABASE_URL en .env.local.';
    } else if (raw.includes('does not exist') || raw.includes('relation')) {
      message = 'La base de datos o tablas no existen. Ejecute database/schema-neon.sql en el SQL Editor de Neon.';
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
