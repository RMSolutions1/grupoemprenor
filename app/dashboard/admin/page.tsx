'use client';

import Link from 'next/link';
import { Mail, FileText } from 'lucide-react';

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="heading-2">Panel de administración</h1>
      <p className="mt-2 text-steel-600">
        Gestione contactos, solicitudes y contenido del sitio desde aquí.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/dashboard/admin/contactos"
          className="flex items-center gap-4 rounded-xl border border-steel-200 bg-white p-6 shadow-sm transition hover:border-accent hover:shadow"
        >
          <div className="rounded-lg bg-primary/10 p-3">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-primary">Contactos</h2>
            <p className="text-sm text-steel-500">Mensajes del formulario de contacto</p>
          </div>
        </Link>
        <Link
          href="/dashboard/admin/solicitudes"
          className="flex items-center gap-4 rounded-xl border border-steel-200 bg-white p-6 shadow-sm transition hover:border-accent hover:shadow"
        >
          <div className="rounded-lg bg-primary/10 p-3">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h2 className="font-semibold text-primary">Solicitudes</h2>
            <p className="text-sm text-steel-500">Cotizaciones y solicitudes desde calculadora y formularios</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
