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
    proxy: {
        '/api': {
            target: 'http://117.136.190.162:80',
            ws: true,
            changOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
        
    }
}
}
