import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { SERVICE_CONFIG } from '@/lib/service-config';

export const metadata: Metadata = {
  title: `${SERVICE_CONFIG['soluciones-electricas'].title} | ${SITE_CONFIG.name}`,
  description: SERVICE_CONFIG['soluciones-electricas'].description,
};

export default function SolucionesElectricasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
