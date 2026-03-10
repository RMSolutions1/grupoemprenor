'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth-client';

type Office = {
  id: number;
  city: string;
  address: string;
  zip: string | null;
  phone: string | null;
  order_index: number;
  created_at: string;
};

export default function AdminOficinasPage() {
  const [list, setList] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [form, setForm] = useState({ city: '', address: '', zip: '', phone: '', order_index: 0 });

  function load() {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError('');
    fetch('/api/admin/offices', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then(setList)
      .catch(() => setError('Error al cargar.'))
      .finally(() => setLoading(false));
  }

  useEffect(() => { load(); }, []);

  function openEdit(o: Office) {
    setEditingId(o.id);
    setForm({
      city: o.city,
      address: o.address,
      zip: o.zip || '',
      phone: o.phone || '',
      order_index: o.order_index,
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setShowNew(false);
  }

  function saveEdit() {
    const token = getToken();
    if (!token) return;
    const url = editingId ? `/api/admin/offices/${editingId}` : '/api/admin/offices';
    const method = editingId ? 'PATCH' : 'POST';
    const body = {
      city: form.city,
      address: form.address,
      zip: form.zip || null,
      phone: form.phone || null,
      order_index: form.order_index,
    };
    fetch(url, { method, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(body) })
      .then((res) => { if (!res.ok) throw new Error(); load(); cancelEdit(); })
      .catch(() => setError('Error al guardar.'));
  }

  function doDelete(id: number) {
    if (!confirm('¿Eliminar esta oficina?')) return;
    const token = getToken();
    if (!token) return;
    fetch(`/api/admin/offices/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); load(); })
      .catch(() => setError('Error al eliminar.'));
  }

  if (loading) return <p className="text-steel-500">Cargando oficinas…</p>;

  return (
    <div>
      <h1 className="heading-2">Oficinas</h1>
      <p className="mt-2 text-steel-600">Gestiona las sedes y oficinas.</p>
      {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>}
      <button type="button" onClick={() => { setShowNew(true); setForm({ city: '', address: '', zip: '', phone: '', order_index: list.length }); }} className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white">Nueva oficina</button>

      {(showNew || editingId) && (
        <div className="mt-6 rounded-xl border border-steel-200 bg-white p-6">
          <h2 className="font-semibold">{editingId ? 'Editar' : 'Nueva'} oficina</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <input placeholder="Ciudad *" value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Dirección *" value={form.address} onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Código postal" value={form.zip} onChange={(e) => setForm((f) => ({ ...f, zip: e.target.value }))} className="rounded border px-3 py-2" />
            <input placeholder="Teléfono" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} className="rounded border px-3 py-2" />
            <input type="number" placeholder="Orden" value={form.order_index} onChange={(e) => setForm((f) => ({ ...f, order_index: parseInt(e.target.value, 10) || 0 }))} className="rounded border px-3 py-2" />
          </div>
          <div className="mt-4 flex gap-2">
            <button type="button" onClick={saveEdit} className="rounded-lg bg-primary px-4 py-2 text-sm text-white">Guardar</button>
            <button type="button" onClick={cancelEdit} className="rounded-lg border px-4 py-2 text-sm">Cancelar</button>
          </div>
        </div>
      )}

      <div className="mt-6 overflow-hidden rounded-xl border border-steel-200 bg-white">
        {list.length === 0 ? <p className="p-8 text-center text-steel-500">No hay oficinas.</p> : (
          <ul className="divide-y divide-steel-100">
            {list.map((o) => (
              <li key={o.id} className="flex flex-wrap items-center justify-between gap-2 p-4">
                <div>
                  <p className="font-medium text-primary">{o.city}</p>
                  <p className="text-sm text-steel-500">{o.address} {o.zip ? ` · ${o.zip}` : ''} {o.phone ? ` · ${o.phone}` : ''}</p>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => openEdit(o)} className="text-sm font-medium text-accent hover:underline">Editar</button>
                  <button type="button" onClick={() => doDelete(o.id)} className="text-sm text-red-600 hover:underline">Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
