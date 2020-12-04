import { getRandomCode } from '@/utils/tools.js'
import _ from 'lodash';



const state = {
    currentWidget: {},    // 当前拖拽组件
    chooseWidget: {},     // 当前操作组件
    widgetList: [],       // 组件选择列表
    widgetPage: {},        // 页面
    widgetRef: {},         // page页面widget的ref集合
    widgetLocation: {},
}

const mutations = {
    // 重置初始页面
    resetPage(state, page) {
        console.log(page);

        if (page) {
            state.widgetPage = page
        } else {
            state.widgetPage = {
                id: undefined,     // 页面id
                name: '',          // 页面名字
                config: {
                    backgroundType: 2,
                    backgroundImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2292201188,3933177076&fm=26&gp=0.jpg',
                },
                list: []
            }
            widgetPushPage(state.widgetPage.list, state.widgetList[0])
            widgetPushPage(state.widgetPage.list, state.widgetList[5])
            widgetPushPage(state.widgetPage.list, state.widgetList[6])
        }

    },
    // 拖拽当前物料模板
    setCurrentWidget(state, name) {
        let currentWidget = state.widgetList.find(item => item.name == name)
        state.currentWidget = _.cloneDeep(currentWidget)
    },
    // 设置物料模板列表
    setWidgetList(state, list) {
        state.widgetList = list
    },
    // 选中页面当前物料
    setChooseWidget(state, widget) {
        state.chooseWidget = widget
    },
    setwidgetLocation(state, location) {
        state.widgetLocation = location
    },
    // 页面添加物料
    pushWidgetPageList(state, widget) {
        widgetPushPage(state.widgetPage.list, widget)
    },
    // 页面删除物料
    deleteWidget(state, id) {
        if (!id) {
            return
        }
        let list = state.widgetPage.list
        for (let i = 0; i < list.length; i++) {
            if (list[i].i == id) {
                list.splice(i, 1)
            }
        }
        state.chooseWidget = {}
    },
    setWidgetRef(state, refs) {
        state.widgetRef = refs
    },
    resetWidgetView(state, id) {
        if (!state.widgetRef.widgetList) {
            console.log('DOM widgetList 还未初始化');
            return
        }
        // 重置操作组件视图框高度
        let handleWidgetData = state.widgetPage.list.find(item => item.i == id)
        let handleWidgetRef = state.widgetRef.widgetList.find(item => item.id == id)
        handleWidgetData.h = handleWidgetRef.children[0].offsetHeight

        // 刷新 vue-grid-layout 布局
        state.widgetRef.gridLayout.layoutUpdate()
    }
}

// 物料加入页面
function widgetPushPage(list, widget) {
    let widgetItem = _.cloneDeep(widget)
    widgetItem.i = getRandomCode()
    list.push(widgetItem)
}

export default {
    state,
    mutations
}
