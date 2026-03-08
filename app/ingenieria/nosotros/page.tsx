import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { INGENIERIA_SECTORES, INGENIERIA_INNOVACION } from '@/lib/ingenieria-data';

export const metadata: Metadata = {
  title: 'Nosotros | Ingeniería',
  description: 'Equipo y metodología de Emprenor Ingeniería.',
};

export default function IngenieriaNosotrosPage() {
  return (
    <>
      <HeroSection
        title="Nosotros"
        subtitle="Equipo y metodología de Emprenor Ingeniería."
        imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
        imageAlt="Equipo de ingeniería"
        ctaText="Contactar"
        ctaHref="/ingenieria/contacto"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Sobre nosotros</h2>
          <p className="mt-4 max-w-3xl text-steel-600">
            Emprenor Ingeniería es la división especializada en proyectos de ingeniería civil, estructural, industrial y supervisión técnica.
          </p>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Sectores</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {INGENIERIA_SECTORES.map((s) => (
              <div key={s.title} className="rounded-xl border border-steel-200 bg-white p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Innovación</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {INGENIERIA_INNOVACION.map((i) => (
              <div key={i.title} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <h3 className="font-semibold text-primary">{i.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="heading-2 text-white">¿Trabajamos juntos?</h2>
          <Link href="/ingenieria/contacto" className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light">Contactar</Link>
        </div>
      </section>
    </>
  );
}
