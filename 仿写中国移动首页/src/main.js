import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Axios from 'axios'  //导入axios

import ElementUI from 'element-ui'

import VueLazyLoad from 'vue-lazyload'

import 'element-ui/lib/theme-chalk/index.css'

import '@/style/base.scss'

Vue.prototype.$axios = Axios;

Vue.use(ElementUI)

//使用懒加载插件
Vue.use(VueLazyLoad,{
  loading: require('assets/img/zhanweitu.jpg')
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

