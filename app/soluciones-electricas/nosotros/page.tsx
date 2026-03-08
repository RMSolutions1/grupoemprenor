import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';

export const metadata: Metadata = {
  title: 'Nosotros | Soluciones Eléctricas',
  description: 'Equipo y metodología de Emprenor Soluciones Eléctricas.',
};

export default function SolucionesElectricasNosotrosPage() {
  return (
    <>
      <HeroSection
        title="Nosotros"
        subtitle="Instalaciones eléctricas de baja, media y alta tensión."
        imageSrc="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
        imageAlt="Soluciones Eléctricas"
        ctaText="Contactar"
        ctaHref="/soluciones-eléctricas/contacto"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Sobre nosotros</h2>
          <p className="mt-4 max-w-3xl text-steel-600">
            Especialistas en instalaciones eléctricas, tableros y sistemas industriales.
          </p>
        </div>
      </section>
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="heading-2 text-white">¿Trabajamos juntos?</h2>
          <Link href="/soluciones-electricas/contacto" className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light">Contactar</Link>
        </div>
      </section>
    </>
  );
}
