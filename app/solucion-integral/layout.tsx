import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Solución Integral | ${SITE_CONFIG.name}`,
  description: 'Mantenimiento integral, instalaciones y acabados.',
};

export default function SolucionIntegralLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
