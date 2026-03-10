'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { LayoutDashboard, Mail, FileText, Briefcase, FolderKanban, Newspaper, Building2, Users, Settings, LogOut, Menu } from 'lucide-react';
import { getToken, clearToken } from '@/lib/auth-client';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const token = getToken();
    if (!token) {
      router.replace('/login');
      return;
    }
    fetch('/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      if (!res.ok) router.replace('/login');
      else {
        res.json().then((user) => {
          if (user.role !== 'administracion') router.replace('/login');
        });
      }
    }).catch(() => router.replace('/login'));
  }, [mounted, router]);

  function handleLogout() {
    clearToken();
    router.replace('/login');
  }

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-steel-50">
        <p className="text-steel-500">Cargando…</p>
      </div>
    );
  }

  const nav = [
    { href: '/dashboard/admin', label: 'Inicio', icon: LayoutDashboard },
    { href: '/dashboard/admin/contactos', label: 'Contactos', icon: Mail },
    { href: '/dashboard/admin/solicitudes', label: 'Solicitudes', icon: FileText },
    { href: '/dashboard/admin/servicios', label: 'Servicios', icon: Briefcase },
    { href: '/dashboard/admin/proyectos', label: 'Proyectos', icon: FolderKanban },
    { href: '/dashboard/admin/blog', label: 'Blog', icon: Newspaper },
    { href: '/dashboard/admin/oficinas', label: 'Oficinas', icon: Building2 },
    { href: '/dashboard/admin/usuarios', label: 'Usuarios', icon: Users },
    { href: '/dashboard/admin/configuracion', label: 'Configuración', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-steel-50">
      <header className="sticky top-0 z-40 border-b border-steel-200 bg-white">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6">
          <button
            type="button"
            onClick={() => setSidebarOpen((o) => !o)}
            className="rounded p-2 lg:hidden"
            aria-label="Menú"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="font-semibold text-primary">Admin</span>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-steel-600 hover:bg-steel-100"
          >
            <LogOut className="h-4 w-4" />
            Salir
          </button>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-56 border-r border-steel-200 bg-white pt-14 transition-transform lg:static lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-1 p-4">
            {nav.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? 'bg-primary text-white' : 'text-steel-700 hover:bg-steel-100'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
