import { mapGetters, mapMutations } from "vuex";
import { isNull } from '@/utils/tools.js'
import wx from 'weixin-js-sdk';

export default {
    props: {
        item: {
            type: Object,
            require: true
        },
        view: {
            type: Boolean,
            default: false
        },
        contraction: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            // params: _.cloneDeep({})
        }
    },
    computed: {
        ...mapGetters(["widgetList"]),
        itemParams() {
            return this.item.params
        },
        baseParams() {
            let item = this.widgetList.find(item => item.name == this.item.name)
            return this._.cloneDeep(item.params)
        },
        params() {
            return this.item.params
        }
    },
    watch: {
        // 'item.params': {
        //     handler(val) {
        //         let self = this
        //         console.log('改变属性');

        //         for (let key in this.baseParams) {
        //             this.$set(this.params, key, this.getValue(key))
        //         }
        //     },
        //     deep: true,
        //     immediate: true,
        // }
    },
    methods: {
        ...mapMutations(["selectedPage"]),
        getValue(key, view = false) {
            if (isNull(this.item.params[key])) {
                return this.baseParams[key]
            } else {
                return this.item.params[key]
            }
        },
        jump(data, view = false) {
            console.log('jump');
            console.log(data);
            // 跳转外链
            if (data.type == 1) {
                let a = document.createElement("a");
                a.setAttribute("href", data.pathData);
                a.click();
                document.getElementsByTagName("body")[0].appendChild(a);
            }

            if (data.type == 2) {
                console.log('aaa');

                if (view) {

                } else {
                    console.log('ccccc');

                    this.selectedPage(data.pathData)
                }
            }

            // 跳转内部小程序
            if (data.type == 3) {

            }
        }
    }
}