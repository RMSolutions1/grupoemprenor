'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth-client';

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  published_at: string | null;
  active: number;
  created_at: string;
};

export default function AdminBlogPage() {
  const [list, setList] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    image_url: '',
    published_at: '',
    active: 1,
  });
  const [uploading, setUploading] = useState(false);

  function load() {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError('');
    fetch('/api/admin/blog', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then(setList)
      .catch(() => setError('Error al cargar.'))
      .finally(() => setLoading(false));
  }

  useEffect(() => { load(); }, []);

  function openEdit(p: BlogPost) {
    setEditingId(p.id);
    setForm({
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt || '',
      content: p.content || '',
      image_url: p.image_url || '',
      published_at: p.published_at || '',
      active: p.active,
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setShowNew(false);
  }

  function saveEdit() {
    const token = getToken();
    if (!token) return;
    const url = editingId ? `/api/admin/blog/${editingId}` : '/api/admin/blog';
    const method = editingId ? 'PATCH' : 'POST';
    const body = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt || null,
      content: form.content || null,
      image_url: form.image_url || null,
      published_at: form.published_at || null,
      active: form.active,
    };
    fetch(url, { method, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) })
      .then((res) => { if (!res.ok) throw new Error(); load(); cancelEdit(); })
      .catch(() => setError('Error al guardar.'));
  }

  async function uploadImage(file: File) {
    const token = getToken();
    if (!token) return;
    setUploading(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al subir');
      setForm((f) => ({ ...f, image_url: data.url }));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error al subir la imagen.');
    } finally {
      setUploading(false);
    }
  }

  function doDelete(id: number) {
    if (!confirm('¿Eliminar esta entrada del blog?')) return;
    const token = getToken();
    if (!token) return;
    fetch(`/api/admin/blog/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); load(); })
      .catch(() => setError('Error al eliminar.'));
  }

  if (loading) return <p className="text-steel-500">Cargando blog…</p>;

  return (
    <div>
      <h1 className="heading-2">Blog</h1>
      <p className="mt-2 text-steel-600">Gestiona artículos y noticias.</p>
      {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>}
      <button type="button" onClick={() => { setShowNew(true); setForm({ title: '', slug: '', excerpt: '', content: '', image_url: '', published_at: '', active: 1 }); }} className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">Nueva entrada</button>

      {(showNew || editingId) && (
        <div className="mt-6 rounded-xl border border-steel-200 bg-white p-6">
          <h2 className="font-semibold">{editingId ? 'Editar' : 'Nueva'} entrada</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input placeholder="Título *" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Slug" value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className="rounded border px-3 py-2" />
            <div className="sm:col-span-2 space-y-2">
            <input placeholder="URL imagen" value={form.image_url} onChange={(e) => setForm((f) => ({ ...f, image_url: e.target.value }))} className="w-full rounded border px-3 py-2" />
            <div className="flex flex-wrap items-center gap-2">
              <label className="cursor-pointer rounded border border-steel-300 bg-steel-50 px-3 py-2 text-sm hover:bg-steel-100">
                {uploading ? 'Subiendo…' : 'Subir imagen'}
                <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" className="sr-only" disabled={uploading} onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadImage(f); e.target.value = ''; }} />
              </label>
              {form.image_url && (
                <a href={form.image_url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">Ver imagen</a>
              )}
            </div>
          </div>
            <input placeholder="Fecha publicación (YYYY-MM-DD)" value={form.published_at} onChange={(e) => setForm((f) => ({ ...f, published_at: e.target.value }))} className="rounded border px-3 py-2" />
            <label className="flex items-center gap-2"><input type="checkbox" checked={!!form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked ? 1 : 0 }))} /> Activo</label>
            <textarea placeholder="Extracto" value={form.excerpt} onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))} className="sm:col-span-2 rounded border px-3 py-2" rows={2} />
            <textarea placeholder="Contenido" value={form.content} onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))} className="sm:col-span-2 rounded border px-3 py-2" rows={5} />
          </div>
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={saveEdit} className="rounded-lg bg-primary px-4 py-2 text-sm text-white">Guardar</button>
            <button type="button" onClick={cancelEdit} className="rounded-lg border px-4 py-2 text-sm">Cancelar</button>
          </div>
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-xl border border-steel-200 bg-white">
        {list.length === 0 ? <p className="p-8 text-center text-steel-500">No hay entradas.</p> : (
          <ul className="divide-y divide-steel-100">
            {list.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 p-4">
                <div>
                  <p className="font-medium text-primary">{p.title}</p>
                  <p className="text-sm text-steel-500">{p.slug} {p.published_at ? ` · ${p.published_at}` : ''} {p.active ? '' : '(inactivo)'}</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => openEdit(p)} className="text-sm font-medium text-accent hover:underline">Editar</button>
                  <button type="button" onClick={() => doDelete(p.id)} className="text-sm text-red-600 hover:underline">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
