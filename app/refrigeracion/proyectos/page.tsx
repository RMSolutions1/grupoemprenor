import type { Metadata } from 'next';
import Link from 'next/link';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { REFRIGERACION_PROYECTOS } from '@/lib/refrigeracion-data';

export const metadata: Metadata = {
  title: 'Proyectos | Refrigeración',
  description: 'Proyectos de refrigeración y HVAC.',
};

export default function RefrigeracionProyectosPage() {
  const projectItems = REFRIGERACION_PROYECTOS.map((p) => ({
    id: p.id,
    title: p.title,
    type: p.type,
    description: p.description,
    image: p.image,
    href: '#',
    category: p.category,
  }));

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading-1">Proyectos</h1>
        <p className="mt-4 max-w-2xl text-steel-600">Instalaciones de refrigeración y HVAC.</p>
        <div className="mt-12">
          <ProjectGallery projects={projectItems} columns={3} />
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/refrigeracion/cotizacion" className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:bg-accent-light">Solicitar cotización</Link>
          <Link href="/proyectos" className="rounded-lg border border-steel-300 px-5 py-2.5 font-medium text-steel-700 hover:bg-steel-50">Ver todos los proyectos del Grupo</Link>
        </div>
      </div>
    </section>
  );
}
