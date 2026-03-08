import { NextResponse } from 'next/server';
import { getBearerToken, verifyToken } from '@/lib/auth';

export function requireAdmin(request: Request) {
  const token = getBearerToken(request);
  if (!token) {
    return { error: NextResponse.json({ error: 'No autorizado.' }, { status: 401 }), payload: null };
  }
  const payload = verifyToken(token);
  if (!payload) {
    return { error: NextResponse.json({ error: 'Sesión inválida o expirada.' }, { status: 401 }), payload: null };
  }
  if (payload.role !== 'administracion') {
    return { error: NextResponse.json({ error: 'Sin permisos.' }, { status: 403 }), payload: null };
  }
  return { error: null, payload: { userId: payload.userId, role: payload.role } };
}
