export type Category =
  | 'fondamentaux'
  | 'web'
  | 'reseaux'
  | 'cryptographie'
  | 'pentest'
  | 'hardening';

export interface CategoryInfo {
  label: string;
  icon: string;
  description: string;
}

export const CATEGORIES: Record<Category, CategoryInfo> = {
  fondamentaux: {
    label: 'Fondamentaux',
    icon: '🔐',
    description: 'CIA Triad, modeles de menaces et principes de securite',
  },
  web: {
    label: 'Securite Web',
    icon: '🌐',
    description: 'OWASP Top 10, XSS, injection SQL et protections',
  },
  reseaux: {
    label: 'Reseaux',
    icon: '🛡️',
    description: 'Firewalls, IDS/IPS, protocoles et analyse de trafic',
  },
  cryptographie: {
    label: 'Cryptographie',
    icon: '🔑',
    description: 'Chiffrement, hashing, PKI et certificats',
  },
  pentest: {
    label: 'Pentest',
    icon: '🎯',
    description: 'Methodologie, reconnaissance, exploitation et outils',
  },
  hardening: {
    label: 'Hardening',
    icon: '🏰',
    description: 'Securisation Linux, conteneurs et infrastructure',
  },
};
