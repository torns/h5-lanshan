import { poolGetById } from '@/api/pool.js'

const state = {
    viewProject: {},
}

const mutations = {
}

const actions = {
    async initView({ state, commit }, project) {
        state.viewProject = project
    },
}

export default {
    state,
    mutations,
    actions
}
