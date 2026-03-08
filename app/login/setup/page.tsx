'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, ArrowLeft } from 'lucide-react';

export default function SetupPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password, fullName: fullName.trim() }),
      });
      let json: { error?: string; success?: boolean } = {};
      try {
        json = await res.json();
      } catch {
        setError(res.ok ? 'Error inesperado.' : `Error del servidor (${res.status}). Compruebe la consola del servidor.`);
        return;
      }
      if (!res.ok) {
        setError(json.error || `Error al crear el administrador (${res.status}).`);
        return;
      }
      setSuccess(true);
      setTimeout(() => router.push('/login'), 2000);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error de conexión. ¿Está corriendo el servidor?');
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <section className="section-padding min-h-[70vh] bg-steel-50">
        <div className="container-custom max-w-md">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <p className="font-medium text-green-800">Administrador creado correctamente.</p>
            <p className="mt-2 text-sm text-green-700">Redirigiendo al login…</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding min-h-[70vh] bg-steel-50">
      <div className="container-custom max-w-md">
        <Link
          href="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-steel-600 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al login
        </Link>

        <div className="rounded-2xl border border-steel-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2.5 text-white">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h1 className="heading-2">Crear primer administrador</h1>
              <p className="text-sm text-steel-500">
                Solo disponible si aún no hay usuarios. Ejecute el SQL del proyecto antes.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-primary">
                Nombre
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="Administrador"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="admin@emprenor.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary">
                Contraseña *
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-white transition hover:bg-primary-light disabled:opacity-60"
            >
              {loading ? 'Creando…' : 'Crear administrador'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
