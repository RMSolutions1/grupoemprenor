import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import {
  SOLUCIONES_ELECTRICAS_SERVICIOS,
  SOLUCIONES_ELECTRICAS_SECTORES,
  SOLUCIONES_ELECTRICAS_PROYECTOS,
  GALERIA_SOLUCIONES_ELECTRICAS,
} from '@/lib/soluciones-electricas-data';

export const metadata: Metadata = {
  title: 'Servicios | Soluciones Eléctricas',
  description: 'Instalaciones eléctricas de baja, media y alta tensión.',
};

export default function SolucionesElectricasServiciosPage() {
  const projectItems = SOLUCIONES_ELECTRICAS_PROYECTOS.map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    description: p.description,
    image: p.image,
    href: '/soluciones-electricas/proyectos',
    category: p.category,
  }));

  return (
    <>
      <HeroSection
        title="Nuestros servicios"
        subtitle="Instalaciones eléctricas para todos los sectores."
        imageSrc="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&q=80"
        imageAlt="Servicios"
        ctaText="Cotización"
        ctaHref="/soluciones-electricas/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUCIONES_ELECTRICAS_SERVICIOS.map((s) => (
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
            {SOLUCIONES_ELECTRICAS_SECTORES.map((s) => (
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
            <Link href="/soluciones-electricas/proyectos" className="rounded-lg border border-primary px-4 py-2 font-medium text-primary hover:bg-primary hover:text-white">Ver todos</Link>
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Galería</h2>
          <div className="mt-12">
            <ImageGallery images={GALERIA_SOLUCIONES_ELECTRICAS} columns={4} />
          </div>
        </div>
      </section>
    </>
  );
}
