// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GeneticScores.org platform documentation',
  //tagline: 'Dinosaurs are cool',
  //favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.geneticscores.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'ebi-gdp', // Usually your GitHub org/user name.
  // projectName: 'platform-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: ['https://assets.emblstatic.net/vf/v2.5.20/css/styles.css'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
          docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ebi-gdp/platform-docs/edit/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-9NL8X076KX',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/logo.png',
      navbar: {
        title: 'GeneticScores.org documentation',
        logo: {
          alt: 'INTERVENE Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://geneticscores.org/',
            label: 'GeneticScores.org',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `This documentation is public domain under the CC0. <br /> INTERVENE has received funding from the European Union's Horizon 2020 research and innovation programme under grant agreement No 101016775`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};

module.exports = config;
