import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { SERVICE_CONFIG } from '@/lib/service-config';

const config = SERVICE_CONFIG.refrigeracion;

export const metadata: Metadata = {
  title: `${config.title} | ${SITE_CONFIG.name}`,
  description: config.description,
};

export default function RefrigeracionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
