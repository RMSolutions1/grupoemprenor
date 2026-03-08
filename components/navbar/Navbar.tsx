'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { MAIN_NAV, SERVICIOS, SERVICIO_SUB_NAV, SERVICIO_SLUGS, type ServicioSlug } from '@/lib/constants';

function getServicioFromPath(pathname: string): ServicioSlug | null {
  const segment = pathname.split('/')[1] || '';
  return (SERVICIO_SLUGS as readonly string[]).includes(segment) ? (segment as ServicioSlug) : null;
}

export function Navbar() {
  const pathname = usePathname();
  const servicioSlug = getServicioFromPath(pathname);
  const [open, setOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);

  const servicio = SERVICIOS.find((s) => s.slug === servicioSlug);
  const subNav = servicioSlug ? SERVICIO_SUB_NAV(servicioSlug) : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-steel-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container-custom mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-primary transition hover:text-accent lg:text-xl"
        >
          GRUPO <span className="text-accent">EMPRENOR</span>
          {servicio && (
            <span className="ml-2 hidden text-steel-500 lg:inline">
              / {servicio.shortTitle}
            </span>
          )}
        </Link>

        {/* Desktop: main nav or service sub-nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {subNav ? (
            <>
              {subNav.map((link) => {
                const isActive =
                  link.href === pathname ||
                  (link.href !== `/${servicioSlug}` && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive
                        ? 'bg-steel-100 text-primary'
                        : 'text-steel-700 hover:bg-steel-100 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/"
                className="ml-2 rounded-lg border border-steel-200 px-3 py-2 text-sm font-medium text-steel-600 transition hover:border-primary hover:text-primary"
              >
                Ver sitio principal
              </Link>
            </>
          ) : (
            <>
              {MAIN_NAV.map((link) => {
                if (link.href === '/servicios') {
                  return (
                    <div key={link.href} className="relative">
                      <button
                        type="button"
                        onClick={() => setServiciosOpen(!serviciosOpen)}
                        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-steel-700 transition hover:bg-steel-100 hover:text-primary"
                      >
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <AnimatePresence>
                        {serviciosOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            className="absolute right-0 top-full z-50 mt-1 w-72 rounded-xl border border-steel-200 bg-white py-2 shadow-lg"
                          >
                            <Link
                              href="/servicios"
                              className="block border-b border-steel-100 px-4 py-2.5 text-sm font-medium text-accent transition hover:bg-steel-50 hover:text-accent-dark"
                              onClick={() => setServiciosOpen(false)}
                            >
                              Ver todos los servicios
                            </Link>
                            <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-steel-400">
                              Divisiones
                            </p>
                            {SERVICIOS.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/${s.slug}`}
                                className="block px-4 py-2.5 text-sm text-steel-700 transition hover:bg-steel-50 hover:text-primary"
                                onClick={() => setServiciosOpen(false)}
                              >
                                {s.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                      isActive ? 'bg-steel-100 text-primary' : 'text-steel-700 hover:bg-steel-100 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </>
          )}
          <Link
            href="/login"
            className="ml-2 flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-light"
          >
            <LogIn className="h-4 w-4" />
            Iniciar sesión
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-lg bg-primary p-2 text-white hover:bg-primary-light lg:hidden"
            aria-label="Iniciar sesión"
          >
            <LogIn className="h-5 w-5" />
          </Link>
          <button
            type="button"
            aria-label="Abrir menú"
            className="rounded-lg p-2 text-primary hover:bg-steel-100 lg:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col border-l border-steel-200 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-16 items-center justify-between border-b px-4">
                <span className="font-bold text-primary">Menú</span>
                <button
                  type="button"
                  aria-label="Cerrar menú"
                  className="rounded p-2 hover:bg-steel-100"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4">
                {subNav ? (
                  <>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-steel-400">
                      {servicio?.title}
                    </p>
                    <ul className="space-y-1">
                      {subNav.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-lg px-3 py-3 text-steel-700 hover:bg-steel-100 hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/"
                      className="mt-4 block rounded-lg border border-steel-200 px-3 py-3 text-center text-sm font-medium text-steel-600"
                      onClick={() => setOpen(false)}
                    >
                      Sitio principal
                    </Link>
                    <Link
                      href="/login"
                      className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-white hover:bg-primary-light"
                      onClick={() => setOpen(false)}
                    >
                      <LogIn className="h-5 w-5" />
                      Iniciar sesión
                    </Link>
                  </>
                ) : (
                  <ul className="space-y-1">
                    {MAIN_NAV.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-3 text-steel-700 hover:bg-steel-100 hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-steel-100 pt-3">
                      <Link
                        href="/servicios"
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-accent hover:bg-steel-50"
                        onClick={() => setOpen(false)}
                      >
                        Ver todos los servicios
                      </Link>
                      <p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-steel-400">
                        Divisiones
                      </p>
                      {SERVICIOS.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          className="block rounded-lg px-4 py-2.5 text-sm text-steel-700 hover:bg-steel-100 hover:text-primary"
                          onClick={() => setOpen(false)}
                        >
                          {s.title}
                        </Link>
                      ))}
                    </li>
                    <li className="border-t border-steel-200 pt-4">
                      <Link
                        href="/login"
                        className="flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-medium text-white hover:bg-primary-light"
                        onClick={() => setOpen(false)}
                      >
                        <LogIn className="h-5 w-5" />
                        Iniciar sesión
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
