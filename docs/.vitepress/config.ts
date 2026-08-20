import { defineConfig } from 'vitepress'

// 侧边栏：每新增一个项目，在此追加一组条目（见 README「新增项目」）
const projectsSidebar = [
  {
    text: '项目总览',
    link: '/projects/',
  },
  {
    text: '猫猫日历 NekoReki',
    collapsed: false,
    items: [
      { text: '法律文件索引', link: '/projects/nekoreki/' },
      { text: '隐私政策', link: '/projects/nekoreki/privacy' },
      { text: 'Privacy Policy', link: '/projects/nekoreki/privacy-en' },
    ],
  },
]

export default defineConfig({
  lang: 'zh-CN',
  title: 'BoxCat 法律中心',
  description: 'BoxCat Team 各项目隐私政策等法律文件的官方发布站点',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#f06292' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目总览', link: '/projects/' },
      { text: '隐私政策', link: '/projects/nekoreki/privacy' },
    ],
    sidebar: projectsSidebar,
    footer: {
      message: '© 2026 BoxCat. All rights reserved.',
      copyright: 'BoxCat Team 各项目隐私政策等法律文件的官方发布站点。',
    },
    docFooter: { prev: '上一页', next: '下一页' },
    outline: { label: '本页目录', level: [2, 3] },
    lastUpdated: { text: '更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    langMenuLabel: '选择语言',
  },
})
