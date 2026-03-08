'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'primary' | 'accent' | 'dark';
}

export function CTASection({
  title,
  description,
  primaryLabel = 'Contactar',
  primaryHref = '/contacto',
  secondaryLabel,
  secondaryHref,
  variant = 'primary',
}: CTASectionProps) {
  const bgClass =
    variant === 'accent'
      ? 'bg-accent'
      : variant === 'dark'
        ? 'bg-primary'
        : 'bg-primary';
  const textClass = 'text-white';

  return (
    <motion.section
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${bgClass} ${textClass} section-padding`}
    >
      <div className="container-custom flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="heading-2 text-white">{title}</h2>
          {description && (
            <p className="mt-2 text-steel-300">{description}</p>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primaryHref}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary transition hover:bg-steel-100"
          >
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center rounded-lg border border-white/50 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
}
