import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TypeScript-ohjelmointi',
  tagline: '',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://typescript-ohjelmointi.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'typescript-ohjelmointi', // Usually your GitHub org/user name.
  projectName: 'typescript-ohjelmointi.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: undefined,
    navbar: {
      title: 'TypeScript-ohjelmointi',
      // logo: {
      //   alt: 'TypeScript-ohjelmointi',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Materiaalit',
        },
        { to: '/blog', label: 'Kurssi', position: 'left' },
        {
          href: 'https://github.com/typescript-ohjelmointi/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'TypeScript documentation',
              to: 'https://www.typescriptlang.org/docs/',
            },
            {
              label: 'TypeScript at YouTube',
              to: 'https://www.youtube.com/results?search_query=typescript',
            },
          ],
        },

        {
          title: 'Community',
          items: [
            {
              label: 'typescriptlang.org',
              href: 'https://www.typescriptlang.org/',
            },
            {
              label: 'TypeScript at Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/typescript',
            },
            {
              label: 'TypeScript at GitHub',
              href: 'https://github.com/microsoft/TypeScript',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `This website was built with Docusaurus.`,
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
