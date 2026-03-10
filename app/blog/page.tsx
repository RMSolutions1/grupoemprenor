import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getPublicBlogPosts } from '@/lib/public-data';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre ingeniería, construcción, energía e innovación.',
};

const STATIC_POSTS = [
  { slug: 'ingenieria-sostenible', title: 'Ingeniería sostenible', category: 'Ingeniería' },
  { slug: 'construccion-modular', title: 'Construcción modular', category: 'Construcción' },
  { slug: 'eficiencia-energetica', title: 'Eficiencia energética', category: 'Energía' },
  { slug: 'innovacion-industrial', title: 'Innovación industrial', category: 'Innovación' },
];

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80';

export default async function BlogPage() {
  const fromDb = await getPublicBlogPosts(50);
  const useDb = fromDb.length > 0;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h1 className="heading-1">Blog</h1>
        <p className="mt-4 max-w-2xl text-steel-600">
          Notas sobre ingeniería, construcción, energía e innovación.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useDb
            ? fromDb.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block overflow-hidden rounded-xl border border-steel-200 transition hover:border-accent/30 hover:shadow-md"
                  >
                    <div className="relative aspect-video w-full bg-steel-100">
                      <Image
                        src={p.image_url ?? DEFAULT_IMAGE}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-accent">Blog</span>
                      <h2 className="mt-2 font-semibold text-primary">{p.title}</h2>
                      {p.excerpt && (
                        <p className="mt-1 line-clamp-2 text-sm text-steel-600">{p.excerpt}</p>
                      )}
                    </div>
                  </Link>
                </li>
              ))
            : STATIC_POSTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block rounded-xl border border-steel-200 p-4 transition hover:border-accent/30 hover:shadow-md"
                  >
                    <span className="text-xs font-medium text-accent">{p.category}</span>
                    <h2 className="mt-2 font-semibold text-primary">{p.title}</h2>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </section>
  );
}
