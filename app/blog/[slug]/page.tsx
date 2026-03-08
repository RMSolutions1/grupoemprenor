import type { Metadata } from 'next';
import Link from 'next/link';

const POSTS: Record<
  string,
  { title: string; category: string; content: string }
> = {
  'ingenieria-sostenible': {
    title: 'Ingeniería sostenible',
    category: 'Ingeniería',
    content:
      'La ingeniería sostenible aplica criterios de eficiencia energética, uso de materiales reciclables y reducción del impacto ambiental en el diseño y la construcción. En Grupo Emprenor integramos estas prácticas en nuestros proyectos.',
  },
  'construccion-modular': {
    title: 'Construcción modular',
    category: 'Construcción',
    content:
      'La construcción modular permite reducir plazos y costos manteniendo altos estándares de calidad. Nuestra división de viviendas y obras industriales utiliza esta metodología con resultados comprobados.',
  },
  'eficiencia-energetica': {
    title: 'Eficiencia energética',
    category: 'Energía',
    content:
      'Sistemas de refrigeración, climatización e instalaciones eléctricas eficientes no solo reducen el consumo sino que mejoran la operación. Ofrecemos auditorías y soluciones a medida.',
  },
  'innovacion-industrial': {
    title: 'Innovación industrial',
    category: 'Innovación',
    content:
      'La innovación en procesos constructivos y en ingeniería nos permite ofrecer soluciones más rápidas, seguras y económicas para el sector industrial.',
  },
};

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: 'Entrada no encontrada' };
  return {
    title: post.title,
    description: post.content.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <section className="section-padding">
        <div className="container-custom">
          <p>Entrada no encontrada.</p>
          <Link href="/blog" className="mt-4 inline-block text-accent hover:underline">
            Volver al blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="section-padding bg-white">
      <div className="container-custom max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-accent hover:underline"
        >
          ← Blog
        </Link>
        <p className="mt-2 text-sm text-steel-500">{post.category}</p>
        <h1 className="mt-2 heading-1">{post.title}</h1>
        <div className="mt-6 prose prose-steel max-w-none">
          <p className="text-steel-600">{post.content}</p>
        </div>
      </div>
    </article>
  );
}
