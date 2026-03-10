import { HomePageContent } from '@/components/home/HomePageContent';
import {
  getPublicServices,
  getPublicProjects,
  mapPublicProjectsToGalleryItems,
} from '@/lib/public-data';
import { FEATURED_PROJECTS } from '@/lib/home-data';
import type { ServiceCardItem } from '@/components/services/ServiceCards';

const FEATURED_COUNT = 8;

export default async function HomePage() {
  const [services, projects] = await Promise.all([
    getPublicServices(),
    getPublicProjects(),
  ]);

  const servicesForCards: ServiceCardItem[] | null =
    services.length > 0
      ? services.map((s) => ({
          slug: s.slug,
          title: s.title,
          shortTitle: s.short_title,
          description: s.description ?? '',
          icon: s.icon ?? 'building',
        }))
      : null;

  const fromDb = mapPublicProjectsToGalleryItems(projects);
  const featuredProjects =
    fromDb.length > 0 ? fromDb.slice(0, FEATURED_COUNT) : FEATURED_PROJECTS;

  return (
    <HomePageContent
      services={servicesForCards}
      featuredProjects={featuredProjects}
    />
  );
}
