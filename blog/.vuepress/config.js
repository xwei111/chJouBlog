module.exports = {
    title: '追旅',
    description: '分享笔记，技术博客',
    base: '/chJouBlog/',
    theme: '@vuepress/blog',
    themeConfig: {
        comment: {
            service: 'vssue',
            owner: 'xwei111', // github用户名
            repo: 'chJouBlog', // 仓库名
            clientId: 'f549469e9f76d7c8a7bd',
            clientSecret: 'a19a3d333e6b0996ed6dbf80ac5c9d6f61d0db35',
        },
    }
}