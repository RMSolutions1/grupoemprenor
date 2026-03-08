import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description: `Acceso a ${SITE_CONFIG.name}: cliente, proveedor, empleado, empresa y administración.`,
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
