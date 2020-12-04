import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Get, Post } from '@/utils/request'
import _ from 'lodash';
import '@/styles/index.scss'
import '@/utils/registered'
import '@/config/widgets.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/element-#82AAF1/index.css'
Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype._ = _
Vue.prototype.$get = Get
Vue.prototype.$post = Post


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
