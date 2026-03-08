'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth-client';

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  status: string;
  admin_notes: string | null;
  created_at: string;
};

const STATUS_LABELS: Record<string, string> = {
  nuevo: 'Nuevo',
  leido: 'Leído',
  respondido: 'Respondido',
  archivado: 'Archivado',
};

export default function AdminContactosPage() {
  const [list, setList] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editStatus, setEditStatus] = useState('');
  const [editNotes, setEditNotes] = useState('');

  function load() {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError('');
    fetch('/api/contacts', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar');
        return res.json();
      })
      .then(setList)
      .catch(() => setError('Error al cargar contactos.'))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    load();
  }, []);

  function startEdit(c: Contact) {
    setEditingId(c.id);
    setEditStatus(c.status);
    setEditNotes(c.admin_notes || '');
  }

  function cancelEdit() {
    setEditingId(null);
    setEditStatus('');
    setEditNotes('');
  }

  function saveEdit() {
    if (editingId == null) return;
    const token = getToken();
    if (!token) return;
    fetch(`/api/admin/contacts/${editingId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status: editStatus, admin_notes: editNotes }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al guardar');
        load();
        cancelEdit();
      })
      .catch(() => setError('Error al actualizar.'));
  }

  if (loading) {
    return <p className="text-steel-500">Cargando contactos…</p>;
  }

  return (
    <div>
      <h1 className="heading-2">Contactos</h1>
      <p className="mt-2 text-steel-600">Mensajes recibidos desde el formulario del sitio.</p>

      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>
      )}

      <div className="mt-6 overflow-hidden rounded-xl border border-steel-200 bg-white">
        {list.length === 0 ? (
          <p className="p-8 text-center text-steel-500">No hay contactos aún.</p>
        ) : (
          <ul className="divide-y divide-steel-100">
            {list.map((c) => (
              <li key={c.id} className="p-4 sm:p-6">
                {editingId === c.id ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-steel-700">Estado</label>
                      <select
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                        className="mt-1 rounded-lg border border-steel-300 px-3 py-2"
                      >
                        {Object.entries(STATUS_LABELS).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-steel-700">Notas internas</label>
                      <textarea
                        value={editNotes}
                        onChange={(e) => setEditNotes(e.target.value)}
                        rows={2}
                        className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={saveEdit}
                        className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light"
                      >
                        Guardar
                      </button>
                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="rounded-lg border border-steel-300 px-4 py-2 text-sm font-medium text-steel-700"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-primary">{c.name}</p>
                        <p className="text-sm text-steel-600">{c.email}</p>
                        {c.phone && <p className="text-sm text-steel-500">{c.phone}</p>}
                        <p className="mt-2 text-sm text-steel-700">{c.message}</p>
                        <p className="mt-2 text-xs text-steel-400">
                          {new Date(c.created_at).toLocaleString('es-AR')}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            c.status === 'nuevo'
                              ? 'bg-amber-100 text-amber-800'
                              : c.status === 'archivado'
                                ? 'bg-steel-100 text-steel-600'
                                : 'bg-steel-100 text-steel-700'
                          }`}
                        >
                          {STATUS_LABELS[c.status] || c.status}
                        </span>
                        <button
                          type="button"
                          onClick={() => startEdit(c)}
                          className="text-sm font-medium text-accent hover:underline"
                        >
                          Editar
                        </button>
                      </div>
                    </div>
                    {c.admin_notes && (
                      <p className="mt-2 border-t border-steel-100 pt-2 text-sm italic text-steel-600">
                        Notas: {c.admin_notes}
                      </p>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
