module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'services': '@/services',
        'pages': '@/pages',
      },
    }
  },
  devServer: {
    proxy: {//配置跨域
        '/api': {
            target: 'http://www.10086.cn',
            ws: true,
            changOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
        
    }
}
}
