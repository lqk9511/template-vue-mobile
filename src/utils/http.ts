import axios from "axios";
import { CODE_OK } from "config/httpStatusCode";
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 60000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers = {
    //   Authorization: `Bearer ${getToken()}`.trim()
    // }
    return config;
  },
  error => {
    // Do something with request error
    Promise.reject(error);
  }
);

// response拦截器
service.interceptors.response.use(
  response => {
    const { data } = response;
    if (process.env.NODE_ENV !== "production")
      console.log("TCL: data", response);
    if (data.code === CODE_OK) {
      return data;
    } else {
      // 状态码不对时候
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
