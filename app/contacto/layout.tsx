import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacte a ${SITE_CONFIG.name}. ${SITE_CONFIG.address}. Tel: ${SITE_CONFIG.phone}. WhatsApp y formulario de contacto.`,
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
