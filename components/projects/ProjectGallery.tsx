'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  href?: string;
  category: string;
}

interface ProjectGalleryProps {
  projects: ProjectItem[];
  columns?: 2 | 3 | 4;
}

export function ProjectGallery({
  projects,
  columns = 3,
}: ProjectGalleryProps) {
  const gridClass =
    columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : columns === 4
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-6 ${gridClass}`}>
      {projects.map((project, i) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group overflow-hidden rounded-xl border border-steel-200 bg-white shadow-sm transition hover:shadow-lg"
        >
          <Link href={project.href ?? '/proyectos'} className="block">
            <div className="relative aspect-[4/3] overflow-hidden bg-steel-100">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <span className="absolute left-3 top-3 rounded bg-primary/90 px-2 py-1 text-xs font-medium text-white">
                {project.type}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-primary group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-steel-600 line-clamp-2">
                {project.description}
              </p>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
