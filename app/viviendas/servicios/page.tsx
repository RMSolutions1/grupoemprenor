import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroSection } from '@/components/hero/HeroSection';
import { ImageGallery } from '@/components/gallery/ImageGallery';
import { VIVIENDAS_SERVICIOS, VIVIENDAS_PROCESO, VIVIENDAS_VENTAJAS, GALERIA_VIVIENDAS } from '@/lib/viviendas-data';

export const metadata: Metadata = {
  title: 'Servicios | Viviendas',
  description: 'Viviendas prefabricadas, modulares y proyectos habitacionales.',
};

export default function ViviendasServiciosPage() {
  return (
    <>
      <HeroSection
        title="Nuestros servicios"
        subtitle="Viviendas prefabricadas y modulares de alta calidad."
        imageSrc="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        imageAlt="Servicios"
        ctaText="Cotización"
        ctaHref="/viviendas/cotizacion"
      />
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Servicios</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {VIVIENDAS_SERVICIOS.map((s) => (
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
          <h2 className="heading-2">Proceso constructivo</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VIVIENDAS_PROCESO.map((p, i) => (
              <div key={p.step} className="rounded-xl border border-steel-200 bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mt-4 font-semibold text-primary">{p.step}</h3>
                <p className="mt-2 text-sm text-steel-600">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Ventajas</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VIVIENDAS_VENTAJAS.map((v) => (
              <div key={v.title} className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
                <h3 className="font-semibold text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-steel-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-padding bg-steel-50">
        <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-2">Galería</h2>
          <div className="mt-12">
            <ImageGallery images={GALERIA_VIVIENDAS} columns={3} />
          </div>
        </div>
      </section>
    </>
  );
}
