module.exports = {
    title: '追旅',
    description: '分享笔记，技术博客',
    base: '/chJouBlog/',
    theme: '@vuepress/blog',
    themeConfig: {
        nav: [
            {
                text: 'Blog',
                link: '/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
            {
                text: 'Author',
                link: '/author',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/xwei111/chJouBlog',
            },
            {
                text: 'XW-UI',
                link: 'https://xwei111.github.io',
            },
        ],
        footer: {
            contact: [
                { type: 'github', link: 'https://github.com/xwei111/chJouBlog' },
                { type: 'mail', link: 'mailto:17681828640@163.com' },
            ],
            copyright: [
                { text: '追旅 © 2020', link: '' }
            ]
        },
        comment: {
            service: 'vssue',
            owner: 'xwei111', // github用户名
            repo: 'chJouBlog', // 仓库名
            clientId: 'f549469e9f76d7c8a7bd', // 客户端 ID
            clientSecret: 'a19a3d333e6b0996ed6dbf80ac5c9d6f61d0db35', // 客户端密钥
        },
        summaryLength: 70
    },
    pwa: true
}