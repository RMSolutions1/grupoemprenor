import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { SERVICE_CONFIG } from '@/lib/service-config';

const slug = 'arquitectura-construccion';
const config = SERVICE_CONFIG[slug];

export const metadata: Metadata = {
  title: `${config.title} | ${SITE_CONFIG.name}`,
  description: config.description,
};

export default function ArquitecturaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
