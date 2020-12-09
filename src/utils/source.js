import { Get, Post } from '@/utils/request'
import store from '@/store'
import Vue from 'vue';

// 获取远程数据(支持跨域)
export async function getSourceData(option) {
    let data = {
        method: option.method,
        url: option.url,
    }

    // 整合请求参数
    if (option.params && option.params.length > 0) {
        let params = option.params.map(item => {
            let result = { key: item.key }
            if (item.custom) {
                let data = store.state.pool.poolData.find(d => d.id == item.pool_property.id)
                result.value = data.value
            } else {
                result.value = item.value
            }
            return result
        })
        data.params = {}
        params.map(p => {
            data.params[p.key] = p.value
        })
        // console.log('参数');
        // console.log(data.params);
    }

    let result = await Post("http://localhost:3000/source/cross", data)
    return result
}

// 判断过滤器返回数据是否符合
export function filterTrading(data) {

    if (data && Array.isArray(data)) {
        return true
    } else {
        console.warn('滤器处理返回数据:');
        console.warn(data);
        Vue.prototype.$notify({
            title: '过滤失败',
            message: `经过滤器处理的数据必须是数组（当前返回结构请打开控制台查看）`,
            type: 'warning'
        });
        return false
    }
}

// 过滤器处理数据
export function filterData(data, code) {
    if (!(data || code)) {
        console.warn('数据或过滤器代码不能为空');
        return
    }

    let result = undefined
    let codeTop = "function filter (data) {\n ";
    let codeBottom = "\n}\n  result = filter(data)\n  ";
    // 拼接代码
    code = codeTop + code + codeBottom
    // eval 执行 string 方法
    eval(code);

    if (filterTrading(result)) {
        return result
    } else { return false }
}

// 获得远程数据最终处理数据
export async function getResultData(option) {
    let data = await getSourceData(option)
    let result = await filterData(data, option.code)
    return result
}