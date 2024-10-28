import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
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
  actions: [{ text: 'Involúcrate', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Comunidad',
      links: [
        { text: 'Directorio de comunidades', href: '#' },
        { text: 'Oportunidades', href: '#' },
        { text: 'Eventos', href: '#' },
        { text: 'Donaciones', href: '#' },
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { text: 'Misión y visión', href: '#' },
        { text: 'Equipo', href: '#' },
        { text: 'Código de Conducta', href: '#' },
      ],
    },
    {
      title: 'Donaciones',
      links: [{ text: 'About', href: '#' }],
    },
    {
      title: 'Oportunidades',
      links: [
        { text: 'Voluntariado', href: '#' },
        { text: 'Trabajo', href: '#' },
        { text: 'Otros', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made by <a class="text-secondary underline dark:text-secondary" href="https://onwidget.com/">Ecuador in Tech team</a> · All rights reserved.
  `,
};
