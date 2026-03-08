import type { ServicioSlug } from './constants';

export const SERVICE_CONFIG: Record<
  ServicioSlug,
  { title: string; shortTitle: string; description: string }
> = {
  'arquitectura-construccion': {
    title: 'Arquitectura y Construcción',
    shortTitle: 'Arquitectura',
    description: 'Diseño, proyecto y ejecución de obras residenciales, comerciales e industriales.',
  },
  ingenieria: {
    title: 'Ingeniería',
    shortTitle: 'Ingeniería',
    description: 'Ingeniería civil, estructural, industrial y supervisión técnica.',
  },
  refrigeracion: {
    title: 'Refrigeración',
    shortTitle: 'Refrigeración',
    description: 'Sistemas de refrigeración y climatización para todos los sectores.',
  },
  viviendas: {
    title: 'Viviendas',
    shortTitle: 'Viviendas',
    description: 'Viviendas prefabricadas y modulares de alta calidad.',
  },
  'solucion-integral': {
    title: 'Solución Integral',
    shortTitle: 'Solución Integral',
    description: 'Mantenimiento integral, instalaciones y acabados.',
  },
  'soluciones-electricas': {
    title: 'Soluciones Eléctricas',
    shortTitle: 'Electricidad',
    description: 'Instalaciones eléctricas de baja, media y alta tensión.',
  },
};
