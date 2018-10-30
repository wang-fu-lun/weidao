import axios from 'axios'
import { Indicator } from 'mint-ui'
/* console.log(process.env.NODE_ENV) */
// 根据运行的环境变量来判断是不是开发模式
const isDev = process.env.NODE_ENV === 'development'
// 创建一个实例，在里面配置baseURL,方便后面的时候不需要再写一长串公共的URL
const ajax = axios.create({
  baseURL: isDev ? 'http://rap2api.taobao.org/app/mock/86311/api' : '真实线上地址'
})

// 拦截请求，在请求发送之前显示一个Toast
ajax.interceptors.request.use((config) => {
  Indicator.open('加载中...')
  return config
})

// 拦截响应，在响应后 关闭
ajax.interceptors.response.use((resp) => {
  setTimeout(() => {
    Indicator.close()
  }, 500)
  // 手动配置隐藏
  return resp
})

// 获取分类商品列表
export const prodcuts = (id) => {
  return ajax.get(`/prod/id=${id}`)
}
