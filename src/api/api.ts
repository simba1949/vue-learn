import axios from 'axios';

// 创建 axios 实例
export const httpInstance = axios.create({
    // 设置请求根路径
    baseURL: "http://localhost:8080",
    // 设置请求头
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    // 设置响应格式
    responseType: 'json',
    // 设置超时时间
    timeout: 10000,
})

// 请求拦截器：在请求之前执行
httpInstance.interceptors.request.use((config) => {
        // 从浏览器的本地存储中获取 token 【localStorage、sessionStorage】
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = token;
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截器，在响应之后执行
httpInstance.interceptors.response.use(
    response => {
        if (response.status) {
            return response
        }
        return Promise.reject(response)
    },
    error => {
        return Promise.reject(error)
    }
)