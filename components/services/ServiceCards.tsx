'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  Cog,
  Snowflake,
  Home,
  Wrench,
  Zap,
  LucideIcon,
} from 'lucide-react';
import { SERVICIOS } from '@/lib/constants';
import { getDivisionImage } from '@/lib/service-assets';

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  engineering: Cog,
  snowflake: Snowflake,
  home: Home,
  wrench: Wrench,
  zap: Zap,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export function ServiceCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {SERVICIOS.map((s) => {
        const Icon = iconMap[s.icon] ?? Building2;
        const divisionImage = getDivisionImage(s.slug);
        return (
          <motion.div key={s.slug} variants={item}>
            <Link
              href={`/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm transition hover:border-accent/30 hover:shadow-md"
            >
              {divisionImage && (
                <div className="relative h-36 w-full shrink-0 bg-steel-100">
                  <Image
                    src={divisionImage.src}
                    alt={divisionImage.alt}
                    fill
                    className="object-cover transition group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/90 text-primary shadow">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                {!divisionImage && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                )}
                <h3 className="font-semibold text-primary group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-steel-600">{s.description}</p>
                <span className="mt-4 text-sm font-medium text-accent">
                  Ver más →
                </span>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
