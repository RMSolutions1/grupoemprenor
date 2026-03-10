import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import { requireAdmin } from '@/lib/api-auth';

const MAX_SIZE_BYTES = 4 * 1024 * 1024; // 4 MB (límite típico en Vercel serverless)
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

export async function POST(request: Request) {
  const auth = requireAdmin(request);
  if (auth.error) return auth.error;

  const formData = await request.formData();
  const file = formData.get('file');
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: 'Falta el archivo.' }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: 'Solo se permiten imágenes (JPEG, PNG, WebP, GIF).' },
      { status: 400 }
    );
  }
  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json(
      { error: 'El archivo no puede superar 4 MB.' },
      { status: 400 }
    );
  }

  try {
    const suffix = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const pathname = `uploads/${suffix}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    const blob = await put(pathname, file, {
      access: 'public',
      addRandomSuffix: false,
    });
    return NextResponse.json({ url: blob.url });
  } catch (e) {
    console.error('Upload error:', e);
    return NextResponse.json(
      { error: 'Error al subir la imagen. Compruebe BLOB_READ_WRITE_TOKEN.' },
      { status: 500 }
    );
  }
}
