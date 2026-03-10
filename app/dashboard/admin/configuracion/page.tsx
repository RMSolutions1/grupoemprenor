'use client';

import { useEffect, useState } from 'react';
import { getToken } from '@/lib/auth-client';

const CONFIG_KEYS = [
  'name',
  'legalName',
  'tagline',
  'description',
  'url',
  'cuit',
  'email',
  'emailAlt',
  'phone',
  'phoneRaw',
  'whatsapp',
  'whatsappUrl',
  'schedule',
  'emergency',
  'address',
] as const;

type ConfigMap = Record<string, string>;

export default function AdminConfiguracionPage() {
  const [config, setConfig] = useState<ConfigMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  function load() {
    const token = getToken();
    if (!token) return;
    setLoading(true);
    setError('');
    fetch('/api/admin/site-config', { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => { if (!res.ok) throw new Error(); return res.json(); })
      .then((data: ConfigMap) => {
        const next: ConfigMap = {};
        CONFIG_KEYS.forEach((k) => { next[k] = data[k] ?? ''; });
        setConfig(next);
      })
      .catch(() => setError('Error al cargar.'))
      .finally(() => setLoading(false));
  }

  useEffect(() => { load(); }, []);

  function setValue(key: string, value: string) {
    setConfig((c) => ({ ...c, [key]: value }));
  }

  function save() {
    const token = getToken();
    if (!token) return;
    setSaving(true);
    setError('');
    const body: ConfigMap = {};
    CONFIG_KEYS.forEach((k) => { body[k] = config[k] ?? ''; });
    fetch('/api/admin/site-config', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify(body),
    })
      .then((res) => { if (!res.ok) throw new Error(); })
      .catch(() => setError('Error al guardar.'))
      .finally(() => setSaving(false));
  }

  if (loading) return <p className="text-steel-500">Cargando configuración…</p>;

  const labels: Record<string, string> = {
    name: 'Nombre',
    legalName: 'Razón social',
    tagline: 'Eslogan',
    description: 'Descripción',
    url: 'URL del sitio',
    cuit: 'CUIT',
    email: 'Email',
    emailAlt: 'Email alternativo',
    phone: 'Teléfono',
    phoneRaw: 'Teléfono (raw)',
    whatsapp: 'WhatsApp',
    whatsappUrl: 'URL WhatsApp',
    schedule: 'Horario',
    emergency: 'Emergencias',
    address: 'Dirección',
  };

  return (
    <div>
      <h1 className="heading-2">Configuración del sitio</h1>
      <p className="mt-2 text-steel-600">Datos generales y de contacto.</p>
      {error && <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>}

      <div className="mt-6 rounded-xl border border-steel-200 bg-white p-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {CONFIG_KEYS.map((key) => (
            <div key={key} className={key === 'description' ? 'sm:col-span-2' : ''}>
              <label className="mb-1 block text-sm font-medium text-steel-600">{labels[key] ?? key}</label>
              {key === 'description' ? (
                <textarea value={config[key] ?? ''} onChange={(e) => setValue(key, e.target.value)} className="w-full rounded border px-3 py-2" rows={3} />
              ) : (
                <input value={config[key] ?? ''} onChange={(e) => setValue(key, e.target.value)} className="w-full rounded border px-3 py-2" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <button type="button" onClick={save} disabled={saving} className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white disabled:opacity-60">
            {saving ? 'Guardando…' : 'Guardar cambios'}
          </button>
        </div>
      </div>
    </div>
  );
}
