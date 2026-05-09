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
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  fondamentaux: {
    label: "Fondamentaux",
    description: "CIA Triad, modèles de menaces et principes de sécurité",
  },
  web: {
    label: "Sécurité Web",
    description: "OWASP Top 10, XSS, injection SQL et protections",
  },
  reseaux: {
    label: "Réseaux",
    description: "Firewalls, IDS/IPS, protocoles et analyse de trafic",
  },
  cryptographie: {
    label: "Cryptographie",
    description: "Chiffrement, hashing, PKI et certificats",
  },
  pentest: {
    label: "Pentest",
    description: "Méthodologie, reconnaissance, exploitation et outils",
  },
  hardening: {
    label: "Hardening",
    description: "Sécurisation Linux, conteneurs et infrastructure",
  },
};
