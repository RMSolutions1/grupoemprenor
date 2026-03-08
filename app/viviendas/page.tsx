import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { VIVIENDAS_SERVICIOS, VIVIENDAS_MODELOS } from '@/lib/viviendas-data';

export default function ViviendasInicioPage() {
  return (
    <>
      <HeroSection
        title="Emprenor Viviendas"
        subtitle="Viviendas prefabricadas y modulares de alta calidad. Plazos cortos y precio cerrado."
        imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        imageAlt="Viviendas"
        ctaText="Solicitar cotización"
        ctaHref="/viviendas/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VIVIENDAS_SERVICIOS.map((s) => (
              <div key={s.title} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/viviendas/servicios" className="font-medium text-accent hover:underline">Ver todos los servicios →</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Modelos</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {VIVIENDAS_MODELOS.map((m) => (
              <div key={m.name} className="rounded-xl border border-steel-200 bg-white overflow-hidden shadow-sm">
                <div className="aspect-[4/3] bg-steel-100">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-primary">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{m.m2}</p>
                  <p className="mt-2 text-sm text-steel-600">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-steel-200 bg-steel-50/50 p-8 md:flex-row md:justify-between">
            <div>
              <h2 className="heading-3">¿Interesado en una vivienda modular?</h2>
              <p className="mt-2 text-steel-600">Solicite una cotización sin compromiso.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/viviendas/contacto" className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-light">Contacto</Link>
              <Link href="/viviendas/cotizacion" className="rounded-lg border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-white">Cotización</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
