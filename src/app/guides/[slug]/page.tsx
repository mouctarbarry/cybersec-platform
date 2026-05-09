import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllSlugs, getGuideBySlug } from '@/lib/guides';
import { CATEGORIES } from '@/lib/categories';
import { TerminalBlock } from '@/components/terminal-block';
import { Footer } from '@/components/footer';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — CyberSec Platform`,
    description: guide.description,
  };
}

const mdxComponents = {
  TerminalBlock,
};

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const category = CATEGORIES[guide.category];

  return (
    <>
      <main className="mx-auto max-w-4xl px-4 py-12">
        <nav className="mb-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Tous les guides
          </Link>
        </nav>

        <header className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <span>{category.icon}</span>
            <span className="text-sm text-muted-foreground">{category.label}</span>
          </div>
          <h1 className="mb-2 font-mono text-4xl font-bold">{guide.title}</h1>
          <p className="text-lg text-muted-foreground">{guide.description}</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote source={guide.content} components={mdxComponents} />
        </article>
      </main>

      <Footer />
    </>
  );
}
