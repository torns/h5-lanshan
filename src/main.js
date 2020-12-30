import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Get, Post } from '@/utils/request'
import _ from 'lodash';
import '@/utils/registered'
import '@/config/widgets.js'
import '@/styles/index.scss'



// element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/element-#82AAF1/index.css'
Vue.use(Element)


// vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// loading 插件
import Loading from '@/plugin/index.js'
Vue.use(Loading)


// 过滤器
import * as filters from '@/utils/filters.js'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


Vue.config.productionTip = false
Vue.prototype._ = _
Vue.prototype.$get = Get
Vue.prototype.$post = Post

// 图片上传
import Imgpond from 'imgpond'
import PicViewer from 'pic-viewer'
Vue.use(PicViewer)
Vue.use(Imgpond, {
  Post,
  url: process.env.VUE_APP_BASE_URL + 'upload',
  param: {
    domainId: 4,
    dir: 'img',
  },
  sizeExceededWarningHTML: `<a href="https://www.kdocs.cn/l/smLPgaIjt" target="_blank">点击查看压缩指南</a>`,
  poweredBy: 'element',
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
