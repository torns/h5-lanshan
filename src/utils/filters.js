/**
 * 全局过滤器
 */

export function fontLimit(str, number = 8) {
    let length = str.length
    console.log(length);

    if (length > number) {
        return str.substring(0, number) + '...'
    }
    return str
}