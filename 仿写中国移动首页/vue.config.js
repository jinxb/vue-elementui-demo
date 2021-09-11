module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '中国移动官方网站'
        return args
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'services': '@/services',
        'pages': '@/pages',
        'utils': '@/utils',
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
