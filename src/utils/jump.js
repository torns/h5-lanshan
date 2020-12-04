import Vue from 'vue'

export default function (data) {
    if (data.webPath) {
        console.log('jump');

        Vue.prototype.$router.push(data.webPath);
    }

    if (data.wechatPath) {

    }
}