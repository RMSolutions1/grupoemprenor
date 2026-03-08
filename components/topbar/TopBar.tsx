'use client';

import { Phone, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export function TopBar() {
  return (
    <div className="border-b border-steel-200 bg-steel-100">
      <div className="container-custom mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm sm:px-6 lg:px-8">
        <span className="text-steel-600">
          {SITE_CONFIG.schedule} · <span className="font-semibold text-amber-700">{SITE_CONFIG.emergency}</span>
        </span>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-1.5 text-steel-700 transition hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {SITE_CONFIG.phone}
          </a>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-1.5 rounded bg-amber-500 px-3 py-1 font-medium text-white transition hover:bg-amber-600"
          >
            <AlertCircle className="h-4 w-4" />
            Emergencias
          </a>
        </div>
      </div>
    </div>
  );
}
