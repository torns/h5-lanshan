
import Vue from 'vue'
//自动导入components文件夹中的index.vue文件
const componentsContext = require.context('@/components/', true, /.vue/)
componentsContext.keys().forEach(component => {
    const componentConfig = componentsContext(component)

    const ctrl = componentConfig.default || componentConfig
    const a = ctrl.name
    const b = ctrl
    

    // 注册组件
    Vue.component(a, b)
})