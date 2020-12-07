const state = {
    poolData: []
}

const mutations = {
    replacePool(state, list) {
        state.poolData = list
    }
}

export default {
    state,
    mutations
}
