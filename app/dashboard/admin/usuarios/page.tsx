'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth-client';

type User = { id: number; email: string; full_name: string; role_id: number; role_slug: string; role_name: string; phone: string | null; company_name: string | null; active: number; created_at: string };

const ROLES = [
  { id: 1, slug: 'cliente', name: 'Cliente' },
  { id: 2, slug: 'proveedor', name: 'Proveedor' },
  { id: 3, slug: 'empleado', name: 'Empleado' },
  { id: 4, slug: 'empresa', name: 'Empresa' },
  { id: 5, slug: 'administracion', name: 'Administración' },
];

export default function AdminUsuariosPage() {
  const [list, setList] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editRoleId, setEditRoleId] = useState(0);
  const [editActive, setEditActive] = useState(1);

  function load() {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError('');
    fetch('/api/admin/users', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then(setList)
      .catch(() => setError('Error al cargar.'))
      .finally(() => setLoading(false));
  }
  useEffect(() => { load(); }, []);

  function openEdit(u: User) {
    setEditingId(u.id);
    setEditRoleId(u.role_id);
    setEditActive(u.active);
  }

  function saveEdit() {
    if (editingId == null) return;
    const token = getToken();
    if (!token) return;
    fetch(`/api/admin/users/${editingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ role_id: editRoleId, active: editActive }),
    })
      .then((res) => { if (!res.ok) throw new Error(); load(); setEditingId(null); })
      .catch(() => setError('Error al guardar.'));
  }

  if (loading) return <p className="text-steel-500">Cargando…</p>;

  return (
    <div>
      <h1 className="heading-2">Usuarios</h1>
      <p className="mt-2 text-steel-600">Listado de usuarios y roles. Solo se puede editar rol y estado activo.</p>
      {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>}
      <div className="mt-6 rounded-xl border bg-white">
        {list.length === 0 ? <p className="p-8 text-center text-steel-500">No hay usuarios.</p> : (
          <ul className="divide-y divide-steel-100">
            {list.map((u) => (
              <li key={u.id} className="p-4">
                {editingId === u.id ? (
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-medium text-primary">{u.email}</span>
                    <select value={editRoleId} onChange={(e) => setEditRoleId(parseInt(e.target.value, 10))} className="rounded border px-3 py-2">
                      {ROLES.map((r) => (
                        <option key={r.id} value={r.id}>{r.name}</option>
                      ))}
                    </select>
                    <label className="flex items-center gap-2"><input type="checkbox" checked={!!editActive} onChange={(e) => setEditActive(e.target.checked ? 1 : 0)} /> Activo</label>
                    <button type="button" onClick={saveEdit} className="rounded-lg bg-primary px-4 py-2 text-sm text-white">Guardar</button>
                    <button type="button" onClick={() => setEditingId(null)} className="rounded-lg border px-4 py-2 text-sm">Cancelar</button>
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-medium text-primary">{u.email}</p>
                      <p className="text-sm text-steel-500">{u.full_name} · {u.role_name} {u.active ? '' : '(inactivo)'}</p>
                    </div>
                    <button type="button" onClick={() => openEdit(u)} className="text-sm text-accent hover:underline">Editar</button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
