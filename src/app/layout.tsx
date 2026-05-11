import type { Metadata } from 'next';
import { Inter, Quicksand, Ubuntu_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header, Sidebar } from '@/components/header';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CyberSec Platform — Guides de cybersécurité',
  description:
    'Référence interactive de cybersécurité : OWASP, cryptographie, pentest, hardening et fondamentaux de la sécurité informatique.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${inter.variable} ${quicksand.variable} ${ubuntuMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <div className="flex">
            <Sidebar />
            <div className="min-h-[calc(100vh-3.5rem)] flex-1 overflow-x-hidden">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
