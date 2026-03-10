/**
 * Datos públicos desde la BD (Neon). Usar en Server Components.
 * Si la BD no está disponible, las funciones devuelven arrays/objetos vacíos.
 */

import { getPool } from '@/lib/db';

export type PublicService = {
  id: number;
  slug: string;
  title: string;
  short_title: string;
  description: string | null;
  icon: string | null;
  order_index: number;
};

export type PublicProject = {
  id: number;
  title: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  division_slug: string | null;
  project_date: string | null;
  order_index: number;
};

export type PublicBlogPost = {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  image_url: string | null;
  published_at: string | null;
};

export type PublicOffice = {
  id: number;
  city: string;
  address: string;
  zip: string | null;
  phone: string | null;
  order_index: number;
};

export async function getPublicServices(): Promise<PublicService[]> {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, slug, title, short_title, description, icon, order_index FROM services WHERE active = 1 ORDER BY order_index ASC, id ASC'
    );
    return rows as PublicService[];
  } catch {
    return [];
  }
}

export async function getPublicProjects(): Promise<PublicProject[]> {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, title, slug, description, image_url, division_slug, project_date, order_index FROM projects WHERE active = 1 ORDER BY order_index ASC, project_date DESC NULLS LAST, id DESC'
    );
    return rows as PublicProject[];
  } catch {
    return [];
  }
}

export async function getPublicBlogPosts(limit = 50): Promise<PublicBlogPost[]> {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      `SELECT id, title, slug, excerpt, image_url, published_at FROM blog_posts WHERE active = 1 AND published_at IS NOT NULL ORDER BY published_at DESC LIMIT ?`,
      [limit]
    );
    return rows as PublicBlogPost[];
  } catch {
    return [];
  }
}

export async function getPublicOffices(): Promise<PublicOffice[]> {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      'SELECT id, city, address, zip, phone, order_index FROM offices ORDER BY order_index ASC, id ASC'
    );
    return rows as PublicOffice[];
  } catch {
    return [];
  }
}

export async function getPublicSiteConfig(): Promise<Record<string, string>> {
  try {
    const pool = getPool();
    const [rows] = await pool.execute('SELECT config_key, config_value FROM site_config ORDER BY config_key ASC');
    const map: Record<string, string> = {};
    (rows as { config_key: string; config_value: string | null }[]).forEach((r) => {
      map[r.config_key] = r.config_value ?? '';
    });
    return map;
  } catch {
    return {};
  }
}

/** Imagen por defecto para proyectos sin image_url */
const DEFAULT_PROJECT_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80';

/**
 * Convierte proyectos de la BD al formato usado por ProjectGallery.
 * Reutilizable en home y en /proyectos.
 */
export function mapPublicProjectsToGalleryItems(
  projects: PublicProject[]
): { id: string; title: string; type: string; description: string; image: string; href: string; category: string }[] {
  return projects.map((p) => ({
    id: String(p.id),
    title: p.title,
    type: p.division_slug ?? 'Proyecto',
    description: p.description ?? '',
    image: p.image_url ?? DEFAULT_PROJECT_IMAGE,
    href: '/proyectos',
    category: p.division_slug ?? 'general',
  }));
}
