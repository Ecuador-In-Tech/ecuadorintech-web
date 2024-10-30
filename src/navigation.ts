import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/'),
    },
    {
      text: 'Comunidades',
      href: getPermalink('/'),
    },
    {
      text: 'Eventos',
      href: getPermalink('/'),
    },
  ],
  actions: [{ text: 'Involúcrate', href: getPermalink('/#volunteers'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Comunidad',
      links: [
        { text: 'Directorio', href: '#' },
        { text: 'Eventos', href: '#' },
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { text: 'Equipo', href: '#' },
        { text: 'Código de Conducta', href: '#' },
      ],
    },
    {
      title: 'Donaciones',
      links: [{ text: 'Quiero donar', href: '#' }],
    },
    {
      title: 'Oportunidades',
      links: [{ text: 'Voluntariado', href: '#' }],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y Condiciones', href: getPermalink('/terms') },
    { text: 'Políticas y Privacidad', href: getPermalink('/privacy') },
    { text: 'Código de Conducta', href: getPermalink('/coc') },
  ],
  socialLinks: [{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/Ecuador-In-Tech' }],
};
