import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { InfoCard } from '@/components/cards/InfoCard';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import {
  GRUPO_EMPRENOR_SECTORES,
  GRUPO_EMPRENOR_EQUIPO,
  GRUPO_EMPRENOR_CERTIFICACIONES,
  GRUPO_EMPRENOR_IMAGENES,
} from '@/lib/grupo-emprenor-data';

export const metadata: Metadata = {
  title: 'Grupo Emprenor',
  description:
    'Conozca la historia, misión, visión y valores de Grupo Emprenor. Equipo profesional y sectores atendidos.',
};

export default function GrupoEmprenorPage() {
  return (
    <>
      <HeroSection
        title="Grupo Emprenor"
        subtitle="Ingeniería, construcción e innovación al servicio de su proyecto."
        imageSrc="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=1920&q=80"
        imageAlt="Grupo Emprenor"
        ctaText="Contactar"
        ctaHref="/contacto"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2">Quiénes somos</h2>
          <p className="mt-4 max-w-3xl text-steel-600">
            Grupo Emprenor es un conjunto de empresas especializadas que ofrecen
            soluciones integrales en ingeniería, arquitectura, construcción,
            refrigeración y servicios relacionados. Trabajamos para el sector
            industrial, comercial y residencial con un enfoque en calidad, plazos
            y eficiencia.
          </p>
        </div>
      </section>

      <section className="section-padding bg-steel-50">
        <div className="container-custom grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-2">Historia</h2>
            <p className="mt-4 text-steel-600">
              Nacidos de la experiencia en obra y el espíritu emprendedor, hemos
              crecido hasta integrar múltiples divisiones técnicas. Cada proyecto
              nos ha permitido consolidar metodologías y un equipo de primer
              nivel.
            </p>
          </div>
          <div>
            <h2 className="heading-2">Misión</h2>
            <p className="mt-4 text-steel-600">
              Brindar soluciones de ingeniería, construcción y servicios
              asociados con los más altos estándares de calidad, cumpliendo
              plazos y presupuestos, y generando valor para nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2">Visión y valores</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              title="Visión"
              description="Ser referentes en soluciones integrales de ingeniería y construcción en la región."
              iconName="eye"
            />
            <InfoCard
              title="Compromiso"
              description="Cumplimiento, transparencia y trato profesional en cada proyecto."
              iconName="heart"
            />
            <InfoCard
              title="Excelencia"
              description="Calidad técnica y mejora continua en procesos y resultados."
              iconName="award"
            />
            <InfoCard
              title="Equipo"
              description="Profesionales especializados y trabajo en equipo con el cliente."
              iconName="users"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <h2 className="heading-2">Equipo profesional</h2>
          <p className="mt-2 text-steel-600">
            Cada división cuenta con profesionales especializados y metodologías probadas.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GRUPO_EMPRENOR_EQUIPO.map((e) => (
              <div
                key={e.name}
                className="rounded-xl border border-steel-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-primary">{e.name}</h3>
                <p className="mt-2 text-sm text-steel-600">{e.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2">Sectores atendidos</h2>
          <p className="mt-2 text-steel-600">
            Industrial, comercial, residencial, agropecuario, salud, educación y obras públicas.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GRUPO_EMPRENOR_SECTORES.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-steel-200 bg-steel-50/30 p-6"
              >
                <h3 className="font-semibold text-primary">{s.name}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <h2 className="heading-2">Certificaciones</h2>
          <p className="mt-2 text-steel-600">
            Trabajamos bajo normativas y procedimientos de calidad documentados.
          </p>
          <ul className="mt-8 space-y-3">
            {GRUPO_EMPRENOR_CERTIFICACIONES.map((c) => (
              <li key={c} className="flex items-start gap-2 text-steel-700">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2">Imágenes</h2>
          <div className="mt-12">
            <ImageGallery images={GRUPO_EMPRENOR_IMAGENES} columns={4} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <h2 className="heading-2 text-white">¿Listo para su próximo proyecto?</h2>
          <Link
            href="/contacto"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-light"
          >
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}
