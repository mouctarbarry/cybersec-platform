import { getGuides } from "@/lib/guides";
import { GuideExplorer } from "@/components/guide-explorer";
import { Footer } from "@/components/footer";

export default function HomePage() {
  const guides = getGuides();

  return (
    <>
      <main className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-14 text-center">
          <h1 className="text-5xl font-bold tracking-tight">CyberSec</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Guides de cybersécurité — OWASP, cryptographie, pentest, hardening
            et fondamentaux de la sécurité informatique.
          </p>
          <p className="mt-3 font-mono text-sm text-muted-foreground">
            {guides.length} guides
          </p>
        </header>

        <section>
          <GuideExplorer guides={guides} />
        </section>
      </main>

      <Footer />
    </>
  );
}
