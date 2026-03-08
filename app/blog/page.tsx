import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Artículos sobre ingeniería, construcción, energía e innovación.',
};

const POSTS = [
  { slug: 'ingenieria-sostenible', title: 'Ingeniería sostenible', category: 'Ingeniería' },
  { slug: 'construccion-modular', title: 'Construcción modular', category: 'Construcción' },
  { slug: 'eficiencia-energetica', title: 'Eficiencia energética', category: 'Energía' },
  { slug: 'innovacion-industrial', title: 'Innovación industrial', category: 'Innovación' },
];

export default function BlogPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h1 className="heading-1">Blog</h1>
        <p className="mt-4 max-w-2xl text-steel-600">
          Notas sobre ingeniería, construcción, energía e innovación.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {POSTS.map((p) => (
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
