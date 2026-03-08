/**
 * Imágenes e iconos por servicio para heroes, cards y SEO.
 * Imágenes: Unsplash (alta calidad, relacionadas con cada área).
 */

export const SERVICIO_HERO_IMAGES: Record<
  string,
  { src: string; alt: string }
> = {
  // Construcción y arquitectura
  'construccion-general':
    { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80', alt: 'Obra de construcción residencial y comercial, EMPRENOR' },
  remodelacion:
    { src: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1920&q=80', alt: 'Remodelación y renovación de espacios, EMPRENOR' },
  albanileria:
    { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1920&q=80', alt: 'Trabajos de albañilería profesional, EMPRENOR' },
  pintura:
    { src: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80', alt: 'Pintura y acabados profesionales, EMPRENOR' },
  // Eléctricas
  'instalaciones-electricas':
    { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80', alt: 'Instalaciones eléctricas industriales y tableros, EMPRENOR' },
  // Sanitarias / plomería
  'instalaciones-sanitarias':
    { src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=1920&q=80', alt: 'Instalaciones sanitarias y plomería integral, EMPRENOR' },
  // Gas
  'instalaciones-gas':
    { src: 'https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=1920&q=80', alt: 'Instalaciones de gas natural y envasado certificadas, EMPRENOR' },
  // Viviendas
  'viviendas-prefabricadas':
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80', alt: 'Viviendas prefabricadas y modulares, EMPRENOR' },
  'construccion-residencial':
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80', alt: 'Construcción residencial y viviendas, EMPRENOR' },
  // Industriales
  'obras-industriales':
    { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80', alt: 'Obras industriales y naves, EMPRENOR' },
  'proyectos-agropecuarios':
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=80', alt: 'Proyectos agropecuarios e infraestructura rural, EMPRENOR' },
  'construccion-industrial':
    { src: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80', alt: 'Construcción industrial y estructuras metálicas, EMPRENOR' },
  // Climatización
  climatizacion:
    { src: 'https://images.unsplash.com/photo-1631540917365-d84b363d4812?w=1920&q=80', alt: 'Climatización y HVAC industrial, EMPRENOR' },
  // Mantenimiento
  'mantenimiento-integral':
    { src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80', alt: 'Mantenimiento integral y reparaciones 24/7, EMPRENOR' },
  'servicios-especializados':
    { src: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=1920&q=80', alt: 'Servicios especializados de instalaciones, EMPRENOR' },
  // Obras institucionales y viales
  'construccion-hospitales':
    { src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80', alt: 'Construcción de hospitales y centros de salud, EMPRENOR' },
  'construccion-escuelas':
    { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80', alt: 'Construcción de escuelas e instituciones educativas, EMPRENOR' },
  'construccion-laboratorios':
    { src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80', alt: 'Construcción de laboratorios, EMPRENOR' },
  'barrios-privados-urbanizaciones':
    { src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80', alt: 'Barrios privados y urbanizaciones, EMPRENOR' },
  'obras-viales-pavimentos':
    { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80', alt: 'Obras viales y pavimentos, EMPRENOR' },
  'alumbrado-publico':
    { src: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=1920&q=80', alt: 'Alumbrado público e iluminación urbana, EMPRENOR' },
  'urbanismo-desarrollo-urbano':
    { src: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1920&q=80', alt: 'Urbanismo y desarrollo urbano, EMPRENOR' },
};

/** Icono Lucide por slug de servicio (para cards y detalle) */
export const SERVICIO_ICON_NAMES: Record<string, string> = {
  'construccion-general': 'building',
  remodelacion: 'paintbucket',
  albanileria: 'hammer',
  pintura: 'paintbrush',
  'instalaciones-electricas': 'zap',
  'instalaciones-sanitarias': 'droplets',
  'instalaciones-gas': 'flame',
  'viviendas-prefabricadas': 'home',
  'construccion-residencial': 'building',
  'obras-industriales': 'factory',
  'proyectos-agropecuarios': 'tractor',
  'construccion-industrial': 'warehouse',
  climatizacion: 'snowflake',
  'mantenimiento-integral': 'wrench',
  'servicios-especializados': 'settings',
  'construccion-hospitales': 'building',
  'construccion-escuelas': 'building',
  'construccion-laboratorios': 'flaskconical',
  'barrios-privados-urbanizaciones': 'home',
  'obras-viales-pavimentos': 'route',
  'alumbrado-publico': 'lightbulb',
  'urbanismo-desarrollo-urbano': 'map',
};

const DEFAULT_HERO = {
  src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
  alt: 'Servicios de ingeniería y construcción, EMPRENOR',
};

export function getServicioHeroImage(slug: string): { src: string; alt: string } {
  return SERVICIO_HERO_IMAGES[slug] ?? DEFAULT_HERO;
}

export function getServicioIconName(slug: string): string {
  return SERVICIO_ICON_NAMES[slug] ?? 'briefcase';
}

/** Una línea de beneficio/por qué elegirnos por servicio (para convencer al cliente) */
export const SERVICIO_BENEFIT_LINE: Record<string, string> = {
  'construccion-general':
    'Trabajamos con plazos y presupuestos acordados. Materiales de primera y garantía en mano de obra.',
  remodelacion:
    'Minimizamos molestias y plazos. Diseño y ejecución en una sola mano para que su espacio quede listo sin sorpresas.',
  albanileria:
    'Albañilería de calidad con materiales certificados. Desde pequeños arreglos hasta obras de envergadura.',
  pintura:
    'Acabados profesionales que duran. Pinturas de primeras marcas y aplicación por personal capacitado.',
  'instalaciones-electricas':
    'Ingenieros matriculados y normativas al día. Su instalación queda certificada y con garantía documentada.',
  'instalaciones-sanitarias':
    'Materiales de primera y garantía extendida. Instalaciones que cumplen normativa y evitan futuros problemas.',
  'instalaciones-gas':
    'Gasistas matriculados y certificación NAG-200. Seguridad y documentación para su tranquilidad.',
  'viviendas-prefabricadas':
    'Entrega en 60-90 días con financiación disponible. Calidad estructural y eficiencia energética.',
  'construccion-residencial':
    'Desde la casa propia hasta edificios. Proyectos a medida con seguimiento y garantía.',
  'obras-industriales':
    'Gestión integral llave en mano. Su planta en marcha con todas las instalaciones y habilitaciones.',
  'proyectos-agropecuarios':
    'Conocemos el campo. Infraestructura resistente y plazos adaptados a la actividad rural.',
  'construccion-industrial':
    'Estructuras metálicas y cimentaciones especializadas. Un solo responsable desde el proyecto hasta la entrega.',
  climatizacion:
    'Sistemas eficientes y mantenimiento preventivo. Clima confortable en industria, comercio y hogar.',
  'mantenimiento-integral':
    'Un solo proveedor para todas sus instalaciones. Respuesta 24/7 y protocolos que evitan paradas costosas.',
  'servicios-especializados':
    'Electricidad, gas, agua, aire y terminaciones. Atención coordinada y presupuesto único.',
  'construccion-hospitales':
    'Experiencia en obras sanitarias con normativas al día. Instalaciones especializadas y plazos cumplidos.',
  'construccion-escuelas':
    'Edificios educativos con instalaciones completas y accesibilidad. Trabajamos con municipios y privados.',
  'construccion-laboratorios':
    'Salas limpias y ambientes controlados según normativa. Un solo responsable desde el proyecto hasta la puesta en marcha.',
  'barrios-privados-urbanizaciones':
    'Infraestructura completa para su emprendimiento: redes, pavimentos y construcción. Experiencia en desarrollos del NOA.',
  'obras-viales-pavimentos':
    'Pavimentación y obras viales con flota y equipos propios. Para municipios, provincias y accesos privados.',
  'alumbrado-publico':
    'Proyectos de iluminación LED con eficiencia energética. Desde el diseño hasta la puesta en marcha con normativa municipal.',
  'urbanismo-desarrollo-urbano':
    'Trazado, redes y coordinación con organismos. Su urbanización o plan de vivienda con un solo proveedor.',
};

/** Imágenes por división (mini-webs) para cards en Home y listados */
export const DIVISION_HERO_IMAGES: Record<string, { src: string; alt: string }> = {
  'arquitectura-construccion': {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    alt: 'Arquitectura y construcción, EMPRENOR',
  },
  ingenieria: {
    src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    alt: 'Ingeniería y proyectos, EMPRENOR',
  },
  refrigeracion: {
    src: 'https://images.unsplash.com/photo-1631540917365-d84b363d4812?w=800&q=80',
    alt: 'Refrigeración y climatización, EMPRENOR',
  },
  viviendas: {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Viviendas prefabricadas, EMPRENOR',
  },
  'solucion-integral': {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    alt: 'Mantenimiento integral, EMPRENOR',
  },
  'soluciones-electricas': {
    src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    alt: 'Instalaciones eléctricas, EMPRENOR',
  },
};

export function getDivisionImage(slug: string): { src: string; alt: string } | null {
  return DIVISION_HERO_IMAGES[slug] ?? null;
}
