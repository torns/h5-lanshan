import { login, getUserInfo, test } from "@/api/user";
import { setLocalStorage, getLocalStorage, removeLocalStorage } from '@/utils/storage'
const state = {
    token: getLocalStorage('token'),
    userInfo: getLocalStorage('userInfo') || {}
}

const mutations = {
    SET_TOKEN(state, token) {
        state.token = token
    },
    SET_USERINFO(state, userInfo) {
        state.userInfo = userInfo
    }
}

const actions = {
    async userLogin({ state, commit }, form) {
        let res = await login(form)
        
        if (res.status == 10000) {
            commit('SET_TOKEN', res.token)
            commit('SET_USERINFO', res.userInfo)
            setLocalStorage('token', res.token)
            setLocalStorage('userInfo', res.userInfo)
            
            await test()
        }
        return res
    }
}

export default {
    state,
    mutations,
    actions
}