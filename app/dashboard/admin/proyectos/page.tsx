'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth-client';

type Project = {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  division_slug: string | null;
  project_date: string | null;
  order_index: number;
  active: number;
  created_at: string;
};

export default function AdminProyectosPage() {
  const [list, setList] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ title: '', slug: '', description: '', image_url: '', division_slug: '', project_date: '', order_index: 0, active: 1 });
  const [uploading, setUploading] = useState(false);

  function load() {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError('');
    fetch('/api/admin/projects', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then(setList)
      .catch(() => setError('Error al cargar.'))
      .finally(() => setLoading(false));
  }

  useEffect(() => { load(); }, []);

  function openEdit(p: Project) {
    setEditingId(p.id);
    setForm({
      title: p.title,
      slug: p.slug,
      description: p.description || '',
      image_url: p.image_url || '',
      division_slug: p.division_slug || '',
      project_date: p.project_date || '',
      order_index: p.order_index,
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
    const url = editingId ? `/api/admin/projects/${editingId}` : '/api/admin/projects';
    const method = editingId ? 'PATCH' : 'POST';
    const body = {
      title: form.title,
      slug: form.slug,
      description: form.description || null,
      image_url: form.image_url || null,
      division_slug: form.division_slug || null,
      project_date: form.project_date || null,
      order_index: form.order_index,
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
    if (!confirm('¿Eliminar este proyecto?')) return;
    const token = getToken();
    if (!token) return;
    fetch(`/api/admin/projects/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); load(); })
      .catch(() => setError('Error al eliminar.'));
  }

  if (loading) return <p className="text-steel-500">Cargando proyectos…</p>;

  return (
    <div>
      <h1 className="heading-2">Proyectos</h1>
      <p className="mt-2 text-steel-600">Gestiona el portafolio de proyectos.</p>
      {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>}
      <button type="button" onClick={() => { setShowNew(true); setForm({ title: '', slug: '', description: '', image_url: '', division_slug: '', project_date: '', order_index: list.length, active: 1 }); }} className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">Nuevo proyecto</button>

      {(showNew || editingId) && (
        <div className="mt-6 rounded-xl border border-steel-200 bg-white p-6">
          <h2 className="font-semibold">{editingId ? 'Editar' : 'Nuevo'} proyecto</h2>
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
            <input placeholder="División (slug)" value={form.division_slug} onChange={(e) => setForm((f) => ({ ...f, division_slug: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Fecha (YYYY-MM-DD)" value={form.project_date} onChange={(e) => setForm((f) => ({ ...f, project_date: e.target.value }))} className="rounded border px-3 py-2" />
            <input type="number" placeholder="Orden" value={form.order_index} onChange={(e) => setForm((f) => ({ ...f, order_index: parseInt(e.target.value, 10) || 0 }))} className="rounded border px-3 py-2" />
            <label className="flex items-center gap-2"><input type="checkbox" checked={!!form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked ? 1 : 0 }))} /> Activo</label>
            <textarea placeholder="Descripción" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="sm:col-span-2 rounded border px-3 py-2" rows={3} />
          </div>
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={saveEdit} className="rounded-lg bg-primary px-4 py-2 text-sm text-white">Guardar</button>
            <button type="button" onClick={cancelEdit} className="rounded-lg border px-4 py-2 text-sm">Cancelar</button>
          </div>
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-xl border border-steel-200 bg-white">
        {list.length === 0 ? <p className="p-8 text-center text-steel-500">No hay proyectos.</p> : (
          <ul className="divide-y divide-steel-100">
            {list.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-2 p-4">
                <div>
                  <p className="font-medium text-primary">{p.title}</p>
                  <p className="text-sm text-steel-500">{p.slug} {p.project_date ? ` · ${p.project_date}` : ''} {p.active ? '' : '(inactivo)'}</p>
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
