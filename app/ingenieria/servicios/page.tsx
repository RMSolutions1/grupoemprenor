import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import {
  INGENIERIA_SERVICIOS,
  INGENIERIA_SECTORES,
  INGENIERIA_PROYECTOS,
  INGENIERIA_INNOVACION,
  GALERIA_INGENIERIA,
} from '@/lib/ingenieria-data';

export const metadata: Metadata = {
  title: 'Servicios | Ingeniería',
  description: 'Ingeniería civil, estructural, industrial y supervisión técnica.',
};

export default function IngenieriaServiciosPage() {
  const projectItems = INGENIERIA_PROYECTOS.map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    description: p.description,
    image: p.image,
    href: '/ingenieria/proyectos',
    category: p.category,
  }));

  return (
    <>
      <HeroSection
        title="Nuestros servicios"
        subtitle="Soluciones de ingeniería desde anteproyecto hasta supervisión en obra."
        imageSrc="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1920&q=80"
        imageAlt="Servicios de ingeniería"
        ctaText="Cotización"
        ctaHref="/ingenieria/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Soluciones de ingeniería</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INGENIERIA_SERVICIOS.map((s) => (
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
          <h2 className="heading-2">Proyectos</h2>
          <div className="mt-12">
            <ProjectGallery projects={projectItems} columns={3} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/ingenieria/proyectos" className="rounded-lg border border-primary px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white">
              Ver todos
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Innovación</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {INGENIERIA_INNOVACION.map((i) => (
              <div key={i.title} className="rounded-xl border border-steel-200 bg-white p-6">
                <h3 className="font-semibold text-primary">{i.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{i.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Galería</h2>
          <div className="mt-12">
            <ImageGallery images={GALERIA_INGENIERIA} columns={3} />
          </div>
        </div>
      </section>
    </>
  );
}
