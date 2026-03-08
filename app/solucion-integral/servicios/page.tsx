import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import { SOLUCION_INTEGRAL_SERVICIOS, SOLUCION_INTEGRAL_AREAS, SOLUCION_INTEGRAL_PROCESO, GALERIA_SOLUCION_INTEGRAL } from '@/lib/solucion-integral-data';

export const metadata: Metadata = {
  title: 'Servicios | Solución Integral',
  description: 'Mantenimiento integral, instalaciones y acabados.',
};

export default function SolucionIntegralServiciosPage() {
  return (
    <>
      <HeroSection
        title="Nuestros servicios"
        subtitle="Mantenimiento integral e instalaciones para edificios y plantas."
        imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd716?w=1920&q=80"
        imageAlt="Servicios"
        ctaText="Cotización"
        ctaHref="/solucion-integral/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUCION_INTEGRAL_SERVICIOS.map((s) => (
              <div key={s.title} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Áreas de actuación</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUCION_INTEGRAL_AREAS.map((a) => (
              <div key={a.title} className="rounded-xl border border-steel-200 bg-white p-6">
                <h3 className="font-semibold text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Proceso de trabajo</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SOLUCION_INTEGRAL_PROCESO.map((p, i) => (
              <div key={p.step} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold text-primary">{p.step}</h3>
                <p className="mt-2 text-sm text-steel-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Galería</h2>
          <div className="mt-12">
            <ImageGallery images={GALERIA_SOLUCION_INTEGRAL} columns={4} />
          </div>
        </div>
      </section>
    </>
  );
}
