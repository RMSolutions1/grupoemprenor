/**
 * Datos corporativos reales de EMPRENOR
 * Fuentes: emprenor.com, v0-emprenor-original.vercel.app, emprenorcyscorporations.vercel.app
 */

export const SITE_CONFIG = {
  name: 'EMPRENOR',
  legalName: 'RM INTERNATIONAL GROUP SAS',
  tagline: 'Construimos tus sueños con excelencia y profesionalismo',
  description:
    'Más de 15 años de experiencia en construcción y servicios en el NOA. Soluciones integrales: construcción, remodelación, instalaciones eléctricas, sanitarias y de gas; viviendas prefabricadas; obras industriales, hospitales, escuelas, laboratorios; barrios privados y urbanizaciones; obras viales, pavimentos, asfaltos y alumbrado público. Cobertura en Salta, Jujuy, Tucumán y Formosa.',
  url: 'https://www.emprenor.com',
  cuit: '30-71603601-0',
  /** Email principal */
  email: 'info@emprenor.com.ar',
  emailAlt: 'info@emprenor.com',
  /** Teléfono principal y emergencias 24/7 */
  phone: '+54 9 11 2758-6521',
  phoneRaw: '5491127586521',
  whatsapp: '5491127586521',
  whatsappUrl: 'https://wa.me/5491127586521',
  /** Horario */
  schedule: 'Lun-Vie: 8:00-18:00 | Sáb: 9:00-13:00',
  emergency: 'Emergencias 24/7',
  /** Sede principal para mostrar por defecto */
  address: 'Ituzaingó 920, Salta Capital, Argentina',
} as const;

/** Oficinas y sedes de EMPRENOR */
export const OFFICES = [
  {
    city: 'Salta Capital',
    address: 'Ituzaingó 920',
    zip: 'CP 4400',
    phone: '+54 9 11 2758-6521',
  },
  {
    city: 'Tartagal, Salta',
    address: 'Ituzaingó 1279',
    zip: 'CP 4560',
    phone: '+54 9 11 2758-6521',
  },
  {
    city: 'Campamento Vespucio, Salta',
    address: 'Av. Casiano Casas S/N',
    zip: '',
    phone: '+54 9 387 352-2920',
  },
  {
    city: 'San Miguel de Tucumán',
    address: 'San Martín de Porres 1040',
    zip: 'Tucumán, Argentina',
    phone: '+54 9 11 2758-6521',
  },
  {
    city: 'CABA',
    address: 'Maipú 566',
    zip: 'CP 1606',
    phone: '+54 9 11 2758-6521',
  },
] as const;

/** Navegación del sitio principal */
export const MAIN_NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/servicios', label: 'Servicios' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/blog', label: 'Blog' },
  { href: '/contacto', label: 'Contacto' },
] as const;

export const NAV_LINKS = MAIN_NAV;

/** Servicios / soluciones: cada uno tiene su propia mini-web. Descripciones orientadas a beneficios y SEO. */
export const SERVICIOS = [
  {
    slug: 'arquitectura-construccion',
    title: 'Arquitectura y Construcción',
    shortTitle: 'Arquitectura',
    description:
      'Construcción de viviendas, edificios comerciales e industriales con los más altos estándares. Diseño y ejecución llave en mano con garantía de calidad y plazos cumplidos.',
    icon: 'building',
  },
  {
    slug: 'ingenieria',
    title: 'Ingeniería',
    shortTitle: 'Ingeniería',
    description:
      'Proyectos residenciales, comerciales e industriales llave en mano. Estructuras metálicas y hormigón. Cálculo estructural, direcciones de obra y supervisión técnica por profesionales matriculados.',
    icon: 'engineering',
  },
  {
    slug: 'refrigeracion',
    title: 'Refrigeración y Climatización',
    shortTitle: 'Climatización',
    description:
      'Aire acondicionado central y split, ventilación industrial, sistemas VRV y mantenimiento preventivo. Soluciones HVAC para industria, comercio y hogar con eficiencia energética.',
    icon: 'snowflake',
  },
  {
    slug: 'viviendas',
    title: 'Viviendas Prefabricadas',
    shortTitle: 'Viviendas',
    description:
      'Casas modulares de alta calidad. Construcción en 60-90 días. Diseños personalizados, eficiencia energética y financiación disponible. Ideal para vivienda definitiva o ampliación.',
    icon: 'home',
  },
  {
    slug: 'solucion-integral',
    title: 'Mantenimiento Integral',
    shortTitle: 'Mantenimiento',
    description:
      'Servicios preventivos y correctivos 24/7. Termografía, protocolos de medición y reparaciones de emergencia. Un solo proveedor para todas sus instalaciones.',
    icon: 'wrench',
  },
  {
    slug: 'soluciones-electricas',
    title: 'Instalaciones Eléctricas',
    shortTitle: 'Electricidad',
    description:
      'Subestaciones hasta 132kV, media y baja tensión. Normativas AEA 90364, IRAM 2071. Tableros, automatización e ingenieros matriculados para proyectos certificados.',
    icon: 'zap',
  },
] as const;

export const SERVICIO_SUB_NAV = (slug: string) => [
  { href: `/${slug}`, label: 'Inicio' },
  { href: `/${slug}/nosotros`, label: 'Nosotros' },
  { href: `/${slug}/servicios`, label: 'Servicios' },
  { href: `/${slug}/proyectos`, label: 'Proyectos' },
  { href: `/${slug}/contacto`, label: 'Contacto' },
  { href: `/${slug}/cotizacion`, label: 'Cotización' },
] as const;

export const SERVICIO_SLUGS = SERVICIOS.map((s) => s.slug);
export type ServicioSlug = (typeof SERVICIOS)[number]['slug'];
