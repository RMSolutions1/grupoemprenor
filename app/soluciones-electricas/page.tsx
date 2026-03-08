import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { SOLUCIONES_ELECTRICAS_SERVICIOS, SOLUCIONES_ELECTRICAS_PROYECTOS } from '@/lib/soluciones-electricas-data';

export default function SolucionesElectricasInicioPage() {
  return (
    <>
      <HeroSection
        title="Emprenor Soluciones Eléctricas"
        subtitle="Instalaciones eléctricas de baja, media y alta tensión. Sistemas industriales y tableros."
        imageSrc="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
        imageAlt="Soluciones Eléctricas"
        ctaText="Solicitar cotización"
        ctaHref="/soluciones-electricas/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Nuestros servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUCIONES_ELECTRICAS_SERVICIOS.map((s) => (
              <div key={s.title} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/soluciones-electricas/servicios" className="font-medium text-accent hover:underline">Ver todos los servicios →</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="heading-2">Proyectos</h2>
              <p className="mt-2 text-steel-600">Instalaciones eléctricas realizadas.</p>
            </div>
            <Link href="/soluciones-electricas/proyectos" className="rounded-lg border border-primary px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white">Ver todos</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {SOLUCIONES_ELECTRICAS_PROYECTOS.map((p) => (
              <Link key={p.id} href="/soluciones-electricas/proyectos" className="group overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm">
                <div className="aspect-[4/3] bg-steel-100">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-accent">{p.type}</span>
                  <h3 className="mt-1 font-semibold text-primary">{p.title}</h3>
                  <p className="mt-1 text-sm text-steel-600 line-clamp-2">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-steel-200 bg-steel-50/50 p-8 md:flex-row md:justify-between">
            <div>
              <h2 className="heading-3">¿Necesita una instalación eléctrica?</h2>
              <p className="mt-2 text-steel-600">Contáctenos o solicite una cotización.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/soluciones-electricas/contacto" className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-light">Contacto</Link>
              <Link href="/soluciones-electricas/cotizacion" className="rounded-lg border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-white">Cotización</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
