'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth-client';

type Service = { id: number; slug: string; title: string; short_title: string; description: string | null; icon: string | null; order_index: number; active: number };

export default function AdminServiciosPage() {
  const [list, setList] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ slug: '', title: '', short_title: '', description: '', icon: '', order_index: 0, active: 1 });

  function load() {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError('');
    fetch('/api/admin/services', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then(setList)
      .catch(() => setError('Error al cargar.'))
      .finally(() => setLoading(false));
  }
  useEffect(() => { load(); }, []);

  function openEdit(s: Service) {
    setEditingId(s.id);
    setForm({ slug: s.slug, title: s.title, short_title: s.short_title || '', description: s.description || '', icon: s.icon || '', order_index: s.order_index, active: s.active });
  }
  function cancelEdit() { setEditingId(null); setShowNew(false); }

  function saveEdit() {
    const token = getToken();
    if (!token) return;
    const url = editingId ? `/api/admin/services/${editingId}` : '/api/admin/services';
    const method = editingId ? 'PATCH' : 'POST';
    const body = editingId ? { ...form, description: form.description || null } : form;
    fetch(url, { method, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) })
      .then((res) => { if (!res.ok) throw new Error(); load(); cancelEdit(); })
      .catch(() => setError('Error al guardar.'));
  }

  function doDelete(id: number) {
    if (!confirm('¿Eliminar?')) return;
    const token = getToken();
    if (!token) return;
    fetch(`/api/admin/services/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (res.ok) load(); })
      .catch(() => setError('Error.'));
  }

  if (loading) return <p className="text-steel-500">Cargando…</p>;
  return (
    <div>
      <h1 className="heading-2">Servicios</h1>
      <p className="mt-2 text-steel-600">Gestiona los servicios del sitio.</p>
      {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>}
      <button type="button" onClick={() => { setShowNew(true); setForm({ slug: '', title: '', short_title: '', description: '', icon: '', order_index: list.length, active: 1 }); }} className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">Nuevo servicio</button>
      {(showNew || editingId) && (
        <div className="mt-6 rounded-xl border bg-white p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <input placeholder="Slug" value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Título *" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Título corto" value={form.short_title} onChange={(e) => setForm((f) => ({ ...f, short_title: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Icono" value={form.icon} onChange={(e) => setForm((f) => ({ ...f, icon: e.target.value }))} className="rounded border px-3 py-2" />
            <input type="number" value={form.order_index} onChange={(e) => setForm((f) => ({ ...f, order_index: parseInt(e.target.value, 10) || 0 }))} className="rounded border px-3 py-2" />
            <label className="flex items-center gap-2"><input type="checkbox" checked={!!form.active} onChange={(e) => setForm((f) => ({ ...f, active: e.target.checked ? 1 : 0 }))} /> Activo</label>
            <textarea placeholder="Descripción" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} className="sm:col-span-2 rounded border px-3 py-2" rows={2} />
          </div>
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={saveEdit} className="rounded-lg bg-primary px-4 py-2 text-sm text-white">Guardar</button>
            <button type="button" onClick={cancelEdit} className="rounded-lg border px-4 py-2 text-sm">Cancelar</button>
          </div>
        </div>
      )}
      <div className="mt-6 rounded-xl border bg-white">
        {list.length === 0 ? <p className="p-8 text-center text-steel-500">No hay servicios.</p> : (
          <ul className="divide-y divide-steel-100">
            {list.map((s) => (
              <li key={s.id} className="flex justify-between gap-2 p-4">
                <div><p className="font-medium text-primary">{s.title}</p><p className="text-sm text-steel-500">{s.slug}</p></div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => openEdit(s)} className="text-sm text-accent hover:underline">Editar</button>
                  <button type="button" onClick={() => doDelete(s.id)} className="text-sm text-red-600 hover:underline">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
