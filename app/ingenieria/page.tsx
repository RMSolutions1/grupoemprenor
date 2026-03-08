import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { INGENIERIA_SERVICIOS, INGENIERIA_PROYECTOS } from '@/lib/ingenieria-data';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80';

export default function IngenieriaInicioPage() {
  return (
    <>
      <HeroSection
        title="Emprenor Ingeniería"
        subtitle="Soluciones de ingeniería civil, estructural, industrial y supervisión técnica."
        imageSrc={HERO_IMAGE}
        imageAlt="Ingeniería"
        ctaText="Solicitar cotización"
        ctaHref="/ingenieria/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2">Nuestra especialidad</h2>
            <p className="mt-4 text-steel-600">
              Servicios integrales de ingeniería desde anteproyecto hasta supervisión en obra.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INGENIERIA_SERVICIOS.map((s) => (
              <div key={s.title} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/ingenieria/servicios" className="font-medium text-accent hover:underline">Ver todos los servicios →</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="heading-2">Proyectos recientes</h2>
              <p className="mt-2 text-steel-600">Algunos de nuestros trabajos en ingeniería.</p>
            </div>
            <Link href="/ingenieria/proyectos" className="rounded-lg border border-primary px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white">Ver todos</Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {INGENIERIA_PROYECTOS.map((p) => (
              <Link key={p.id} href="/ingenieria/proyectos" className="group overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm">
                <div className="aspect-[4/3] bg-steel-100">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition" />
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
              <h2 className="heading-3">¿Necesita ingeniería para su proyecto?</h2>
              <p className="mt-2 text-steel-600">Contáctenos o solicite una cotización sin compromiso.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/ingenieria/contacto" className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-light">Contacto</Link>
              <Link href="/ingenieria/cotizacion" className="rounded-lg border border-primary px-5 py-2.5 font-medium text-primary hover:bg-primary hover:text-white">Cotización</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
