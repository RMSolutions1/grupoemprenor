import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import {
  REFRIGERACION_SERVICIOS,
  REFRIGERACION_TIPOS,
  REFRIGERACION_MANTENIMIENTO,
  REFRIGERACION_EFICIENCIA,
  REFRIGERACION_PROYECTOS,
  GALERIA_REFRIGERACION,
} from '@/lib/refrigeracion-data';

export const metadata: Metadata = {
  title: 'Servicios | Refrigeración',
  description: 'Refrigeración residencial, comercial, industrial, HVAC y mantenimiento.',
};

export default function RefrigeracionServiciosPage() {
  const projectItems = REFRIGERACION_PROYECTOS.map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    description: p.description,
    image: p.image,
    href: '/refrigeracion/proyectos',
    category: p.category,
  }));

  return (
    <>
      <HeroSection
        title="Nuestros servicios"
        subtitle="Refrigeración y climatización para todos los sectores."
        imageSrc="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
        imageAlt="Servicios"
        ctaText="Cotización"
        ctaHref="/refrigeracion/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REFRIGERACION_SERVICIOS.map((s) => (
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
          <h2 className="heading-2">Tipos de sistemas</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {REFRIGERACION_TIPOS.map((t) => (
              <div key={t.title} className="rounded-xl border border-steel-200 bg-white p-6">
                <h3 className="font-semibold text-primary">{t.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Mantenimiento</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REFRIGERACION_MANTENIMIENTO.map((m, i) => (
              <div key={m.step} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold text-primary">{m.step}</h3>
                <p className="mt-2 text-sm text-steel-600">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Eficiencia energética</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {REFRIGERACION_EFICIENCIA.map((e) => (
              <div key={e.title} className="rounded-xl border border-steel-200 bg-white p-6">
                <h3 className="font-semibold text-primary">{e.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Proyectos</h2>
          <div className="mt-12">
            <ProjectGallery projects={projectItems} columns={3} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/refrigeracion/proyectos" className="rounded-lg border border-primary px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white">Ver todos</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Galería</h2>
          <div className="mt-12">
            <ImageGallery images={GALERIA_REFRIGERACION} columns={4} />
          </div>
        </div>
      </section>
    </>
  );
}
