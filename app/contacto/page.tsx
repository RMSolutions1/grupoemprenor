'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const form = e.currentTarget;
    const data = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement).value.trim(),
      email: (form.querySelector('[name="email"]') as HTMLInputElement).value.trim(),
      phone: (form.querySelector('[name="phone"]') as HTMLInputElement)?.value?.trim() || '',
      message: (form.querySelector('[name="message"]') as HTMLTextAreaElement).value.trim(),
    };
    try {
      const res = await fetch('/api/contacts', {
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
      <div className="container-custom">
        <h1 className="heading-1">Contacto</h1>
        <p className="mt-4 max-w-2xl text-steel-600">
          Complete el formulario o utilice los datos de contacto para comunicarse con nosotros.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-3">Datos de contacto</h2>
            <ul className="mt-6 space-y-4 text-steel-600">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-accent">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="hover:text-accent">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-steel-200 bg-steel-50/30 p-6">
            <h2 className="heading-3">Formulario</h2>
            {sent ? (
              <p className="mt-4 text-steel-600">
                Gracias por su mensaje. Nos pondremos en contacto a la brevedad.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                {error && (
                  <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800">{error}</p>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary">
                    Nombre *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary">
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 w-full rounded-lg border border-steel-300 px-3 py-2 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-accent px-4 py-3 font-medium text-white transition hover:bg-accent-light disabled:opacity-60 sm:w-auto"
                >
                  {loading ? 'Enviando…' : 'Enviar'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="heading-3">Mapa</h2>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl bg-steel-200">
            <iframe
              title="EMPRENOR - Ituzaingó 920, Salta Capital"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.478763992!2d-65.4097!3d-24.7886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc3b2512f063f%3A0x1e2f71e257965f60!2sItuzaing%C3%B3%20920%2C%20Salta!5e0!3m2!1ses!2sar!4v1630000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
