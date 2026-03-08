'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
  columns?: 2 | 3 | 4;
}

export function ImageGallery({
  images,
  columns = 3,
}: ImageGalleryProps) {
  const gridClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 4
        ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`grid gap-4 ${gridClass}`}>
      {images.map((img, i) => (
        <motion.div
          key={img.src}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="relative aspect-[4/3] overflow-hidden rounded-lg bg-steel-100"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover transition hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      ))}
    </div>
  );
}
