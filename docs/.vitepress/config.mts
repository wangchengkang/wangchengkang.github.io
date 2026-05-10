import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'wangchengkang',
  description: 'Personal site',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Tech', link: '/tech/' },
      { text: 'Life', link: '/life/' },
      { text: 'Misc', link: '/misc/' },
      { text: '项目', link: '/projects' },
      { text: '关于', link: '/about' }
    ],
    sidebar: {
      '/tech/': [
        {
          text: 'Tech',
          items: [
            { text: 'Index', link: '/tech/' }
          ]
        }
      ],
      '/life/': [
        {
          text: 'Life',
          items: [{ text: 'Index', link: '/life/' }]
        }
      ],
      '/misc/': [
        {
          text: 'Misc',
          items: [{ text: 'Index', link: '/misc/' }]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangchengkang' }
    ],
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © ' + new Date().getFullYear()
    }
  }
})
