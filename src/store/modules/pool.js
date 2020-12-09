const state = {
    poolData: []
}

const mutations = {
    replacePool(state, list) {
        state.poolData = list
    },
    setPoolData(state, config) {
        let item = state.poolData.find(item => item.id == config.id)
        item.value = config.value
    },
}

export default {
    state,
    mutations
}
