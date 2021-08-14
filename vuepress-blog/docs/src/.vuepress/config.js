const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'My Blog',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
    "base": "/",    //默认/
    markdown: {
        lineNumbers: false   //是否在代码块中显示行号
    },

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        docsDir: '',
        editLinkText: '',
        editLinks: false,
        editLinkText: '',
        lastUpdated: false,
        sidebarDepth: 3,  //侧边栏自动显示当前激活页面中标题的链接
        nav: [
            // 每个{}中是导航选项，link可以跳转其他路由，或者链接
            {
                text: '指南',
                link: '/guide/',
            },
            // 同上，但是还可以设置成有下拉功能的子选项
            {
                text: '组件',
                items: [
                    { text: '组件1', link: '/widget/one' },
                    { text: '组件2', link: '/widget/two' },
                    { text: '组件3', link: '/widget/three' }
                ]
            },
            {
                text: 'VuePress',
                link: 'https://v1.vuepress.vuejs.org'
            }
        ],
        sidebar: {
            // 侧边导航栏内容
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false, //是否折叠侧边栏
                    children: [
                        '', //站内的每一个文件夹下的 README.md 或者 index.md 文件都会被自动编译为 index.html，对应的链接将被视为 /
                        //'using-vue',
                    ]
                }
            ],
            '/widget/': [
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        'one', 'two', 'three'
                    ]
                }
            ]
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}
