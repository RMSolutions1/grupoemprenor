'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

type ContactoServiceProps = {
  slug: string;
  title: string;
  description: string;
};

export function ContactoService({ slug, title, description }: ContactoServiceProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="heading-1">{title}</h1>
        <p className="mt-4 max-w-2xl text-steel-600">{description}</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-3">Datos de contacto</h2>
            <ul className="mt-6 space-y-4 text-steel-600">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-accent">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="hover:text-accent">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
            <h2 className="heading-3">Formulario</h2>
            {sent ? (
              <p className="mt-4 text-steel-600">Gracias por su mensaje. Nos pondremos en contacto a la brevedad.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary">Nombre *</label>
                  <input id="name" name="name" type="text" required className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary">Email *</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary">Mensaje *</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent" />
                </div>
                <button type="submit" className="w-full rounded-lg bg-accent px-4 py-3 font-medium text-white hover:bg-accent-light sm:w-auto">Enviar</button>
              </form>
            )}
          </div>
        </div>
        <div className="mt-12">
          <Link href={`/${slug}/cotizacion`} className="font-medium text-accent hover:underline">Solicitar cotización</Link>
        </div>
      </div>
    </section>
  );
}
