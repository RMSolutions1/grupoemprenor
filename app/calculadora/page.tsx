'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Calculator, FileText, Phone, MessageCircle } from 'lucide-react';

export default function CalculadoraPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      source: 'calculadora',
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value.trim(),
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value.trim(),
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.trim() || null,
      body: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim() || null,
      service_slug: (form.querySelector('[name="service"]') as HTMLSelectElement)?.value?.trim() || null,
    };
    if (!data.name || !data.email) {
      setError('Nombre y email son obligatorios.');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error || 'Error al enviar.');
        return;
      }
      setSent(true);
    } catch {
      setError('Error de conexión. Intente más tarde.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
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
          Complete el formulario y reciba una respuesta en menos de 24 horas, sin compromiso.
        </p>

        {sent ? (
          <div className="mt-10 rounded-xl bg-green-50 p-6 text-center">
            <p className="font-medium text-green-800">
              Solicitud enviada correctamente. Nos pondremos en contacto a la brevedad.
            </p>
            <Link href="/" className="mt-4 inline-block text-sm font-medium text-accent hover:underline">
              Volver al inicio
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4 text-left">
            {error && (
              <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-800">{error}</p>
            )}
            <div>
              <label htmlFor="calc-name" className="block text-sm font-medium text-steel-700">
                Nombre *
              </label>
              <input
                id="calc-name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2"
                placeholder="Su nombre"
              />
            </div>
            <div>
              <label htmlFor="calc-email" className="block text-sm font-medium text-steel-700">
                Email *
              </label>
              <input
                id="calc-email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="calc-phone" className="block text-sm font-medium text-steel-700">
                Teléfono
              </label>
              <input
                id="calc-phone"
                name="phone"
                type="tel"
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2"
                placeholder="+54 9..."
              />
            </div>
            <div>
              <label htmlFor="calc-service" className="block text-sm font-medium text-steel-700">
                Área de interés
              </label>
              <select
                id="calc-service"
                name="service"
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2"
              >
                <option value="">Seleccione una opción</option>
                <option value="arquitectura-construccion">Arquitectura y Construcción</option>
                <option value="ingenieria">Ingeniería</option>
                <option value="refrigeracion">Refrigeración y Climatización</option>
                <option value="viviendas">Viviendas Prefabricadas</option>
                <option value="solucion-integral">Mantenimiento Integral</option>
                <option value="soluciones-electricas">Instalaciones Eléctricas</option>
              </select>
            </div>
            <div>
              <label htmlFor="calc-message" className="block text-sm font-medium text-steel-700">
                Descripción del proyecto o consulta
              </label>
              <textarea
                id="calc-message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2"
                placeholder="Indique tipo de obra, ubicación aproximada, plazos deseados..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white transition hover:bg-primary-light disabled:opacity-70"
            >
              {loading ? 'Enviando…' : 'Enviar solicitud de cotización'}
            </button>
          </form>
        )}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-primary transition hover:bg-primary hover:text-white"
          >
            <FileText className="h-5 w-5" />
            Formulario de contacto
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-steel-300 px-6 py-3 font-medium text-steel-700 transition hover:bg-steel-100"
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
