import type { ProjectItem } from '@/components/projects/ProjectGallery';
import type { Testimonial } from '@/components/testimonials/TestimonialSection';

/** Imagen hero principal */
export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80';

/** Números que respaldan nuestra experiencia (datos reales EMPRENOR) */
export const STATS = [
  { value: '500+', label: 'Proyectos completados' },
  { value: '15+', label: 'Años de experiencia' },
  { value: '50+', label: 'Profesionales' },
  { value: '98%', label: 'Clientes satisfechos' },
] as const;

/** Proyectos destacados (basados en emprenorcyscorporations.vercel.app) */
export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Centro Comercial Plaza Norte',
    type: 'Comercial',
    description:
      'Construcción integral de centro comercial de 15.000 m² con instalaciones eléctricas de media tensión. Buenos Aires, Argentina.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    href: '/proyectos',
    category: 'construcción',
  },
  {
    id: '2',
    title: 'Complejo Industrial Metalúrgico',
    type: 'Industrial',
    description:
      'Instalaciones eléctricas industriales y sistemas de gas para complejo metalúrgico de gran escala. Córdoba, Argentina.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    href: '/proyectos',
    category: 'ingeniería',
  },
  {
    id: '3',
    title: 'Residencial Torres del Río',
    type: 'Residencial',
    description:
      'Construcción de torres residenciales con instalaciones sanitarias y eléctricas completas. Rosario, Argentina.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    href: '/proyectos',
    category: 'viviendas',
  },
  {
    id: '4',
    title: 'Hospital Regional San Martín',
    type: 'Institucional',
    description:
      'Instalaciones especializadas para centro de salud con sistemas de emergencia y backup. Mendoza, Argentina.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    href: '/proyectos',
    category: 'construcción',
  },
];

/** Sectores que atendemos. Incluye salud, educación, barrios privados e infraestructura vial para competir con líderes del mercado. */
export const SECTORS = [
  {
    title: 'Residencial',
    description:
      'Viviendas unifamiliares, edificios y condominios. Desde la casa propia hasta torres y countries con estándares de calidad y plazos acordados.',
    iconName: 'building',
  },
  {
    title: 'Comercial',
    description:
      'Locales, oficinas y centros comerciales. Obras a medida para retail, gastronomía y servicios con instalaciones completas y habilitaciones.',
    iconName: 'store',
  },
  {
    title: 'Industrial',
    description:
      'Fábricas, plantas productivas y depósitos. Naves, galpones, subestaciones y mantenimiento para que su producción no se detenga.',
    iconName: 'factory',
  },
  {
    title: 'Agropecuario',
    description:
      'Establecimientos rurales e agroindustrias. Galpones, silos, tambos, electrificación rural y obras que el campo necesita.',
    iconName: 'tractor',
  },
  {
    title: 'Salud',
    description:
      'Hospitales, clínicas, centros de salud y laboratorios. Obras con normativas sanitarias, bioseguridad e instalaciones especializadas.',
    iconName: 'heart',
  },
  {
    title: 'Educación',
    description:
      'Escuelas, universidades, jardines e institutos. Edificios educativos para municipios, provincias y privados con instalaciones completas.',
    iconName: 'bookopen',
  },
  {
    title: 'Barrios privados',
    description:
      'Barrios cerrados, countries y urbanizaciones. Trazado, redes, pavimentos y construcción para desarrolladores y municipios.',
    iconName: 'home',
  },
  {
    title: 'Infraestructura vial',
    description:
      'Obras viales, pavimentos, asfaltos y alumbrado público. Para municipios, provincias y accesos privados con equipos y experiencia.',
    iconName: 'route',
  },
];

