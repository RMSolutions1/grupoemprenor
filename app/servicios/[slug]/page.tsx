import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { ALL_SERVICES } from '@/lib/all-services-data';
import {
  resolveServicioSlug,
  SERVICIO_PAGINA_EXTRA,
  SERVICIO_SLUG_ALIASES,
} from '@/lib/servicios-detalle-data';
import { SERVICIOS } from '@/lib/constants';
import { getServicioHeroImage, SERVICIO_BENEFIT_LINE } from '@/lib/service-assets';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = ALL_SERVICES.map((s) => s.slug);
  const aliasSlugs = Object.keys(SERVICIO_SLUG_ALIASES);
  return [...slugs, ...aliasSlugs].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const resolved = resolveServicioSlug(slug);
  const service = ALL_SERVICES.find((s) => s.slug === resolved);
  if (!service) return { title: 'Servicio' };
  const benefit = SERVICIO_BENEFIT_LINE[resolved];
  const description = benefit
    ? `${service.description} ${benefit}`
    : service.description;
  return {
    title: `${service.title} | EMPRENOR`,
    description: description.slice(0, 160),
    openGraph: {
      title: `${service.title} | EMPRENOR - Construcción e instalaciones NOA`,
      description: description.slice(0, 160),
    },
  };
}

export default async function ServicioSlugPage({ params }: Props) {
  const { slug } = await params;
  const resolved = resolveServicioSlug(slug);
  const service = ALL_SERVICES.find((s) => s.slug === resolved);
  if (!service) notFound();

  const division = SERVICIOS.find((d) => d.slug === service.divisionSlug);
  const extra = SERVICIO_PAGINA_EXTRA[resolved];

  const heroSubtitle = extra?.heroSubtitle ?? service.description;
  const heroImage = getServicioHeroImage(resolved);

  return (
    <>
      <HeroSection
        title={service.title}
        subtitle={heroSubtitle}
        imageSrc={heroImage.src}
        imageAlt={heroImage.alt}
        ctaText="Consultar proyecto"
        ctaHref="/contacto"
      />

      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-4xl">
          <p className="text-lg text-steel-600">{service.description}</p>
          {SERVICIO_BENEFIT_LINE[resolved] && (
            <p className="mt-4 rounded-lg border border-accent/20 bg-accent/5 px-4 py-3 text-steel-700">
              <strong className="text-primary">Por qué elegirnos:</strong>{' '}
              {SERVICIO_BENEFIT_LINE[resolved]}
            </p>
          )}
          {service.bullets.length > 0 && (
            <ul className="mt-8 space-y-2">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-steel-700">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {extra?.sections && extra.sections.length > 0 && (
        <section className="section-padding bg-steel-50">
          <div className="container-custom">
            {extra.sectionTitle && (
              <h2 className="heading-2 text-center">{extra.sectionTitle}</h2>
            )}
            {extra.sectionSubtitle && (
              <p className="mx-auto mt-2 max-w-2xl text-center text-steel-600">
                {extra.sectionSubtitle}
              </p>
            )}
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {extra.sections.map((sec) => (
                <div
                  key={sec.title}
                  className="rounded-xl border border-steel-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-primary">{sec.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {sec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-steel-600">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {extra?.experience && extra.experience.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-2 text-center">
              {extra.experienceTitle ?? 'Experiencia y ventajas'}
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {extra.experience.map((e) => (
                <div
                  key={e.title}
                  className="rounded-xl border border-steel-200 bg-steel-50/50 p-6 text-center"
                >
                  <h3 className="font-semibold text-primary">{e.title}</h3>
                  <p className="mt-2 text-sm text-steel-600">{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {extra?.industries && extra.industries.length > 0 && (
        <section className="section-padding bg-steel-50">
          <div className="container-custom">
            <h2 className="heading-2 text-center">
              {extra.industriesTitle ?? 'Sectores que atendemos'}
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {extra.industries.map((i) => (
                <div
                  key={i.title}
                  className="rounded-xl border border-steel-200 bg-white p-6 text-center"
                >
                  <h3 className="font-semibold text-primary">{i.title}</h3>
                  <p className="mt-2 text-sm text-steel-600">{i.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {extra?.guarantees && extra.guarantees.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-2 text-center">
              {extra.guaranteesTitle ?? 'Garantías y certificaciones'}
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {extra.guarantees.map((g) => (
                <div
                  key={g.title}
                  className="rounded-xl border border-steel-200 bg-steel-50/50 p-6 text-center"
                >
                  <h3 className="font-semibold text-primary">{g.title}</h3>
                  <p className="mt-2 text-sm text-steel-600">{g.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-primary text-white">
        <div className="container-custom flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="heading-2 text-white">
              {extra?.ctaTitle ?? '¿Listo para comenzar tu proyecto?'}
            </h2>
            <p className="mt-2 text-steel-200">
              {extra?.ctaSubtitle ?? 'Contáctanos y te respondemos en menos de 24 horas.'}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-light"
            >
              {extra?.ctaButtonText ?? 'Solicitar cotización'}
            </Link>
            {division && (
              <Link
                href={`/${service.divisionSlug}/servicios`}
                className="rounded-lg border border-white/50 px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Ver en {division.shortTitle}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
