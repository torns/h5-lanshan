// 页面背景处理
export function pageBackgroundChannel(config) {
    if (!config) {
        return {}
    }

    if (config.backgroundType == 0) {
        return
    }
    if (config.backgroundType == 1) {
        return {
            backgroundImage: `url(${config.backgroundImg}),${gradientChannel(config.backgroundGradient)}`,
            backgroundSize: `contain`,
            backgroundRepeat: 'no-repeat',
        }
    }
    if (config.backgroundType == 2) {
        return {
            background: gradientChannel(config.backgroundGradient),

        }
    }
}

// 普通背景处理
export function widgetBackgroundChannel(config) {
    if (!config) {
        return {}
    }

    if (config.type == 0) {
        return {
            backgroundImage: `${gradientChannel(config.background)}`
        }
    }
    if (config.type == 1) {
        return {
            backgroundSize: "cover",
            backgroundImage: `url(${config.url})`
        }
    }
}

// 字体样式及背景处理
export function fontStyleChannel(config) {
    if (!config) {
        return {}
    }

    return {
        fontSize: `${config.fontSize}px`,
        letterSpacing: `${config.letterSpacing}px`,
        fontWeight: config.fontWeight,
        color: config.color,
        // backgroundImage: `${gradientChannel(config.backgroundColor)}`,
    }
}

// 处理渐变格式
export function gradientChannel(config) {
    if (config && config.list.length != 0) {
        let result = `linear-gradient(${config.angle}deg`;

        if (config.list.length == 1) {
            let one = config.list[0]
            result += `,${one.color} ${one.proportion}%, ${one.color} 100%`;
        } else {
            config.list.map((item) => {
                result += `,${item.color} ${item.proportion}%`;
            });
        }
        result += ")";
        return result;
    } else {
        return ''
    }
}

