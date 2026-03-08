/** Servicios de Refrigeración y Climatización (v0-emprenor: climatización completa) */
export const REFRIGERACION_SERVICIOS = [
  {
    title: 'Aire acondicionado central y split',
    description: 'Instalación y mantenimiento de equipos split y centrales para todo tipo de espacios.',
  },
  {
    title: 'Ventilación industrial y extractores',
    description: 'Sistemas de ventilación para naves, plantas y ambientes industriales.',
  },
  {
    title: 'Calefacción radiante y por losa',
    description: 'Sistemas de calefacción por piso radiante y losa radiante.',
  },
  {
    title: 'Sistemas VRV y climatización inteligente',
    description: 'Sistemas VRV/VRF y control inteligente para máxima eficiencia.',
  },
  {
    title: 'Mantenimiento preventivo',
    description: 'Contratos de mantenimiento preventivo y correctivo. Mantenimiento programado.',
  },
  {
    title: 'Refrigeración comercial e industrial',
    description: 'Cámaras frigoríficas, cadena de frío para supermercados, restaurantes e industria.',
  },
  {
    title: 'Instalación HVAC',
    description: 'Sistemas de calefacción, ventilación y aire acondicionado integrales.',
  },
];

export const REFRIGERACION_TIPOS = [
  { title: 'Sistemas de expansión directa', description: 'Equipos compactos y eficientes para refrigeración y climatización.' },
  { title: 'Sistemas centralizados', description: 'Plantas de agua helada y distribución por aire.' },
  { title: 'Cadena de frío', description: 'Solución integral para conservación y logística en frío.' },
];

export const REFRIGERACION_MANTENIMIENTO = [
  { step: 'Diagnóstico', description: 'Revisión y medición de parámetros del sistema.' },
  { step: 'Limpieza y ajustes', description: 'Mantenimiento de filtros, serpentines y controles.' },
  { step: 'Carga de gas', description: 'Recarga y verificación de refrigerante cuando corresponde.' },
  { step: 'Documentación', description: 'Informe y planificación del próximo servicio.' },
];

export const REFRIGERACION_EFICIENCIA = [
  { title: 'Equipos de alta eficiencia', description: 'Selección de equipos con bajo consumo energético.' },
  { title: 'Control y automatización', description: 'Sistemas de control que optimizan el uso.' },
  { title: 'Aislación térmica', description: 'Asesoramiento en aislación para reducir cargas.' },
];

export const REFRIGERACION_PROYECTOS = [
  {
    id: 'ref1',
    title: 'Cámara frigorífica industrial',
    type: 'Refrigeración industrial',
    description: 'Cámara de -25°C para productos congelados, 500 m³.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    category: 'refrigeración',
  },
  {
    id: 'ref2',
    title: 'HVAC centro comercial',
    type: 'Climatización',
    description: 'Sistema centralizado para 15.000 m² de superficie.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80',
    category: 'refrigeración',
  },
  {
    id: 'ref3',
    title: 'Cadena de frío logística',
    type: 'Refrigeración comercial',
    description: 'Diseño e instalación de cadena de frío para distribución.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    category: 'refrigeración',
  },
];

export const GALERIA_REFRIGERACION = [
  { src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80', alt: 'Sistema de refrigeración' },
  { src: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80', alt: 'Aire acondicionado' },
  { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd716?w=800&q=80', alt: 'Instalación industrial' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80', alt: 'Equipos HVAC' },
];
