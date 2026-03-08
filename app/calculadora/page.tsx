import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Calculator, FileText, Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Calcular presupuesto',
  description:
    'Solicite una cotización gratuita para su proyecto de construcción, instalaciones o mantenimiento. Respuesta en menos de 24 horas.',
};

export default function CalculadoraPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-accent">
            <Calculator className="h-10 w-10" />
          </div>
        </div>
        <h1 className="mt-6 heading-1">Calcular presupuesto</h1>
        <p className="mt-4 text-lg text-steel-600">
          Soluciones constructivas integrales desde la fase inicial hasta la entrega llave en mano.
          Más de 15 años de experiencia en construcción residencial, comercial e industrial.
        </p>
        <p className="mt-2 text-steel-600">
          Complete el formulario de cotización y reciba una respuesta en menos de 24 horas, sin compromiso.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-light"
          >
            <FileText className="h-5 w-5" />
            Solicitar cotización gratuita
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            <Phone className="h-5 w-5" />
            Llamar: {SITE_CONFIG.phone}
          </a>
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-green-600 bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
        <p className="mt-8 text-sm text-steel-500">
          Cobertura en Salta, Jujuy, Tucumán y Formosa. Presupuestos detallados y transparentes, sin costos ocultos.
        </p>
      </div>
    </section>
  );
}
