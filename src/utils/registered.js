
// 自动全局注册
import Vue from 'vue'


// 物料自动注册
const widgetsContext = require.context('@/widgets/', true, /.vue/)
widgetsContext.keys().forEach(component => {
    const widgetComponent = widgetsContext(component)
    let ctrl = widgetComponent.default || widgetComponent
    let a = ctrl.name
    let b = ctrl

    // 注册组件
    Vue.component(a, b)
})

// 物料配置自动注册
const widgetsConfigContext = require.context('@/home/ls-widget-config/', true, /.vue/)
widgetsConfigContext.keys().forEach(component => {
    const widgetsConfigComponent = widgetsConfigContext(component)
    let ctrl = widgetsConfigComponent.default || widgetsConfigComponent
    let a = ctrl.name
    let b = ctrl

    // 注册组件
    Vue.component(a, b)
})

//自动导入components文件夹中的index.vue文件
// const componentsContext = require.context('@/components/', true, /.vue/)                                                                                 
// componentsContext.keys().forEach(component => {
//     const componentConfig = componentsContext(component)

//     let ctrl = componentConfig.default || componentConfig
//     let a = ctrl.name
//     let b = ctrl

//     // 注册组件
//     Vue.component(a, b)
// })

