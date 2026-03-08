'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

export function TestimonialSection({
  testimonials,
  title = 'Lo que dicen nuestros clientes',
  subtitle,
}: TestimonialSectionProps) {
  return (
    <section className="section-padding bg-steel-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="heading-2">{title}</h2>
          {subtitle && (
            <p className="mt-2 text-steel-600">{subtitle}</p>
          )}
        </motion.div>
        <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-steel-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-10 w-10 text-accent/40" />
              <p className="mt-2 text-steel-700">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4">
                <cite className="not-italic font-semibold text-primary">
                  {t.author}
                </cite>
                <p className="text-sm text-steel-500">
                  {t.role}
                  {t.company && ` · ${t.company}`}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
