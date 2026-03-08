'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, MAIN_NAV, SERVICIOS } from '@/lib/constants';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-steel-200 bg-primary text-white">
      <div className="container-custom mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">
              GRUPO <span className="text-accent">EMPRENOR</span>
            </h3>
            <p className="text-sm text-steel-300">
              {SITE_CONFIG.tagline} Soluciones integrales en construcción, instalaciones y servicios en el NOA.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Navegación
            </h4>
            <ul className="space-y-2">
              {MAIN_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-steel-300 transition hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/calculadora" className="text-sm text-steel-300 transition hover:text-accent">
                  Calcular presupuesto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Servicios
            </h4>
            <ul className="space-y-2">
              {SERVICIOS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-sm text-steel-300 transition hover:text-accent">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm text-steel-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-accent" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-accent">{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                <a href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`} className="hover:text-accent">{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-steel-700 pt-8 text-center text-sm text-steel-400">
          © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          {SITE_CONFIG.legalName && (
            <span className="mt-2 block">Razón social: {SITE_CONFIG.legalName} · CUIT {SITE_CONFIG.cuit}</span>
          )}
        </div>
      </div>
    </footer>
  );
}
