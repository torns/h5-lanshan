// 适配
export function adapter(list) {
    let than = 1

    // 如果屏幕在 375 - 540 范围，算出适配比，适配各组件高度
    if (document.body.clientWidth <= 540) {
        than = document.body.clientWidth / 375;

        list.map((item) => {
            item.h = Math.floor(item.h * than);
            item.y = Math.floor(item.y * than);
            return item;
        });
    }

    return than
}