/** Por qué elegir EMPRENOR. iconName para diversidad visual (award, users, clock, filecheck, shield, badge). */
export const ADVANTAGES = [
  {
    title: 'Calidad garantizada',
    description:
      'Utilizamos los mejores materiales y técnicas para resultados duraderos. Inspecciones y pruebas según pliego para su tranquilidad.',
    iconName: 'award',
  },
  {
    title: 'Equipo profesional',
    description:
      'Ingenieros, arquitectos y técnicos matriculados altamente capacitados. Un equipo estable con experiencia en el NOA.',
    iconName: 'users',
  },
  {
    title: 'Cumplimiento de plazos',
    description:
      'Nos comprometemos con los tiempos de entrega establecidos. Planificación rigurosa y comunicación constante con el cliente.',
    iconName: 'clock',
  },
  {
    title: 'Presupuestos claros',
    description:
      'Presupuestos detallados y transparentes, sin costos ocultos. Incluyen especificaciones técnicas y cronograma.',
    iconName: 'filecheck',
  },
  {
    title: 'Certificaciones vigentes',
    description:
      'ISO 9001:2015, habilitaciones RIGI y matrículas actualizadas. Cumplimiento normativo en cada especialidad.',
    iconName: 'shield',
  },
  {
    title: 'Garantía extendida',
    description:
      'Respaldamos nuestro trabajo con garantías de hasta 5 años en mano de obra y materiales instalados.',
    iconName: 'badge',
  },
];

/** Proceso de trabajo. iconName para iconos por paso (clipboard, filetext, hardhat, checkcircle, package). */
export const WORK_PROCESS = [
  {
    step: 1,
    title: 'Consulta y evaluación',
    description:
      'Analizamos sus necesidades y visitamos el sitio para comprender el alcance del proyecto. Sin compromiso y con respuesta en menos de 48 horas.',
    iconName: 'clipboard',
  },
  {
    step: 2,
    title: 'Presupuesto detallado',
    description:
      'Desarrollamos un presupuesto completo con cronograma, especificaciones técnicas y partidas desglosadas para que pueda decidir con tranquilidad.',
    iconName: 'filetext',
  },
  {
    step: 3,
    title: 'Ejecución del proyecto',
    description:
      'Nuestro equipo ejecuta la obra con los más altos estándares de calidad y seguridad. Coordinación constante y mínima afectación a su actividad.',
    iconName: 'hardhat',
  },
  {
    step: 4,
    title: 'Control de calidad',
    description:
      'Inspecciones rigurosas y pruebas técnicas para garantizar cumplimiento normativo. Trazabilidad de materiales y mano de obra.',
    iconName: 'checkcircle',
  },
  {
    step: 5,
    title: 'Entrega y garantía',
    description:
      'Entrega del proyecto con toda la documentación, as-built y garantía extendida. Soporte post-entrega para su tranquilidad.',
    iconName: 'package',
  },
];

/** Testimonios reales (emprenor.com + emprenorcyscorporations) */
export const TESTIMONIALS_HOME: Testimonial[] = [
  {
    quote:
      'EMPRENOR construyó nuestra casa de ensueño. El equipo fue profesional, cumplió con los plazos y el resultado superó nuestras expectativas.',
    author: 'Carlos Mendoza',
    role: 'Propietario',
    company: '',
  },
  {
    quote:
      'Excelente trabajo en la remodelación de nuestras oficinas. Muy satisfechos con la calidad y el trato recibido.',
    author: 'María García',
    role: 'Empresaria',
    company: '',
  },
  {
    quote:
      'Profesionales de primera. Realizaron las instalaciones eléctricas de nuestra planta industrial sin contratiempos.',
    author: 'Roberto Sánchez',
    role: 'Director de Operaciones',
    company: '',
  },
  {
    quote:
      'Emprenor C&S superó todas nuestras expectativas. La instalación eléctrica de nuestro complejo industrial fue impecable, cumpliendo todos los plazos y normativas.',
    author: 'Roberto Martínez',
    role: 'Director de Operaciones',
    company: 'Constructora San Martín',
  },
  {
    quote:
      'Trabajar con Emprenor C&S fue una experiencia excepcional. Su atención al detalle y compromiso con la calidad hacen que cada proyecto sea un éxito garantizado.',
    author: 'María Fernández',
    role: 'Gerente de Proyectos',
    company: 'Desarrollos Urbanos SA',
  },
];
