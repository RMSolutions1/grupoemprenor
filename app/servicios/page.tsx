import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICIOS } from '@/lib/constants';
import { ALL_SERVICES } from '@/lib/all-services-data';
import { getServicioHeroImage, getServicioIconName } from '@/lib/service-assets';
import {
  Building2,
  Cog,
  Snowflake,
  Home,
  Wrench,
  Zap,
  ArrowRight,
  Factory,
  Tractor,
  Warehouse,
  Flame,
  Droplets,
  Hammer,
  Paintbrush,
  PaintBucket,
  Settings,
  Briefcase,
  FlaskConical,
  Route,
  Lightbulb,
  Map,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  building: Building2,
  engineering: Cog,
  snowflake: Snowflake,
  home: Home,
  wrench: Wrench,
  zap: Zap,
  factory: Factory,
  tractor: Tractor,
  warehouse: Warehouse,
  flame: Flame,
  droplets: Droplets,
  hammer: Hammer,
  paintbucket: PaintBucket,
  paintbrush: Paintbrush,
  settings: Settings,
  briefcase: Briefcase,
  flaskconical: FlaskConical,
  route: Route,
  lightbulb: Lightbulb,
  map: Map,
};

export const metadata: Metadata = {
  title: 'Servicios de construcción e instalaciones | EMPRENOR',
  description:
    'Servicios integrales en el NOA: construcción, remodelación, albañilería, electricidad, plomería, pintura, viviendas prefabricadas, obras industriales, gas, climatización, proyectos agropecuarios y mantenimiento 24/7. Más de 15 años de experiencia. Salta, Jujuy, Tucumán, Formosa.',
  keywords: [
    'construcción',
    'remodelación',
    'instalaciones eléctricas',
    'plomería',
    'gas',
    'viviendas prefabricadas',
    'obras industriales',
    'climatización',
    'mantenimiento integral',
    'hospitales',
    'escuelas',
    'laboratorios',
    'barrios privados',
    'obras viales',
    'pavimentos',
    'asfaltos',
    'alumbrado público',
    'urbanismo',
    'EMPRENOR',
    'NOA',
  ],
  openGraph: {
    title: 'Servicios | EMPRENOR - Construcción e instalaciones en el NOA',
    description:
      'Construcción, electricidad, plomería, gas, climatización, viviendas modulares y mantenimiento. Cobertura Salta, Jujuy, Tucumán, Formosa.',
  },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Hero y divisiones */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="heading-1">Servicios y soluciones</h1>
            <p className="mt-4 text-lg text-steel-600">
              Cada área cuenta con su propia unidad de negocio, equipos especializados y atención dedicada. Desde la obra gruesa hasta las instalaciones finales: un solo proveedor de confianza en el NOA.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((s) => {
              const Icon = iconMap[s.icon] ?? Building2;
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-steel-200 bg-white p-8 shadow-sm transition hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-accent transition group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 text-xl font-semibold text-primary group-hover:text-accent">
                    {s.title}
                  </h2>
                  <p className="mt-3 flex-1 text-steel-600">
                    {s.description}
                  </p>
                  <span className="mt-6 text-sm font-medium text-accent">
                    Ver más →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Listado completo de servicios (todas las webs) */}
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-2">Todos nuestros servicios</h2>
            <p className="mt-2 text-steel-600">
              Amplia gama de construcción y mantenimiento para satisfacer todas tus necesidades. Presupuestos sin compromiso y cobertura en Salta, Jujuy, Tucumán y Formosa.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALL_SERVICES.map((s) => {
              const cardImage = getServicioHeroImage(s.slug);
              const iconName = getServicioIconName(s.slug);
              const IconComponent = iconMap[iconName] ?? Briefcase;
              return (
              <div
                key={s.slug}
                className="flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative h-40 w-full shrink-0 bg-steel-100">
                  <Image
                    src={cardImage.src}
                    alt={cardImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-primary shadow">
                    <IconComponent className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                <h3 className="font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
                {s.bullets.length > 0 && (
                  <ul className="mt-4 space-y-1 text-sm text-steel-600">
                    {s.bullets.slice(0, 4).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                    {s.bullets.length > 4 && (
                      <li className="text-steel-500">+{s.bullets.length - 4} más</li>
                    )}
                  </ul>
                )}
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    Ver detalle
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={`/${s.divisionSlug}/servicios`}
                    className="inline-flex items-center gap-1 text-sm text-steel-500 hover:text-primary hover:underline"
                  >
                    Ver en {SERVICIOS.find((d) => d.slug === s.divisionSlug)?.shortTitle ?? s.divisionSlug}
                  </Link>
                </div>
                </div>
              </div>
            );
            })}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-light"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/contacto"
              className="rounded-lg border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Consultar proyecto personalizado
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
