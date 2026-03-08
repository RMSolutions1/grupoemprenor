'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
  overlay?: boolean;
}

export function HeroSection({
  title,
  subtitle,
  imageSrc = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
  imageAlt = 'Proyecto de ingeniería',
  ctaText = 'Conocer más',
  ctaHref = '/contacto',
  overlay = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-primary lg:min-h-[85vh]">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {overlay && (
          <div
            className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90"
            aria-hidden
          />
        )}
      </div>
      <div className="container-custom section-padding relative z-10 flex min-h-[70vh] flex-col justify-center text-white lg:min-h-[85vh]">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="heading-1 text-white">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-lg text-steel-200 sm:text-xl">
              {subtitle}
            </p>
          )}
          {ctaText && ctaHref && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition hover:bg-accent-light"
              >
                {ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
