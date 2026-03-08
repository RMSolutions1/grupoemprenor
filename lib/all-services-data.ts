/**
 * Listado completo de servicios extraídos de:
 * - emprenor.com
 * - v0-emprenor-original.vercel.app
 * - emprenorcyscorporations.vercel.app
 * - v0-emprendor-construcciones-website.vercel.app
 * divisionSlug: enlace a la mini-web que atiende ese servicio.
 */
export interface ServicioDetalle {
  slug: string;
  title: string;
  description: string;
  bullets: string[];
  divisionSlug: string;
}

export const ALL_SERVICES: ServicioDetalle[] = [
  {
    slug: 'construccion-general',
    title: 'Construcción General',
    description:
      'Proyectos residenciales, comerciales e industriales llave en mano. Construcción de viviendas, edificios comerciales e industriales con los más altos estándares.',
    bullets: [
      'Viviendas unifamiliares y multifamiliares',
      'Edificios comerciales e industriales',
      'Ampliaciones y remodelaciones integrales',
      'Construcción en seco y tradicional',
      'Estructuras metálicas y hormigón',
      'Obras civiles llave en mano',
      'Albañilería especializada',
    ],
    divisionSlug: 'arquitectura-construccion',
  },
  {
    slug: 'remodelacion',
    title: 'Remodelación',
    description:
      'Transformamos espacios existentes en ambientes modernos y funcionales. Renovación integral actualizando diseño y funcionalidad.',
    bullets: [
      'Remodelación completa',
      'Diseño moderno',
      'Actualización de espacios',
      'Ampliaciones integrales',
    ],
    divisionSlug: 'arquitectura-construccion',
  },
  {
    slug: 'albanileria',
    title: 'Albañilería',
    description: 'Trabajos de albañilería profesional para todo tipo de proyectos. Mampostería, muros, pisos y acabados.',
    bullets: [
      'Mampostería tradicional',
      'Muros y cercos',
      'Pisos y revestimientos',
      'Acabados profesionales',
    ],
    divisionSlug: 'arquitectura-construccion',
  },
  {
    slug: 'pintura',
    title: 'Pintura',
    description: 'Acabados profesionales de pintura interior y exterior para hogares, comercios e industrias.',
    bullets: ['Pintura interior y exterior', 'Acabados y revestimientos', 'Tratamiento de superficies'],
    divisionSlug: 'arquitectura-construccion',
  },
  {
    slug: 'instalaciones-electricas',
    title: 'Instalaciones Eléctricas',
    description:
      'Proyectos eléctricos industriales y residenciales certificados. Media y baja tensión, cumpliendo normativas AEA 90364, IRAM 2071.',
    bullets: [
      'Subestaciones transformadoras hasta 132 kV',
      'Instalaciones de media y baja tensión',
      'Tableros eléctricos y de comando',
      'Sistemas de puesta a tierra (PAT)',
      'Automatización y control industrial',
    ],
    divisionSlug: 'soluciones-electricas',
  },
  {
    slug: 'instalaciones-sanitarias',
    title: 'Instalaciones Sanitarias / Plomería',
    description:
      'Sistemas de agua potable, cloacales y pluviales completos. Servicios de plomería desde instalaciones hasta reparaciones.',
    bullets: [
      'Redes de agua fría y caliente',
      'Desagües cloacales y pluviales',
      'Tratamiento de efluentes',
      'Sistemas de bombeo y cisterna',
      'Instalaciones para riego',
    ],
    divisionSlug: 'solucion-integral',
  },
  {
    slug: 'instalaciones-gas',
    title: 'Instalaciones de Gas',
    description:
      'Instalaciones de gas natural y envasado con matrícula habilitada. Certificado NAG-200. Instalaciones seguras y homologadas.',
    bullets: [
      'Gas natural domiciliario e industrial',
      'Conversión de sistemas GPL a gas natural',
      'Reguladores y medidores certificados',
      'Inspecciones y certificaciones',
      'Sistemas de detección de fugas',
    ],
    divisionSlug: 'solucion-integral',
  },
  {
    slug: 'viviendas-prefabricadas',
    title: 'Viviendas Prefabricadas',
    description:
      'Casas modulares de alta calidad y rápida construcción. Soluciones habitacionales listas en 60-90 días con diseños modernos y sostenibles.',
    bullets: [
      'Diseños personalizados y estandarizados',
      'Construcción en 60-90 días',
      'Eficiencia energética certificada',
      'Garantía estructural extendida',
      'Financiación disponible',
    ],
    divisionSlug: 'viviendas',
  },
  {
    slug: 'construccion-residencial',
    title: 'Construcción Residencial',
    description:
      'Viviendas, departamentos, casas de campo, construcciones modulares y cabañas diseñadas a medida.',
    bullets: ['Viviendas unifamiliares', 'Departamentos', 'Casas de campo', 'Cabañas', 'Construcciones modulares'],
    divisionSlug: 'viviendas',
  },
  {
    slug: 'obras-industriales',
    title: 'Obras Industriales',
    description:
      'Proyectos integrales para plantas industriales y fábricas. Estructuras metálicas, galpones y establecimientos agropecuarios.',
    bullets: [
      'Naves industriales y galpones',
      'Instalaciones de proceso productivo',
      'Sistemas de transporte y elevación',
      'Cámaras frigoríficas',
      'Sistemas contra incendio',
    ],
    divisionSlug: 'ingenieria',
  },
  {
    slug: 'proyectos-agropecuarios',
    title: 'Proyectos Agropecuarios',
    description: 'Infraestructura especializada para el sector rural y agroindustrial.',
    bullets: [
      'Galpones de almacenamiento y silos',
      'Instalaciones para ganadería',
      'Sistemas de riego tecnificado',
      'Electrificación rural',
      'Corrales y bretes',
    ],
    divisionSlug: 'ingenieria',
  },
  {
    slug: 'construccion-industrial',
    title: 'Construcción Industrial',
    description:
      'Proyectos corporativos, comerciales y agropecuarios con estructuras metálicas y cimentaciones especializadas.',
    bullets: ['Corporativo', 'Comercial', 'Agropecuario', 'Estructuras metálicas'],
    divisionSlug: 'ingenieria',
  },
  {
    slug: 'climatizacion',
    title: 'Climatización',
    description: 'Sistemas de aire acondicionado y ventilación industrial. HVAC y mantenimiento preventivo.',
    bullets: [
      'Aire acondicionado central y split',
      'Ventilación industrial y extractores',
      'Calefacción radiante y por losa',
      'Sistemas VRV y climatización inteligente',
      'Mantenimiento preventivo',
    ],
    divisionSlug: 'refrigeracion',
  },
  {
    slug: 'mantenimiento-integral',
    title: 'Mantenimiento Integral',
    description:
      'Servicios preventivos y correctivos para todas las instalaciones. Obras llave en mano con soporte 24/7.',
    bullets: [
      'Mantenimiento preventivo programado',
      'Reparaciones de emergencia 24/7',
      'Termografía infrarroja',
      'Análisis de aceites dieléctricos',
      'Protocolos de medición',
    ],
    divisionSlug: 'solucion-integral',
  },
  {
    slug: 'servicios-especializados',
    title: 'Servicios Especializados',
    description: 'Instalaciones eléctricas, gas, agua, aire acondicionado, reparaciones y terminaciones.',
    bullets: ['Instalaciones', 'Aire acondicionado', 'Reparaciones', 'Terminaciones'],
    divisionSlug: 'solucion-integral',
  },
  // --- Obras institucionales y de salud (competencia: Depaoli & Trosce, Ecosan, Roggio) ---
  {
    slug: 'construccion-hospitales',
    title: 'Construcción de Hospitales y Centros de Salud',
    description:
      'Obras para el sector sanitario: hospitales, clínicas, centros de salud y salas de emergencia. Instalaciones especializadas, normas de bioseguridad y entrega llave en mano.',
    bullets: [
      'Hospitales y centros de salud',
      'Clínicas y consultorios',
      'Salas de emergencia y terapia intensiva',
      'Laboratorios de análisis clínicos',
      'Instalaciones médicas gas y eléctricas',
      'Normativas sanitarias y bioseguridad',
    ],
    divisionSlug: 'arquitectura-construccion',
  },
  {
    slug: 'construccion-escuelas',
    title: 'Construcción de Escuelas e Instituciones Educativas',
    description:
      'Edificios educativos para municipios, provincias y privados: escuelas, universidades, jardines y centros de formación con instalaciones completas y accesibilidad.',
    bullets: [
      'Escuelas primarias y secundarias',
      'Jardines de infantes',
      'Institutos y centros de formación',
      'Universidades y campus',
      'Instalaciones deportivas y comedores',
      'Accesibilidad y normativa educativa',
    ],
    divisionSlug: 'arquitectura-construccion',
  },
  {
    slug: 'construccion-laboratorios',
    title: 'Construcción de Laboratorios',
    description:
      'Laboratorios de investigación, control de calidad e industriales. Salas limpias, instalaciones especiales y cumplimiento de normativas técnicas y sanitarias.',
    bullets: [
      'Laboratorios de investigación',
      'Control de calidad e industriales',
      'Salas limpias y ambientes controlados',
      'Instalaciones de gases y extracción',
      'Normativas CONICET, ANMAT y sectoriales',
    ],
    divisionSlug: 'arquitectura-construccion',
  },
  {
    slug: 'barrios-privados-urbanizaciones',
    title: 'Barrios Privados y Urbanizaciones',
    description:
      'Desarrollos de barrios cerrados, countries y urbanizaciones: trazado de calles, obras de infraestructura, redes y construcción de viviendas. Gestión integral para desarrolladores y municipios.',
    bullets: [
      'Barrios cerrados y countries',
      'Trazado de calles y parcelas',
      'Redes de agua, cloacas y pluviales',
      'Electrificación y alumbrado interno',
      'Pavimentos y espacios comunes',
      'Viviendas y edificios dentro del emprendimiento',
    ],
    divisionSlug: 'arquitectura-construccion',
  },
  // --- Obras viales e infraestructura (competencia: CivilVial, Proba, VialGroup, EMAC) ---
  {
    slug: 'obras-viales-pavimentos',
    title: 'Obras Viales y Pavimentos',
    description:
      'Pavimentación y obras viales para municipios, provincias y privados: calles, rutas, accesos y estacionamientos. Pavimentos flexibles y rígidos, bacheo y movimiento de suelos.',
    bullets: [
      'Pavimentos asfálticos y de hormigón',
      'Calles y caminos rurales',
      'Bacheo y reparación de calzadas',
      'Movimiento de suelos y nivelación',
      'Cunetas y obras pluviales',
      'Veredas y bicisendas',
    ],
    divisionSlug: 'ingenieria',
  },
  {
    slug: 'alumbrado-publico',
    title: 'Alumbrado Público e Iluminación Urbana',
    description:
      'Proyectos de iluminación vial y urbana: columnas, luminarias LED, redes eléctricas para alumbrado público, rotondas, avenidas y rutas. Eficiencia energética y normativas municipales.',
    bullets: [
      'Columnas y farolas de alumbrado',
      'Luminarias LED y sistemas eficientes',
      'Redes eléctricas para vía pública',
      'Rotondas, avenidas y rutas',
      'Parques y espacios públicos',
      'Proyectos con municipios y provincias',
    ],
    divisionSlug: 'soluciones-electricas',
  },
  {
    slug: 'urbanismo-desarrollo-urbano',
    title: 'Urbanismo y Desarrollo Urbano',
    description:
      'Proyectos de urbanización y desarrollo urbano: trazados, infraestructura base, redes de servicios y coordinación con organismos. Para municipios, desarrolladores y planes de vivienda.',
    bullets: [
      'Trazado urbano y parcelamiento',
      'Infraestructura de redes',
      'Obras de saneamiento y pluviales',
      'Espacios verdes y equipamiento',
      'Coordinación con organismos y habilitaciones',
    ],
    divisionSlug: 'ingenieria',
  },
];

/** Servicios agrupados por división para la página principal de servicios */
export function getServicesByDivision() {
  const byDivision: Record<string, ServicioDetalle[]> = {};
  for (const s of ALL_SERVICES) {
    if (!byDivision[s.divisionSlug]) byDivision[s.divisionSlug] = [];
    byDivision[s.divisionSlug].push(s);
  }
  return byDivision;
}
