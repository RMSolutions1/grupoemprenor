import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { METODOLOGIA } from '@/lib/arquitectura-data';

export const metadata: Metadata = {
  title: 'Nosotros | Arquitectura y Construcción',
  description: 'Equipo y metodología de Emprenor Arquitectura y Construcción.',
};

export default function ArquitecturaNosotrosPage() {
  return (
    <>
      <HeroSection
        title="Nosotros"
        subtitle="Equipo y metodología de Arquitectura y Construcción."
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        imageAlt="Arquitectura"
        ctaText="Contactar"
        ctaHref="/arquitectura-construccion/contacto"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Sobre nosotros</h2>
          <p className="mt-4 max-w-3xl text-steel-600">
            Especialistas en diseño arquitectónico, construcción residencial, comercial, corporativa e industrial. Trabajamos con metodologías documentadas y plazos garantizados.
          </p>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Metodología constructiva</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {METODOLOGIA.map((m, i) => (
              <div key={m.step} className="rounded-xl border border-steel-200 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold text-primary">{m.step}</h3>
                <p className="mt-2 text-sm text-steel-600">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-primary text-white">
        <div className="container-custom mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="heading-2 text-white">¿Trabajamos juntos?</h2>
          <Link href="/arquitectura-construccion/contacto" className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 font-medium text-white hover:bg-accent-light">Contactar</Link>
        </div>
      </section>
    </>
  );
}
