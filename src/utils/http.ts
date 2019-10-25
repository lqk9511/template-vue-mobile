import axios from 'axios'

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
    const { data } = response
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
