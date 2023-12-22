import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TypeScript-ohjelmointi',
  tagline: 'Tervetuloa tutustumaan TypeScript-kieleen ja sen tyyppijärjestelmään!',
  favicon: 'img/favicon.ico',
  trailingSlash: true,
  deploymentBranch: 'gh-pages',

  // Set the production url of your site here
  url: 'https://typescript-ohjelmointi.github.io/',
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
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: undefined,
    docs: {
      sidebar: {
        autoCollapseCategories: false
      }
    },
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
          label: 'Intro',
        },
        {
          href: '/docs/category/typescriptin-perusteet/',
          label: 'Perusteet',
          position: 'left',
        },
        {
          href: '/docs/category/tyypit/',
          label: 'Tyypit',
          position: 'left',
        },
        {
          href: '/docs/category/harjoitukset/',
          label: 'Harjoitukset',
          position: 'left',
        },
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
          title: 'Oppimateriaalia',
          items: [
            {
              label: 'TypeScriptin dokumentaatio',
              to: 'https://www.typescriptlang.org/docs/',
            },
            {
              label: 'TypeScript YouTubessa',
              to: 'https://www.youtube.com/results?search_query=typescript',
            },
          ],
        },

        {
          title: 'TypeScript',
          items: [
            {
              label: 'typescriptlang.org',
              href: 'https://www.typescriptlang.org/',
            },
            {
              label: 'Stack Overflow (tagi: TypeScript)',
              href: 'https://stackoverflow.com/questions/tagged/typescript',
            },
            {
              label: 'TypeScriptin lähdekoodit',
              href: 'https://github.com/microsoft/TypeScript',
            },
          ],
        },
        {
          title: 'Kurssi',
          items: [
            {
              label: 'Opintojaksokuvaus',
              href: 'https://opinto-opas.haaga-helia.fi/course_unit/SOF014AS3A',
            },
            {
              label: 'Tämän sivuston lähdekoodit',
              href: 'https://github.com/typescript-ohjelmointi/typescript-ohjelmointi.github.io/',
            },
          ],
        },
      ],
      copyright: `Tämä sivusto on rakennettu Docusaurus-työkalulla`,
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
