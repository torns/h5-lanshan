// http.js
import axios from 'axios'
import store from '../store'
import Vue from 'vue'

// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL, // url = base url + request url
  timeout: 20000 // request timeout
})



// request interceptor
request.interceptors.request.use(
  config => {
    let token = store.getters.token

    if (token) {
      console.log('获取到token');
      config.headers['Authorization'] = token
    }

    return config
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    if (['10002'].includes(response.data.status)) {
      console.log('xxxjinlai');
      
      Vue.prototype.$notify({
        title: '用户未登录',
        message: '请登录后进行页面新增操作',
        type: 'warning'
      });

      return Promise.reject(response)
    }

    return response
  }
)

// get 请求
export function Get(
  url,
  params = {}
) {
  return new Promise((resolve, reject) => {
    request.get(url, {
      params
    }).then((res) => {
      resolve(res.data)
    }).catch(err => {
      reject(err)
    })
  })
}

// post请求
export function Post(
  url,
  data = {},
) {
  return new Promise((resolve, reject) => {
    request({
      url,
      method: 'post',
      // 发送的数据
      data
    }).then(res => {
      resolve(res.data)
    })
  })
}
