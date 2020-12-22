import lsLoading from './ls-loading'
import Vue from 'vue'

export default {
    install(Vue) {
        Vue.directive('ls-loading', Loading)
    }
}

const Mask = Vue.extend(lsLoading)

const Loading = {
    // 第一次绑定到元素时调用
    bind(el, binding, vnode) {
        console.log('.......');
        console.log(el);
        console.log(binding);
        console.log(vnode);

        const mask = new Mask({
            el: document.createElement('div'),
        })
        // 通过 el 设置数据，方便后面使用
        el.instance = mask
        el.mask = mask.$el

        // 控制显隐
        binding.value && toggleLoading(el, binding)
    },
    // 所在组件的 VNode 更新时调用--比较更新前后的值
    update(el, binding) {
        if (binding.oldValue !== binding.value) {
            toggleLoading(el, binding)
        }
    },
    // 指令与元素解绑时调用
    unbind(el, binding) {
        el.instance && el.instance.$destroy()
    }

}

// 更新显隐
const toggleLoading = (el, binding) => {
    if (binding.value) {
        Vue.nextTick(() => {
            // 控制loading组件显示
            el.instance.show = true
            // 插入到目标元素
            el.appendChild(el.mask)
        })
    } else {
        el.instance.show = false
    }
}