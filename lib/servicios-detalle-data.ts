/**
 * Alias de slugs para compatibilidad con URLs de las webs de referencia.
 * v0-emprenor-original: /servicios/agropecuario, /servicios/electricidad, /servicios/plomeria, /servicios/gas, /servicios/obras-industriales
 */
export const SERVICIO_SLUG_ALIASES: Record<string, string> = {
  agropecuario: 'proyectos-agropecuarios',
  electricidad: 'instalaciones-electricas',
  plomeria: 'instalaciones-sanitarias',
  gas: 'instalaciones-gas',
};

/**
 * Secciones extra para páginas de servicio con contenido detallado
 */
export interface ServicePageSection {
  title: string;
  items: string[];
}

export interface ServicePageExtra {
  heroSubtitle?: string;
  sectionTitle?: string;
  sectionSubtitle?: string;
  sections: ServicePageSection[];
  /** Ej. "Experiencia en el Campo" */
  experienceTitle?: string;
  experience?: { title: string; description: string }[];
  /** Ej. "Industrias que Atendemos" */
  industriesTitle?: string;
  industries?: { title: string; description: string }[];
  /** Ej. "Certificaciones y Normativas", "Garantía de Calidad", "Seguridad Garantizada" */
  guaranteesTitle?: string;
  guarantees?: { title: string; description: string }[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
}

export const SERVICIO_PAGINA_EXTRA: Record<string, ServicePageExtra> = {
  'proyectos-agropecuarios': {
    sectionTitle: 'Soluciones para el Campo',
    sectionSubtitle:
      'Infraestructura rural especializada para establecimientos de todo tipo y tamaño.',
    heroSubtitle:
      'Construcción e instalaciones para establecimientos rurales, tambos, feedlots, galpones de acopio y toda la infraestructura del sector agropecuario.',
    sections: [
      {
        title: 'Galpones y Silos',
        items: [
          'Galpones de almacenamiento',
          'Silos para granos',
          'Secadoras y aireación',
          'Balanzas y playas de maniobra',
          'Estructuras metálicas rurales',
        ],
      },
      {
        title: 'Instalaciones Ganaderas',
        items: [
          'Corrales y bretes',
          'Manga de trabajo',
          'Embarcaderos',
          'Comederos y bebederos',
          'Galpones de encierre',
        ],
      },
      {
        title: 'Tambos y Lechería',
        items: [
          'Salas de ordeñe',
          'Tanques de frío',
          'Corrales de espera',
          'Sistemas de limpieza',
          'Instalaciones sanitarias',
        ],
      },
      {
        title: 'Sistemas de Riego',
        items: [
          'Riego por aspersión',
          'Riego por goteo',
          'Pivot central',
          'Bombeo y reservorios',
          'Automatización de riego',
        ],
      },
      {
        title: 'Electrificación Rural',
        items: [
          'Líneas rurales de baja tensión',
          'Transformadores rurales',
          'Puesta a tierra (PAT)',
          'Tableros de campo',
          'Iluminación de establecimientos',
        ],
      },
      {
        title: 'Feedlot y Engorde',
        items: [
          'Corrales de engorde',
          'Comederos automatizados',
          'Sistemas de agua',
          'Sombras y refugios',
          'Drenajes y pendientes',
        ],
      },
    ],
    experienceTitle: 'Experiencia en el Campo',
    experience: [
      {
        title: 'Conocimiento del Sector',
        description: 'Entendemos las necesidades específicas del agro y adaptamos soluciones.',
      },
      {
        title: 'Materiales Resistentes',
        description: 'Construcciones durables que soportan condiciones climáticas adversas.',
      },
      {
        title: 'Plazos Adaptados',
        description: 'Trabajamos según la actividad del campo y las estaciones del año.',
      },
    ],
    ctaTitle: '¿Necesitas infraestructura para tu establecimiento?',
    ctaSubtitle: 'Experiencia en proyectos rurales de todo tipo y tamaño.',
    ctaButtonText: 'Solicitar visita al campo',
  },
  'obras-industriales': {
    sectionTitle: 'Proyectos Industriales Especializados',
    sectionSubtitle:
      'Construcción y montaje de plantas industriales, naves, galpones y proyectos de infraestructura productiva con gestión integral llave en mano.',
    heroSubtitle:
      'Construcción y montaje de plantas industriales, naves, galpones y proyectos de infraestructura productiva con gestión integral llave en mano.',
    sections: [
      {
        title: 'Naves Industriales',
        items: [
          'Estructuras metálicas y hormigón',
          'Galpones de gran luz',
          'Plantas de producción',
          'Depósitos y almacenes',
          'Cerramientos laterales',
        ],
      },
      {
        title: 'Instalaciones de Proceso',
        items: [
          'Líneas de producción',
          'Sistemas de transporte',
          'Cintas y elevadores',
          'Silos y tolvas',
          'Montaje de maquinaria',
        ],
      },
      {
        title: 'Infraestructura Industrial',
        items: [
          'Oficinas administrativas',
          'Vestuarios y comedores',
          'Laboratorios de control',
          'Salas de máquinas',
          'Sectores logísticos',
        ],
      },
      {
        title: 'Obras Civiles Industriales',
        items: [
          'Fundaciones especiales',
          'Pisos industriales reforzados',
          'Plataformas y entrepisos',
          'Fosas y canaletas',
          'Muros de contención',
        ],
      },
      {
        title: 'Sistemas de Seguridad',
        items: [
          'Protección contra incendio',
          'Sistemas de detección',
          'Sprinklers y hidrantes',
          'Señalización industrial',
          'Vías de evacuación',
        ],
      },
      {
        title: 'Cámaras Frigoríficas',
        items: [
          'Cámaras de conservación',
          'Túneles de congelamiento',
          'Antecámaras y muelles',
          'Aislación térmica especializada',
          'Equipos de refrigeración',
        ],
      },
    ],
    industriesTitle: 'Industrias que Atendemos',
    industries: [
      { title: 'Alimenticia', description: 'Plantas procesadoras y frigoríficos' },
      { title: 'Automotriz', description: 'Talleres y plantas de ensamblaje' },
      { title: 'Farmacéutica', description: 'Laboratorios y salas limpias' },
      { title: 'Logística', description: 'Centros de distribución' },
      { title: 'Metalúrgica', description: 'Talleres y plantas de manufactura' },
      { title: 'Química', description: 'Plantas de proceso industrial' },
      { title: 'Textil', description: 'Fábricas y talleres' },
      { title: 'Agroindustrial', description: 'Acopios y plantas procesadoras' },
    ],
    ctaTitle: '¿Planificando un Proyecto Industrial?',
    ctaSubtitle: 'Gestión integral desde el diseño hasta la puesta en marcha de su planta.',
    ctaButtonText: 'Solicitar propuesta',
  },
  'instalaciones-electricas': {
    sectionTitle: 'Servicios Eléctricos Especializados',
    sectionSubtitle:
      'Ingenieros electricistas matriculados. Subestaciones hasta 132kV, media y baja tensión, tableros de comando y automatización industrial.',
    heroSubtitle:
      'Proyectos eléctricos de media y baja tensión con ingenieros matriculados. Subestaciones transformadoras, tableros de comando y automatización industrial.',
    sections: [
      {
        title: 'Subestaciones Transformadoras',
        items: [
          'Hasta 132kV de potencia',
          'Transformadores de distribución',
          'Celdas de media tensión',
          'Protecciones y seccionamiento',
          'Puesta en marcha y ensayos',
        ],
      },
      {
        title: 'Media y Baja Tensión',
        items: [
          'Líneas aéreas y subterráneas',
          'Canalizaciones eléctricas',
          'Tendido de cables certificados',
          'Empalmes y terminaciones',
          'Iluminación industrial',
        ],
      },
      {
        title: 'Tableros Eléctricos',
        items: [
          'Tableros generales de distribución',
          'Tableros de comando y control',
          'CCM (Centro de Control de Motores)',
          'Tableros de automatización',
          'Montaje en taller y campo',
        ],
      },
      {
        title: 'Puesta a Tierra (PAT)',
        items: [
          'Diseño y cálculo de PAT',
          'Jabalinas y mallas de tierra',
          'Medición de resistencia',
          'Certificación según normativa',
          'Protección contra rayos',
        ],
      },
      {
        title: 'Automatización Industrial',
        items: [
          'PLCs y sistemas SCADA',
          'Variadores de velocidad',
          'Tableros de automatización',
          'Comunicación industrial',
          'Programación y puesta en marcha',
        ],
      },
      {
        title: 'Instalaciones Residenciales',
        items: [
          'Cableado completo de viviendas',
          'Tableros eléctricos domiciliarios',
          'Circuitos especiales',
          'Iluminación LED eficiente',
          'Sistemas de respaldo UPS',
        ],
      },
    ],
    experienceTitle: 'Expertos en Instalaciones Eléctricas',
    experience: [
      { title: 'Ingenieros electricistas matriculados', description: 'Profesionales habilitados' },
      { title: 'Certificación ISO 9001:2015', description: 'Gestión de calidad certificada' },
      { title: 'Equipamiento de medición certificado', description: 'Precisión y trazabilidad' },
      { title: 'Garantía en materiales y mano de obra', description: 'Cumplimiento normativo' },
    ],
    guaranteesTitle: 'Certificaciones y Normativas',
    guarantees: [
      { title: 'AEA 90364', description: 'Reglamentación para instalaciones eléctricas' },
      { title: 'ISO 9001:2015', description: 'Gestión de calidad certificada' },
      { title: 'Ingenieros Matriculados', description: 'Profesionales habilitados' },
      { title: 'Materiales Certificados', description: 'IRAM, IEC, UL' },
    ],
    ctaTitle: '¿Necesitas Instalaciones Eléctricas Certificadas?',
    ctaSubtitle: 'Ingenieros matriculados listos para tu proyecto industrial o residencial.',
    ctaButtonText: 'Solicitar cotización',
  },
  'instalaciones-sanitarias': {
    sectionTitle: 'Servicios de Plomería Integral',
    sectionSubtitle:
      'Sistemas completos de agua potable, cloacales y pluviales para viviendas, comercios e industrias con materiales de primera calidad.',
    heroSubtitle:
      'Sistemas completos de agua potable, cloacales y pluviales para viviendas, comercios e industrias con materiales de primera calidad.',
    sections: [
      {
        title: 'Agua Potable',
        items: [
          'Redes de distribución interna',
          'Agua fría y caliente',
          'Tanques de reserva y cisternas',
          'Sistemas de bombeo',
          'Termotanques y calefones',
        ],
      },
      {
        title: 'Desagües Cloacales',
        items: [
          'Redes primarias y secundarias',
          'Cámaras de inspección',
          'Ventilaciones cloacales',
          'Conexiones a red pública',
          'Pozos absorbentes',
        ],
      },
      {
        title: 'Desagües Pluviales',
        items: [
          'Bajadas de techos',
          'Canaletas y conductos',
          'Bocas de lluvia',
          'Sistemas de drenaje',
          'Bombas sumidero',
        ],
      },
      {
        title: 'Tratamiento de Efluentes',
        items: [
          'Plantas de tratamiento compactas',
          'Biodigestores',
          'Cámaras sépticas',
          'Filtros biológicos',
          'Sistemas de reutilización',
        ],
      },
      {
        title: 'Calefacción por Losa',
        items: [
          'Losa radiante eléctrica',
          'Losa radiante a gas',
          'Termostatos y controles',
          'Aislación térmica',
          'Mantenimiento preventivo',
        ],
      },
      {
        title: 'Instalaciones Especiales',
        items: [
          'Sistemas de riego automático',
          'Piscinas y jacuzzis',
          'Sistemas contra incendio',
          'Redes industriales',
          'Griterías y accesorios premium',
        ],
      },
    ],
    guaranteesTitle: 'Garantía de Calidad',
    guarantees: [
      { title: 'Materiales Certificados', description: 'Trabajamos solo con marcas líderes y productos certificados IRAM' },
      { title: 'Plomeros Matriculados', description: 'Personal capacitado y habilitado con experiencia comprobada' },
      { title: 'Garantía Extendida', description: 'Garantía de 3 años en mano de obra y materiales instalados' },
    ],
    ctaTitle: '¿Necesitas Instalaciones Sanitarias?',
    ctaSubtitle: 'Trabajamos con materiales de primera calidad y garantía extendida.',
    ctaButtonText: 'Solicitar cotización',
  },
  'instalaciones-gas': {
    sectionTitle: 'Servicios de Instalación de Gas',
    sectionSubtitle:
      'Gas natural y envasado para viviendas, comercios e industrias. Instalaciones certificadas con matrícula habilitada y garantía total. Normativas NAG 100/200.',
    heroSubtitle:
      'Gas natural y envasado para viviendas, comercios e industrias. Instalaciones certificadas con matrícula habilitada y garantía total. Todas nuestras instalaciones cumplen con normativas NAG 100/200.',
    sections: [
      {
        title: 'Gas Natural Domiciliario',
        items: [
          'Instalación completa de red interna',
          'Cañerías de acero o cobre',
          'Conexión a red de distribuidora',
          'Artefactos: cocinas, hornos, calefones',
          'Certificación y habilitación',
        ],
      },
      {
        title: 'Gas Industrial',
        items: [
          'Redes de distribución industrial',
          'Reguladores de media y alta presión',
          'Sistemas de medición y control',
          'Quemadores industriales',
          'Calderas y hornos',
        ],
      },
      {
        title: 'Gas Envasado (GLP)',
        items: [
          'Instalaciones para garrafas',
          'Tanques estacionarios',
          'Reguladores y medidores',
          'Sistemas de seguridad',
          'Conversión a gas natural',
        ],
      },
      {
        title: 'Medidores y Reguladores',
        items: [
          'Instalación de medidores',
          'Reguladores de presión',
          'Llaves de paso y seguridad',
          'Válvulas automáticas',
          'Sistemas de corte automático',
        ],
      },
      {
        title: 'Certificaciones',
        items: [
          'Certificado de gasista matriculado',
          'Inspección de distribuidoras',
          'Pruebas de hermeticidad',
          'Habilitación municipal',
          'Documentación completa',
        ],
      },
      {
        title: 'Mantenimiento y Reparaciones',
        items: [
          'Detección de fugas con equipo',
          'Reparación de instalaciones',
          'Cambio de cañerías',
          'Actualización de sistemas',
          'Mantenimiento preventivo',
        ],
      },
    ],
    guaranteesTitle: 'Seguridad Garantizada',
    guarantees: [
      { title: 'Gasistas Matriculados', description: 'Personal habilitado y certificado' },
      { title: 'Materiales Aprobados', description: 'Cañerías y accesorios certificados' },
      { title: 'Pruebas de Hermeticidad', description: 'Detección de fugas con equipos' },
      { title: 'Certificación Final', description: 'Documentación completa entregada' },
    ],
    ctaTitle: '¿Necesitas Instalación de Gas Certificada?',
    ctaSubtitle: 'Gasistas matriculados con experiencia y certificación habilitada.',
    ctaButtonText: 'Solicitar certificación',
  },
  'obras-viales-pavimentos': {
    sectionTitle: 'Servicios Viales Integrales',
    sectionSubtitle:
      'Pavimentación, bacheo y obras viales para municipios, provincias y accesos privados. Flota propia y equipos para pavimentos flexibles y rígidos.',
    heroSubtitle:
      'Pavimentación y obras viales para municipios, provincias y privados: calles, rutas, accesos y estacionamientos. Pavimentos asfálticos y de hormigón, bacheo y movimiento de suelos.',
    sections: [
      {
        title: 'Pavimentos Asfálticos',
        items: [
          'Carpetas asfálticas en caliente',
          'Bacheo y reparación de calzadas',
          'Estabilización de suelos',
          'Señalización horizontal',
        ],
      },
      {
        title: 'Pavimentos de Hormigón',
        items: [
          'Hormigón armado y simple',
          'Veredas y cordones',
          'Pavimentos industriales',
          'Juntas y sellados',
        ],
      },
      {
        title: 'Obras Complementarias',
        items: [
          'Movimiento de suelos',
          'Cunetas y obras pluviales',
          'Bicisendas y sendas',
          'Accesos y estacionamientos',
        ],
      },
    ],
    ctaTitle: '¿Proyecto vial o pavimentación?',
    ctaSubtitle: 'Presupuesto sin compromiso para municipios, provincias y privados.',
    ctaButtonText: 'Solicitar presupuesto',
  },
  'alumbrado-publico': {
    sectionTitle: 'Iluminación Urbana y Vial',
    sectionSubtitle:
      'Proyectos de alumbrado público con tecnología LED. Columnas, luminarias y redes eléctricas para vías, plazas y espacios públicos.',
    heroSubtitle:
      'Proyectos de iluminación vial y urbana: columnas, luminarias LED, redes eléctricas para alumbrado público, rotondas, avenidas y rutas. Eficiencia energética y normativas municipales.',
    sections: [
      {
        title: 'Alumbrado Vial',
        items: [
          'Columnas y farolas',
          'Luminarias LED eficientes',
          'Redes de media y baja tensión',
          'Rotondas y accesos',
        ],
      },
      {
        title: 'Espacios Públicos',
        items: [
          'Plazas y parques',
          'Paseos y bicisendas',
          'Estacionamientos',
          'Fachadas y monumentos',
        ],
      },
    ],
    experienceTitle: 'Ventajas',
    experience: [
      { title: 'Tecnología LED', description: 'Menor consumo y mayor vida útil' },
      { title: 'Normativa municipal', description: 'Proyectos que cumplen requisitos locales' },
      { title: 'Mantenimiento', description: 'Soporte post-instalación' },
    ],
    ctaTitle: '¿Necesitas alumbrado público?',
    ctaSubtitle: 'Desde el diseño hasta la puesta en marcha con municipios y provincias.',
    ctaButtonText: 'Consultar proyecto',
  },
  'construccion-hospitales': {
    sectionTitle: 'Obras para el Sector Salud',
    sectionSubtitle:
      'Hospitales, clínicas y centros de salud con instalaciones especializadas, normativas sanitarias y entrega llave en mano.',
    heroSubtitle:
      'Obras para el sector sanitario: hospitales, clínicas, centros de salud y salas de emergencia. Instalaciones especializadas, normas de bioseguridad y entrega llave en mano.',
    sections: [
      {
        title: 'Edificios Sanitarios',
        items: [
          'Hospitales y centros de salud',
          'Clínicas y consultorios',
          'Salas de emergencia y UTI',
          'Laboratorios de análisis',
        ],
      },
      {
        title: 'Instalaciones Especiales',
        items: [
          'Gas medicinal y aire comprimido',
          'Instalaciones eléctricas de emergencia',
          'Climatización y ventilación',
          'Saneamiento y bioseguridad',
        ],
      },
    ],
    ctaTitle: '¿Proyecto de obra sanitaria?',
    ctaSubtitle: 'Experiencia en obras institucionales con normativas al día.',
    ctaButtonText: 'Solicitar cotización',
  },
};

export function resolveServicioSlug(slug: string): string {
  return SERVICIO_SLUG_ALIASES[slug] ?? slug;
}
