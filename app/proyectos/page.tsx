import type { Metadata } from 'next';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { FEATURED_PROJECTS } from '@/lib/home-data';
import { ARQUITECTURA_PROYECTOS } from '@/lib/arquitectura-data';
import { INGENIERIA_PROYECTOS } from '@/lib/ingenieria-data';
import { REFRIGERACION_PROYECTOS } from '@/lib/refrigeracion-data';
import { SOLUCIONES_ELECTRICAS_PROYECTOS } from '@/lib/soluciones-electricas-data';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Portafolio de proyectos de Grupo Emprenor: construcción, ingeniería, electricidad, refrigeración y viviendas.',
};

function toProjectItem(p: { id: string; title: string; type: string; description: string; image: string; category: string }) {
  return { id: p.id, title: p.title, type: p.type, description: p.description, image: p.image, href: '/proyectos', category: p.category };
}

const ALL_PROJECTS = [
  ...FEATURED_PROJECTS,
  ...ARQUITECTURA_PROYECTOS.map(toProjectItem),
  ...INGENIERIA_PROYECTOS.map(toProjectItem),
  ...REFRIGERACION_PROYECTOS.map(toProjectItem),
  ...SOLUCIONES_ELECTRICAS_PROYECTOS.map(toProjectItem),
];

export default function ProyectosPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h1 className="heading-1">Proyectos</h1>
        <p className="mt-4 max-w-2xl text-steel-600">
          Selección de obras y proyectos realizados por las divisiones de Grupo Emprenor.
        </p>
        <div className="mt-12">
          <ProjectGallery projects={ALL_PROJECTS} columns={3} />
        </div>
      </div>
    </section>
  );
}
