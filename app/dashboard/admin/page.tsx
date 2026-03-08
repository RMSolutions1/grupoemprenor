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
        <div className="flex items-center gap-4 rounded-xl border border-steel-200 bg-steel-50 p-6 opacity-75">
          <div className="rounded-lg bg-steel-200 p-3">
            <FileText className="h-8 w-8 text-steel-500" />
          </div>
          <div>
            <h2 className="font-semibold text-steel-600">Solicitudes</h2>
            <p className="text-sm text-steel-500">Próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
