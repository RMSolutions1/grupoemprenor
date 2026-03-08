import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { SERVICE_CONFIG } from '@/lib/service-config';

export const metadata: Metadata = {
  title: `${SERVICE_CONFIG.viviendas.title} | ${SITE_CONFIG.name}`,
  description: SERVICE_CONFIG.viviendas.description,
};

export default function ViviendasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
