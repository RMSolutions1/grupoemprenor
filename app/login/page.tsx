'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogIn, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { setToken } from '@/lib/auth-client';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Error al iniciar sesión.');
        return;
      }
      if (json.token) setToken(json.token);
      const role = json.user?.role || 'cliente';
      if (role === 'administracion') router.push('/dashboard/admin');
      else router.push(`/dashboard/${role}`);
    } catch {
      setError('Error de conexión. Intente de nuevo.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-padding min-h-[70vh] bg-steel-50">
      <div className="container-custom max-w-md">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-steel-600 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al sitio
        </Link>

        <div className="rounded-2xl border border-steel-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-xl bg-primary p-2.5 text-white">
              <LogIn className="h-6 w-6" />
            </div>
            <div>
              <h1 className="heading-2">Iniciar sesión</h1>
              <p className="text-sm text-steel-500">
                {SITE_CONFIG.name} – Acceso único para todos los perfiles
              </p>
            </div>
          </div>

          <p className="mb-6 text-sm text-steel-600">
            Acceso único para <strong>Cliente</strong>, <strong>Proveedor</strong>, <strong>Empleado</strong>, <strong>Empresa</strong> o <strong>Administración</strong>. Será redirigido según su perfil.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary">
                Usuario o correo
              </label>
              <input
                id="email"
                type="text"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                placeholder="ejemplo@correo.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2.5 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>
            )}

            <p className="text-center text-sm text-steel-500">
              ¿Primera vez? <Link href="/login/setup" className="font-medium text-accent hover:underline">Crear administrador</Link>
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary px-4 py-3 font-medium text-white transition hover:bg-primary-light disabled:opacity-60"
            >
              {loading ? 'Entrando…' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
