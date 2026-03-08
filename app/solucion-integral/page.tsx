import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { SOLUCION_INTEGRAL_SERVICIOS } from '@/lib/solucion-integral-data';

export default function SolucionIntegralInicioPage() {
  return (
    <>
      <HeroSection
        title="Emprenor Solución Integral"
        subtitle="Mantenimiento integral, instalaciones y acabados para edificios y plantas."
        imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd716?w=1920&q=80"
        imageAlt="Solución Integral"
        ctaText="Solicitar cotización"
        ctaHref="/solucion-integral/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Nuestros servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUCION_INTEGRAL_SERVICIOS.map((s) => (
              <div key={s.title} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/solucion-integral/servicios" className="font-medium text-accent hover:underline">Ver todos los servicios →</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-steel-200 bg-steel-50/50 p-8 md:flex-row md:justify-between">
            <div>
              <h2 className="heading-3">¿Necesita mantenimiento o instalaciones?</h2>
              <p className="mt-2 text-steel-600">Contáctenos o solicite una cotización.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/solucion-integral/contacto" className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-light">Contacto</Link>
              <Link href="/solucion-integral/cotizacion" className="rounded-lg border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-white">Cotización</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
