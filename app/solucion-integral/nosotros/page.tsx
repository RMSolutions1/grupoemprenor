import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';

export const metadata: Metadata = {
  title: 'Nosotros | Solución Integral',
  description: 'Equipo y metodología de Emprenor Solución Integral.',
};

export default function SolucionIntegralNosotrosPage() {
  return (
    <>
      <HeroSection
        title="Nosotros"
        subtitle="Mantenimiento integral e instalaciones."
        imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd716?w=1920&q=80"
        imageAlt="Solución Integral"
        ctaText="Contactar"
        ctaHref="/solucion-integral/contacto"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Sobre nosotros</h2>
          <p className="mt-4 max-w-3xl text-steel-600">
            Especialistas en mantenimiento integral, instalaciones eléctricas, sanitarias, de gas, remodelaciones y acabados.
          </p>
        </div>
      </section>
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="heading-2 text-white">¿Trabajamos juntos?</h2>
          <Link href="/solucion-integral/contacto" className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light">Contactar</Link>
        </div>
      </section>
    </>
  );
}
