// 字体初始样式 (通用)
export let fontStyle = {
    fontSize: 12,
    letterSpacing: 0,
    fontWeight: 400,
    backgroundColor: {
        angle: 180,
        list: [
            {
                color: "#000",
                proportion: 30,
            },
        ],
    }
}

// 背景初始样式 (通用)
export let backgroundStyle = {
    type: 0,
    url: 'https://bpic.588ku.com/back_list_pic/20/07/25/5b4599cfc76fd0f6aaaa7c1806e78eed.jpg!/fw/720/quality/90/unsharp/true/compress/true',
    background: {
        angle: 180,
        list: [
            {
                color: "#fff",
                proportion: 30,
            },
        ],
    }
}

// 字体初始样式 (顶部栏)
export let TopBarFontStyle = {
    fontSize: 17,
    letterSpacing: 0,
    fontWeight: 600,
    backgroundColor: {
        angle: 180,
        list: [
            {
                color: "#000",
                proportion: 30,
            },
        ],
    }
}

// 初始字体渐变色（按钮）
export let btnFontStyle = {
    fontSize: 12,
    letterSpacing: 0,
    fontWeight: 400,
    backgroundColor: {
        angle: 180,
        list: [
            {
                color: "#fff",
                proportion: 30,
            },
        ],
    }
}

// 背景初始样式 （按钮）
export let btnBackgroundStyle = {
    type: 0,
    url: 'https://bpic.588ku.com/back_list_pic/20/07/25/5b4599cfc76fd0f6aaaa7c1806e78eed.jpg!/fw/720/quality/90/unsharp/true/compress/true',
    background: {
        angle: 180,
        list: [
            {
                color: "#82aaf1",
                proportion: 30,
            },
        ],
    }
}

// 跳转初始数据
export let jumpData = {
    type: 0,
    pathData: ''
}

// 九宫格初始数据
export let sudokuList = [
    {
        title: '酒店',
        url: 'https://s3.ax1x.com/2020/11/26/DBnkQA.png',
        jump: jumpData,
    },
    {
        title: '门票',
        url: 'https://s3.ax1x.com/2020/11/26/DBnELt.png',
        jump: jumpData
    },
    {
        title: '周边游',
        url: 'https://s3.ax1x.com/2020/11/26/DBnYwV.png',
        jump: jumpData
    },
    {
        title: '自由行',
        url: 'https://s3.ax1x.com/2020/11/26/DBn6w6.png',
        jump: jumpData
    },
]

// 全局图标数组
export let iconList = [
    // 播放量
    {
        name:'pause',
        icon:'icon-pause'
    },
    // 价格
    {
        name:'price',
        icon:'icon-Price'
    },
    // 热度
    {
        name:'hot',
        icon:'icon-ee-pushline-hot-topic'
    },
    // 点赞
    {
        name:'zan',
        icon:'icon-zan'
    },
]