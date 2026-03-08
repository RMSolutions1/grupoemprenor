import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-center text-lg text-steel-600">
        La página que buscas no existe o fue movida.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-light"
        >
          <Home className="h-5 w-5" />
          Ir al inicio
        </Link>
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          Ver servicios
        </Link>
      </div>
    </div>
  );
}
