import { mapGetters, mapMutations } from "vuex";
import { isNull } from '@/utils/tools.js'
import wx from 'weixin-js-sdk';
import { getResultData } from "@/utils/source";

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
        than: {
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
        ...mapGetters(["widgetList", "project"]),
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

    methods: {
        ...mapMutations(["selectedPage"]),
        // 跳转
        jump(data) {
            // 不跳转
            if (data.type == 0) {
                return
            }

            // 跳转外链
            if (data.type == 1) {
                let a = document.createElement("a");
                a.setAttribute("href", data.pathData);
                a.click();
                document.getElementsByTagName("body")[0].appendChild(a);
            }

            // 跳转内部页面
            if (data.type == 2) {
                // 预览模式
                if (this.view) {
                    let index;
                    this.project.pages.map((page, i) => {
                        if (page.id == data.pathData)
                            index = i
                    })
                    this.$router.push({ name: 'custom' + index })
                } else {
                    // 开发模式
                    this.selectedPage(data.pathData)
                }
            }

            // 跳转内部小程序
            if (data.type == 3) {

            }
        },
        // 获取远程数据
        async getSourceData() {
            this.params.source.data = await getResultData(id);
        }
    }
}