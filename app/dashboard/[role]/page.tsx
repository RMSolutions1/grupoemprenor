import Link from 'next/link';

const ROLES = ['cliente', 'proveedor', 'empleado', 'empresa', 'administracion'];

export function generateStaticParams() {
  return ROLES.map((role) => ({ role }));
}

export default async function DashboardRolePage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;
  return (
    <div className="section-padding">
      <h1 className="heading-2">Panel {role}</h1>
      <p className="mt-2 text-steel-600">
        Este panel está en desarrollo. Solo el panel de Administración está disponible.
      </p>
      <Link
        href="/login"
        className="mt-6 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-light"
      >
        Volver al login
      </Link>
    </div>
  );
}
