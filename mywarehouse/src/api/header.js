// 对axios进行拦截
import axios from "axios";
import { ElMessageBox } from 'element-plus'

let instance = axios.create({
    // 浏览器响应返回的数据类型
    responseType: 'json',
    // 自定义请求头
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.response.use(response => {
    return response
}, err => {
    if (err.response) {
        let ERRS = err.response.status// 返回的状态码
        let MSG = err.response.data.msg.msg// 返回的提示信息
        let errdata = ERRS == 401 ? MSG : "服务器错误"// 只要返回的状态码不是401，那么就提示服务器错误

        switch (ERRS) {
            case 401:
                ElMessageBox.alert(errdata, '信息提示', {
                    confirmButtonText: '确认',
                    type: 'error',
                })
                    .then(res => {
                        // 跳转到登录界面
                        window.location.href = '/'
                    })
                    .catch(err => {
                        window.location.href = '/'
                    })
                break;
        }
    }
    return Promise.reject(error.response.data)
})

export default instance