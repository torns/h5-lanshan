const state = {
    poolData: []
}

const mutations = {
    replacePool(state, list) {
        state.poolData = list
    },
    setPoolData(state, config) {
        console.log('setPoolData');

        console.log(config.id);
        console.log(config.value);


        let item = state.poolData.find(item => item.id == config.id)
        item.value = config.value
    }
}

export default {
    state,
    mutations
}
