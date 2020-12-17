import { poolGetById } from '@/api/pool.js'

const state = {
    viewProject: {},
}

const mutations = {
}

const actions = {
    async initView({ state, commit }, project) {
        state.viewProject = project
        // 初始化数据池
        let res = await poolGetById({ id: project.id })
        commit('replacePool', res.data.list)
    },
}

export default {
    state,
    mutations,
    actions
}
