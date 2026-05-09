import { Shield } from 'lucide-react';
import { getGuides } from '@/lib/guides';
import { CATEGORIES, type Category } from '@/lib/categories';
import { SearchBar } from '@/components/search-bar';
import { CategoryNav } from '@/components/category-nav';
import { Footer } from '@/components/footer';

export default function HomePage() {
  const guides = getGuides();
  const categoryCounts = guides.reduce<Partial<Record<Category, number>>>((acc, g) => {
    acc[g.category] = (acc[g.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-5xl font-bold tracking-tight">CyberSec</h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Guides de cybersecurite — OWASP, cryptographie, pentest, hardening et fondamentaux
            de la securite informatique
          </p>
          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            {(Object.entries(CATEGORIES) as [Category, (typeof CATEGORIES)[Category]][]).map(
              ([key, cat]) => (
                <span key={key} className="flex items-center gap-1.5">
                  <span>{cat.icon}</span>
                  <span className="font-mono font-bold text-foreground">
                    {categoryCounts[key] ?? 0}
                  </span>
                  <span>{cat.label.toLowerCase()}</span>
                </span>
              ),
            )}
          </div>
        </header>

        <section className="mb-10">
          <CategoryNav />
        </section>

        <section>
          <SearchBar guides={guides} />
        </section>
      </main>

      <Footer />
    </>
  );
}
