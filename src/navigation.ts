import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Nosotros',
      href: getPermalink('/#about'),
    },
    {
      text: 'Comunidades',
      href: getPermalink('/#community'),
    },
    {
      text: 'Eventos',
      href: getPermalink('/'),
    },
  ],
  actions: [
    {
      text: 'Quiero donar',
      href: 'https://docs.google.com/forms/d/e/1FAIpQLSdnnzAHASxIOTRkXE9oS1lgVU3gtb6ZyCeaU0ZVKqN4DFI1eQ/viewform',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Comunidad',
      links: [
        { text: 'Directorio', href: getPermalink('/#community') },
        { text: 'Eventos', href: '#' },
      ],
    },
    {
      title: 'Nosotros',
      links: [
        { text: 'Equipo', href: '#' },
        { text: 'Código de Conducta', href: getPermalink('/coc') },
      ],
    },
    {
      title: 'Donaciones',
      links: [
        {
          text: 'Quiero donar',
          href: 'https://docs.google.com/forms/d/e/1FAIpQLSdnnzAHASxIOTRkXE9oS1lgVU3gtb6ZyCeaU0ZVKqN4DFI1eQ/viewform',
        },
      ],
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
  socialLinks: [
    {
      ariaLabel: 'Github',
      icon: 'tabler:brand-github',
      href: 'https://github.com/Ecuador-In-Tech',
    },
  ],
};
