export function parsingPage(list) {

}

// 适配
export function adapter(list) {
    if (document.body.clientWidth <= 540) {
        let contraction = document.body.clientWidth / 375;

        list.map((item) => {
            item.h = item.h * contraction;
            item.y = item.y * contraction;
            return item;
        });
    }
}