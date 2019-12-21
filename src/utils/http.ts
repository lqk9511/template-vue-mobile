import axios from 'axios'
import { CODE_OK } from 'config/httpStatusCode'
import { Toast } from 'vant'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers = {
    //   Authorization: `Bearer ${getToken()}`.trim()
    // }
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    const { config, data } = response
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line
      console.log(`JEFF: ${config.url}`, response)
    }
    if (data.code !== CODE_OK) {
      // 状态码不对时候
      data.msg && Toast(data.msg)
    }
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
