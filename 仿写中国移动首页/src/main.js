import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Axios from 'axios'  //导入axios

//将axios挂载到原型上

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import '@/style/base.scss'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
Vue.prototype.$axios = Axios;

