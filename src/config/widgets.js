/**
 * 组件初始配置数据
 */
import store from '@/store'
import _ from 'lodash';
import { btnFontStyle, btnBackgroundStyle, sudokuList, fontStyle, backgroundStyle, jumpData, TopBarFontStyle } from './initData'

let widgets = [
    // 图片
    {
        name: 'ls-img',
        label: '图片',
        x: 0,
        y: 0,
        w: 375,
        h: 666,
        icon: 'icon-hebingxingzhuang',
        params: {
            value: 'https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200910-175637-128e.png',
            radius: 0,
        }
    },
    // 长文本
    {
        name: 'ls-text',
        label: '文本',
        x: 0,
        y: 0,
        w: 375,
        h: 70,
        icon: 'icon-wenzi',
        params: {
            value: "此生来生都愿识尽世间好人，读尽世间好书，看尽世间好山水，天上风景再好，从不羡慕。",
            color: "#3c3c3c",
            fontSize: 14,
        }
    },
    // 标题
    {
        name: 'ls-title',
        label: '标题',
        x: 0,
        y: 0,
        w: 375,
        h: 27,
        icon: 'icon-biaoti',
        params: {
            value: "标题",
            indentation: 0,
            fontStyle: _.cloneDeep(TopBarFontStyle),
        }
    },
    // 按钮
    {
        name: 'ls-button',
        label: '按钮',
        x: 0,
        y: 0,
        w: 375,
        h: 50,
        icon: 'icon-anniu',
        params: {
            width: 100,
            height: 50,
            radius: 0,
            value: "测试按钮",
            fontStyle: _.cloneDeep(btnFontStyle),
            backgroundStyle: _.cloneDeep(btnBackgroundStyle),
        }
    },
    // 瀑布流
    {
        name: 'ls-waterfall',
        label: '瀑布流',
        x: 0,
        y: 0,
        w: 375,
        h: 772,
        icon: 'icon-pubuliu',
        params: {
            column: 2,
            gutter: 10,
            info: [],
            // 跳转
            jump: _.cloneDeep(jumpData),
            // 静态数据
            list: [
                {
                    name: '国潮',
                    url: "http://116.62.142.85:8090/baseImg/flow-1.jpg",
                },
                {
                    name: '天涯海角',
                    url: "http://116.62.142.85:8090/baseImg/flow-2.jpg",
                },
                {
                    name: '11.11',
                    url: "http://116.62.142.85:8090/baseImg/flow-3.jpg",
                },
                {
                    name: '重阳',
                    url: "http://116.62.142.85:8090/baseImg/flow-4.jpg",
                },
                {
                    name: '端午',
                    url: "http://116.62.142.85:8090/baseImg/flow-5.jpg",
                },
                {
                    name: '中秋',
                    url: "http://116.62.142.85:8090/baseImg/flow-6.jpg",
                },
            ],

            // 接口配置数据
            dataType: 0,
            source: {
                id: '',
                data: []
            }
        }
    },
    // 列表
    {
        name: 'ls-list',
        label: '列表',
        x: 0,
        y: 0,
        w: 375,
        h: 772,
        icon: 'icon-pubuliu',
        params: {
            imgType: 'default',
            imgSize: 60,
            proportion: 80,  // 左右布局占比
            distance: 0,    // 单项垂直间距
            info: [],
            // 跳转
            jump: _.cloneDeep(jumpData),
            // 静态数据
            list: [
                {
                    name: '国潮',
                    url: "http://116.62.142.85:8090/baseImg/flow-1.jpg",
                },
                {
                    name: '天涯海角',
                    url: "http://116.62.142.85:8090/baseImg/flow-2.jpg",
                },
                {
                    name: '11.11',
                    url: "http://116.62.142.85:8090/baseImg/flow-3.jpg",
                },
                {
                    name: '重阳',
                    url: "http://116.62.142.85:8090/baseImg/flow-4.jpg",
                },
                {
                    name: '端午',
                    url: "http://116.62.142.85:8090/baseImg/flow-5.jpg",
                },
                {
                    name: '中秋',
                    url: "http://116.62.142.85:8090/baseImg/flow-6.jpg",
                },
            ],

            // 接口配置数据
            dataType: 0,
            source: {
                id: '',
                data: []
            }
        }
    },
    // 魔方导航
    {
        name: 'ls-sudoku',
        label: '魔方导航',
        x: 0,
        y: 0,
        w: 375,
        h: 79,
        icon: 'icon-icon-mofangdaohang',
        params: {
            width: 100,
            radius: 0,
            gutter: 12,
            padding: 2,
            shadow: false,
            layouts: [4],
            fontStyle: _.cloneDeep(fontStyle),
            backgroundStyle: _.cloneDeep(backgroundStyle),
            list: sudokuList,
        }
    },
    // 轮播
    {
        name: 'ls-swiper',
        label: '轮播',
        x: 0,
        y: 0,
        w: 375,
        h: 180,
        icon: 'icon-lunbo2',
        params: {
            autoplay: true,
            loop: true,
            center: true,
            pagination: true,
            imgRadius: false,
            crown: false,
            imgWidth: 100,
            imgHeight: 180,
            spaceBetween: 0,
            paginationTop: 150,
            fontStyle: fontStyle,
            jump: _.cloneDeep(jumpData),
            list: [
                {
                    name: "轮播1",
                    url: "https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200408-165620-bd6c.png",
                    jump: _.cloneDeep(jumpData),
                    text: ''
                },
                {
                    name: "轮播2",
                    url: "https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200220-111024-dded.png",
                    jump: _.cloneDeep(jumpData),
                    text: ''
                },
                {
                    name: "轮播3",
                    url: "https://st-gdx.dancf.com/gaodingx/0/uxms/design/20200602-134906-2aed.png",
                    jump: _.cloneDeep(jumpData),
                    text: ''
                },
            ],
            // 接口配置数据
            dataType: 0,
            source: {
                id: '',
                data: []
            }
        }
    },
    // 通知栏         
    {
        name: 'ls-notice-bar',
        label: '通知栏',
        x: 0,
        y: 0,
        w: 375,
        h: 50,
        icon: 'icon-guangbo1',
        params: {
            icon: 'volume-o',
            color: '#000',
            backgroundStyle: _.cloneDeep(backgroundStyle),
            list: [
                { text: '我开始播放通知啦！' },
                { text: '把你想通知的内容写进来吧！' },
            ]
        }
    },
    //空白占位
    {
        name: '',
        label: '空白占位',
        x: 0,
        y: 0,
        w: 375,
        h: 50,
        icon: 'icon-quanping',
        params: {

        }
    },
    //视频
    {
        name: 'ls-video',
        label: '视频',
        x: 0,
        y: 0,
        w: 375,
        h: 210,
        icon: 'icon-quanping',
        params: {
            // 接口配置数据
            dataType: 0,
            data: '',     // 静态数据 视频url
            source: {
                id: '',
                data: ''
            }
        },
    },
    //音乐
    {
        name: 'ls-music',
        label: '音乐',
        x: 0,
        y: 0,
        w: 375,
        h: 66,
        icon: 'icon-quanping',
        params: {
            title: '音乐',
            theme: '#fff',
            pic: 'https://static.hi-five.cn//artwork/artwork_366.jpg',
            // 接口配置数据
            dataType: 0,
            data: '',     // 静态数据 音乐url
            source: {
                id: '',
                data: ''
            }
        },
    },
]

// 注册所有组件
store.commit('setWidgetList', widgets)

export default widgets


