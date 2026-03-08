'use client';

import { HeroSection } from '@/components/hero/HeroSection';
import { ServiceCards } from '@/components/services/ServiceCards';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { CTASection } from '@/components/cta/CTASection';
import { TestimonialSection } from '@/components/testimonials/TestimonialSection';
import { FAQSection } from '@/components/faq/FAQSection';
import { InfoCard } from '@/components/cards/InfoCard';
import {
  HERO_IMAGE,
  STATS,
  FEATURED_PROJECTS,
  SECTORS,
  ADVANTAGES,
  WORK_PROCESS,
  TESTIMONIALS_HOME,
} from '@/lib/home-data';
import { FAQ_ITEMS } from '@/lib/faq-data';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  ClipboardList,
  FileText,
  HardHat,
  CheckCircle,
  Package,
  type LucideIcon,
} from 'lucide-react';

const PROCESS_ICONS: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  filetext: FileText,
  hardhat: HardHat,
  checkcircle: CheckCircle,
  package: Package,
};

export default function HomePage() {
  return (
    <>
      <HeroSection
        title={SITE_CONFIG.tagline}
        subtitle={SITE_CONFIG.description}
        imageSrc={HERO_IMAGE}
        imageAlt="Equipo EMPRENOR construyendo"
        ctaText="Solicitar cotización"
        ctaHref="/contacto"
      />

      {/* Números que respaldan nuestra experiencia */}
      <section className="border-b border-steel-200 bg-white py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-accent md:text-3xl">{s.value}</div>
                <div className="mt-1 text-sm text-steel-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentación Grupo Emprenor */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-2">Grupo Emprenor</h2>
            <p className="mt-4 text-lg text-steel-600">
              Somos líderes en construcción y servicios en el NOA. Ofrecemos soluciones
              integrales en construcción, remodelación, electricidad, plomería, instalaciones
              de gas, viviendas prefabricadas y obras industriales. Cobertura en Salta, Jujuy, Tucumán y Formosa.
            </p>
            <Link
              href="/nosotros"
              className="mt-6 inline-block font-medium text-accent hover:underline"
            >
              Conocer más sobre nosotros →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divisiones de la empresa */}
      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="heading-2">Nuestras divisiones</h2>
            <p className="mt-2 text-steel-600">
              Cada área cuenta con equipos especializados y metodologías probadas.
            </p>
          </motion.div>
          <div className="mt-12">
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* Servicios principales - resumen */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="heading-2">Servicios principales</h2>
            <p className="mt-2 text-steel-600">
              Arquitectura, construcción, ingeniería, refrigeración, viviendas y
              soluciones eléctricas e integrales.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              title="Arquitectura y construcción"
              description="Diseño y ejecución de obras residenciales, comerciales e industriales."
              iconName="building"
              delay={0}
            />
            <InfoCard
              title="Ingeniería"
              description="Civil, estructural, industrial y supervisión técnica."
              iconName="zap"
              delay={0.05}
            />
            <InfoCard
              title="Refrigeración y HVAC"
              description="Sistemas de climatización para todos los sectores."
              iconName="target"
              delay={0.1}
            />
            <InfoCard
              title="Viviendas modulares"
              description="Viviendas prefabricadas de alta calidad y plazos cortos."
              iconName="building"
              delay={0.15}
            />
          </div>
        </div>
      </section>

      {/* Proyectos destacados */}
      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div>
              <h2 className="heading-2">Proyectos destacados</h2>
              <p className="mt-2 text-steel-600">
                Algunas de nuestras obras más representativas.
              </p>
            </div>
            <Link
              href="/proyectos"
              className="rounded-lg border border-primary px-4 py-2 font-medium text-primary transition hover:bg-primary hover:text-white"
            >
              Ver todos los proyectos
            </Link>
          </motion.div>
          <div className="mt-12">
            <ProjectGallery projects={FEATURED_PROJECTS} />
          </div>
        </div>
      </section>

      {/* Sectores industriales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="heading-2">Sectores que atendemos</h2>
            <p className="mt-2 text-steel-600">
              Experiencia en múltiples industrias y tipos de proyecto.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SECTORS.map((s, i) => (
              <InfoCard
                key={s.title}
                title={s.title}
                description={s.description}
                iconName={'iconName' in s ? s.iconName : undefined}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas competitivas */}
      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="heading-2">Ventajas competitivas</h2>
            <p className="mt-2 text-steel-600">
              Por qué elegir Grupo Emprenor para sus proyectos.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((a, i) => (
              <InfoCard
                key={a.title}
                title={a.title}
                description={a.description}
                iconName={a.iconName}
                delay={i * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="heading-2">Nuestro proceso de trabajo</h2>
            <p className="mt-2 text-steel-600">
              Metodología clara desde la consulta hasta la entrega.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {WORK_PROCESS.map((p, i) => {
              const ProcessIcon = 'iconName' in p && p.iconName ? PROCESS_ICONS[p.iconName] : null;
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-xl border border-steel-200 bg-steel-50/50 p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                      {p.step}
                    </span>
                    {ProcessIcon && (
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <ProcessIcon className="h-5 w-5" />
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-semibold text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-steel-600">{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <TestimonialSection testimonials={TESTIMONIALS_HOME} />

      {/* Emergencia 24/7 */}
      <section className="section-padding bg-amber-50 border-y border-amber-200">
        <div className="container-custom flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="heading-3 text-steel-800">¿Emergencia eléctrica o de instalaciones?</h2>
            <p className="mt-1 text-steel-600">
              Servicio de emergencia 24 horas, 7 días a la semana. Respuesta en menos de 2 horas.
            </p>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-medium text-white transition hover:bg-amber-600"
          >
            <Phone className="h-5 w-5" />
            Llamar: {SITE_CONFIG.phone}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={FAQ_ITEMS} />

      {/* CTA */}
      <CTASection
        title="¿Tiene un proyecto en mente?"
        description="Cuéntenos su idea y le presentamos una propuesta a medida."
        primaryLabel="Contactar"
        primaryHref="/contacto"
        secondaryLabel="Ver proyectos"
        secondaryHref="/proyectos"
      />

      {/* Contacto rápido */}
      <section className="section-padding bg-steel-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 rounded-2xl border border-steel-200 bg-white p-8 shadow-sm md:flex-row md:justify-between"
          >
            <div>
              <h2 className="heading-3">Contacto rápido</h2>
              <p className="mt-1 text-steel-600">
                Email, teléfono o WhatsApp. Estamos para ayudarle.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:bg-primary-light"
              >
                Formulario de contacto
              </Link>
              <Link
                href="/calculadora"
                className="inline-flex items-center rounded-lg border border-primary px-5 py-2.5 font-medium text-primary transition hover:bg-primary hover:text-white"
              >
                Calcular presupuesto
              </Link>
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-green-600 bg-green-600 px-5 py-2.5 font-medium text-white transition hover:bg-green-700"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
