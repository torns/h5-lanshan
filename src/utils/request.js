// http.js
import axios from 'axios'

import store from '../store'

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
      config.headers['Authorization'] = token
    }

    return config
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
  params = {},
) {
  return new Promise((resolve, reject) => {
    request.post({
      url,
      params
    }).then(res => {
      resolve(res.data)
    })
  })
}
