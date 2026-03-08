import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import {
  ARQUITECTURA_SERVICIOS,
  METODOLOGIA,
  ARQUITECTURA_PROYECTOS,
  GALERIA_IMAGES,
} from '@/lib/arquitectura-data';

export const metadata: Metadata = {
  title: 'Servicios | Arquitectura y Construcción',
  description: 'Arquitectura, construcción residencial, comercial, industrial y remodelaciones.',
};

export default function ArquitecturaServiciosPage() {
  const projectItems = ARQUITECTURA_PROYECTOS.map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    description: p.description,
    image: p.image,
    href: '/arquitectura-construccion/proyectos',
    category: p.category,
  }));

  return (
    <>
      <HeroSection
        title="Nuestros servicios"
        subtitle="Desde el anteproyecto hasta la entrega de obra."
        imageSrc="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
        imageAlt="Servicios"
        ctaText="Cotización"
        ctaHref="/arquitectura-construccion/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ARQUITECTURA_SERVICIOS.map((s) => (
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
          <h2 className="heading-2">Metodología</h2>
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
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Proyectos</h2>
          <div className="mt-12">
            <ProjectGallery projects={projectItems} columns={4} />
          </div>
          <div className="mt-8 text-center">
            <Link href="/arquitectura-construccion/proyectos" className="rounded-lg border border-primary px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white">Ver todos</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Galería</h2>
          <div className="mt-12">
            <ImageGallery images={GALERIA_IMAGES} columns={3} />
          </div>
        </div>
      </section>
    </>
  );
}
