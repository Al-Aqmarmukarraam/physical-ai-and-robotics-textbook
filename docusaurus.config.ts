import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics — Essentials',
  tagline: 'An AI-Native Textbook for Modern Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-username.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Physical-AI-&-Humanoid-Robotics-book',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-username', // Usually your GitHub org/user name.
  projectName: 'Physical-AI-&-Humanoid-Robotics-book', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-username/Physical-AI-&-Humanoid-Robotics-book/edit/main/docs/',
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Physical AI & Humanoid Robotics Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {
          type: 'dropdown',
          label: 'Chapters',
          position: 'left',
          items: [
            {label: 'Chapter 1: Introduction to Physical AI', to: '/docs/introduction'},
            {label: 'Chapter 2: Basics of Humanoid Robotics', to: '/docs/humanoid-robotics'},
            {label: 'Chapter 3: ROS 2 Fundamentals', to: '/docs/ros2-fundamentals'},
            {label: 'Chapter 4: Digital Twin Simulation', to: '/docs/digital-twin-simulation'},
            {label: 'Chapter 5: Vision-Language-Action Systems', to: '/docs/vision-language-action'},
            {label: 'Chapter 6: Capstone: Simple AI-Robot Pipeline', to: '/docs/capstone-pipeline'},
          ],
        },
        {to: '/docs/intro', label: 'About', position: 'left'},
        {
          href: 'https://github.com/your-username/Physical-AI-&-Humanoid-Robotics-book',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chapters',
          items: [
            {
              label: 'Chapter 1: Introduction to Physical AI',
              to: '/docs/introduction',
            },
            {
              label: 'Chapter 2: Basics of Humanoid Robotics',
              to: '/docs/humanoid-robotics',
            },
            {
              label: 'Chapter 3: ROS 2 Fundamentals',
              to: '/docs/ros2-fundamentals',
            },
            {
              label: 'Chapter 4: Digital Twin Simulation',
              to: '/docs/digital-twin-simulation',
            },
            {
              label: 'Chapter 5: Vision-Language-Action Systems',
              to: '/docs/vision-language-action',
            },
            {
              label: 'Chapter 6: Capstone: Simple AI-Robot Pipeline',
              to: '/docs/capstone-pipeline',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/your-username/Physical-AI-&-Humanoid-Robotics-book',
            },
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: '/privacy',
            },
            {
              label: 'Terms of Service',
              to: '/terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
