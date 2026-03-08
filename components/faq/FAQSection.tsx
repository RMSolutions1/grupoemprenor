'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { FAQItem } from './types';

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({
  items,
  title = 'Preguntas frecuentes',
  subtitle = 'Respuestas a las consultas más comunes sobre nuestros servicios.',
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="heading-2">{title}</h2>
          {subtitle && <p className="mt-2 text-steel-600">{subtitle}</p>}
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-2">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-steel-200 bg-steel-50/50 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenId(openId === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-primary transition hover:bg-steel-100/50"
                aria-expanded={openId === i}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${openId === i ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openId === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-steel-200 px-5 py-4 text-steel-600">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
