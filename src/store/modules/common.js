import { getRandomCode } from '@/utils/tools.js'
import _ from 'lodash';



const state = {
    project: {},           // 项目
    widgetPage: {},        // 当前页面
    currentWidget: {},     // 当前拖拽物料
    chooseWidget: {},      // 当前操作物料
    widgetList: [],        // 物料选择列表
    widgetRef: {},         // page页面widget的ref集合
    widgetLocation: {},    // 拖拽物料入页面位置
    showConfig: false,     // 物料配置显隐
}

const mutations = {
    // 重置项目
    resetProject(state, project) {
        if (project) {
            state.project = project
            state.widgetPage = project.pages[0]
        } else {
            state.project = {
                id: undefined,     // 项目id
                name: '',          // 项目名字
                pages: []
            }
            state.widgetPage = state.project.pages[0]
            addPage(state, true)
        }
    },
    // 新增页面
    pushPage(state) {
      
        addPage(state)
    },
    // 删除页面
    deletePage(state, id) {
        console.log('deletePage');
        if (!id) {
            return
        }
        let list = state.project.pages
        console.log(state.project.pages[0]);

        for (let i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                state.widgetPage = state.project.pages[0]
                resetWidget(state)
                list.splice(i, 1)
            }
        }

    },
    // 选中页面
    selectedPage(state, id) {
        state.showConfig = false
        state.widgetPage = state.project.pages.find(page => page.id == id)
        resetWidget(state)
    },
    // 重置初始页面
    resetPage(state, page) {
        state.showConfig = false
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
        state.showConfig = true
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
        // 重置操作物料视图框高度
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

// 页面新增
function addPage(state, init) {
    let page = {
        id: init ? '000000' : getRandomCode(6),
        name: init ? '主页' : '自定义页面',
        config: {
            backgroundType: 2,
            backgroundImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2292201188,3933177076&fm=26&gp=0.jpg',
        },
        list: []
    }
    state.showConfig = false
    resetWidget(state)
    widgetPushPage(page.list, state.widgetList[0])
    widgetPushPage(page.list, state.widgetList[5])
    widgetPushPage(page.list, state.widgetList[6])

    state.project.pages.push(page)
    state.widgetPage = page
}

// 重置当前操作物料
function resetWidget(state) {
    // state.chooseWidget = {}
}

export default {
    state,
    mutations
}
