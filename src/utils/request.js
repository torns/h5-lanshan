// http.js
import axios from 'axios'

axios.defaults.timeout = 20000

axios.defaults.headers.post['Content-Type'] = 'application/json'


axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

// get 请求
export function Get(
  url,
  params = {}
) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
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
    axios({
      url,
      method: 'post',
      // 发送的数据
      data
    }).then(res => {
      resolve(res.data)
    })
  })
}
