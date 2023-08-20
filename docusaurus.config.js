// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Henhen1227 Docs',
  tagline: 'Learn how to use Henhen1227\'s projects',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.henhen1227.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages you don't need these.
  organizationName: 'Github', // Usually your GitHub org/username.
  projectName: 'henhen1227-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/henhen1227/henhen1227-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Henhen1227 Docs',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'bsDocsSidebar',
            position: 'left',
            label: 'Bluetooth Serial',
          },
          {
            href: 'https://henhen1227.com/overview',
            label: 'Projects',
            position: 'left'
          },
          {
            href: 'https://github.com/hen1227/henhen1227-docs',
            label: 'GitHub',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Bluetooth Serial Docs',
            items: [
              {
                label: 'Bluetooth Serial',
                to: '/bs-docs/intro',
              }
              // {
              //   label: 'Bluetooth Serial API',
              //   to: '/bs-docs/api',
              // }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/bluetooth-serial',
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main Site',
                to: 'https://henhen1227.com',
              },
              {
                label: 'Other Projects',
                to: 'https://henhen1227.com/overview',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hen1227/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Henhen1227`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
