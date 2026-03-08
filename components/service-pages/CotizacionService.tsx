'use client';

import { useState } from 'react';
import Link from 'next/link';

type CotizacionServiceProps = {
  slug: string;
  title: string;
  description: string;
  serviceOptions?: { value: string; label: string }[];
};

export function CotizacionService({
  slug,
  title,
  description,
  serviceOptions = [],
}: CotizacionServiceProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading-1">{title}</h1>
        <p className="mt-4 text-steel-600">{description}</p>
        {sent ? (
          <div className="mt-12 rounded-xl border border-steel-200 bg-steel-50/50 p-8 text-center">
            <p className="text-steel-700">Hemos recibido su solicitud. Nos pondremos en contacto a la brevedad.</p>
            <Link href={`/${slug}`} className="mt-6 inline-block font-medium text-accent hover:underline">Volver al inicio</Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-12 space-y-6 rounded-xl border border-steel-200 bg-white p-6 shadow-sm">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary">Nombre / Empresa *</label>
              <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary">Email *</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-primary">Teléfono</label>
              <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
            </div>
            {serviceOptions.length > 0 && (
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-primary">Tipo de servicio</label>
                <select id="service" name="service" className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent">
                  {serviceOptions.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary">Descripción del proyecto *</label>
              <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" placeholder="Describa brevemente el proyecto o necesidad." />
            </div>
            <button type="submit" className="w-full rounded-lg bg-accent px-4 py-3 font-medium text-white hover:bg-accent-light">Enviar solicitud</button>
          </form>
        )}
      </div>
    </section>
  );
}
