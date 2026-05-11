export type Category =
  | "fondamentaux"
  | "web"
  | "reseaux"
  | "cryptographie"
  | "pentest"
  | "hardening";

export interface CategoryInfo {
  label: string;
  description: string;
  color: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  fondamentaux: {
    label: "Fondamentaux",
    description: "CIA Triad, modèles de menaces et principes de sécurité",
    color: "bg-blue-500",
  },
  web: {
    label: "Sécurité Web",
    description: "OWASP Top 10, XSS, injection SQL et protections",
    color: "bg-amber-500",
  },
  reseaux: {
    label: "Réseaux",
    description: "Firewalls, IDS/IPS, protocoles et analyse de trafic",
    color: "bg-green-500",
  },
  cryptographie: {
    label: "Cryptographie",
    description: "Chiffrement, hashing, PKI et certificats",
    color: "bg-purple-500",
  },
  pentest: {
    label: "Pentest",
    description: "Méthodologie, reconnaissance, exploitation et outils",
    color: "bg-rose-500",
  },
  hardening: {
    label: "Hardening",
    description: "Sécurisation Linux, conteneurs et infrastructure",
    color: "bg-cyan-500",
  },
};
