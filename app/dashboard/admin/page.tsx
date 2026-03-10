'use client';

import Link from 'next/link';
import { Mail, FileText, Briefcase, FolderKanban, Newspaper, Building2, Users, Settings } from 'lucide-react';

const cards = [
  { href: '/dashboard/admin/contactos', label: 'Contactos', desc: 'Mensajes del formulario de contacto', icon: Mail },
  { href: '/dashboard/admin/solicitudes', label: 'Solicitudes', desc: 'Cotizaciones y solicitudes', icon: FileText },
  { href: '/dashboard/admin/servicios', label: 'Servicios', desc: 'Servicios y divisiones del sitio', icon: Briefcase },
  { href: '/dashboard/admin/proyectos', label: 'Proyectos', desc: 'Portafolio de proyectos', icon: FolderKanban },
  { href: '/dashboard/admin/blog', label: 'Blog', desc: 'Artículos y noticias', icon: Newspaper },
  { href: '/dashboard/admin/oficinas', label: 'Oficinas', desc: 'Sedes y ubicaciones', icon: Building2 },
  { href: '/dashboard/admin/usuarios', label: 'Usuarios', desc: 'Usuarios y roles', icon: Users },
  { href: '/dashboard/admin/configuracion', label: 'Configuración', desc: 'Ajustes del sitio', icon: Settings },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="heading-2">Panel de administración</h1>
      <p className="mt-2 text-steel-600">
        Gestione contactos, solicitudes y contenido del sitio desde aquí.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 rounded-xl border border-steel-200 bg-white p-6 shadow-sm transition hover:border-accent hover:shadow"
            >
              <div className="rounded-lg bg-primary/10 p-3">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold text-primary">{item.label}</h2>
                <p className="text-sm text-steel-500">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
