import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';
import { requireAdmin } from '@/lib/api-auth';

const ALLOWED_STATUS = ['nuevo', 'en_proceso', 'cotizado', 'cerrado'];

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;

  const { id } = await params;
  const numId = parseInt(id, 10);
  if (Number.isNaN(numId)) {
    return NextResponse.json({ error: 'ID inválido.' }, { status: 400 });
  }

  try {
    const body = await request.json();
    const status = body.status;
    const adminNotes = body.admin_notes;

    const pool = getPool();

    if (status !== undefined) {
      if (!ALLOWED_STATUS.includes(String(status))) {
        return NextResponse.json({ error: 'Estado no válido.' }, { status: 400 });
      }
      await pool.execute('UPDATE requests SET status = ? WHERE id = ?', [status, numId]);
    }

    if (adminNotes !== undefined) {
      await pool.execute('UPDATE requests SET admin_notes = ? WHERE id = ?', [
        String(adminNotes),
        numId,
      ]);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error al actualizar';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
