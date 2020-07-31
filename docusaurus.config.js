module.exports = {
  title: "Hexad開発者ドキュメント",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "noplan-inc", // Usually your GitHub org/user name.
  projectName: "hexad-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Hexad開発者ドキュメント",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "ドキュメント",
          position: "left",
        },
        {
          href: "https://hexad.jp",
          label: "Hexad",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/hexad",
            },
            {
              label: "Discord@公式開発者コミュニティ",
              href: "https://discord.gg/QHu7Uz8",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/noplan_inc",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Hexad公式HP",
              href: "https://hexad.jp",
            },
            {
              label: "no plan inc公式HP",
              href: "https://noplan-inc.com",
            },
            {
              label: "GitHub",
              href: "https://github.com/noplan-inc/hexad-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} no plan inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // routeBasePath: "",
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "getting-started/quick-tour",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/noplan-inc/hexad-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
