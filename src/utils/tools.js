// 生成8位不重复的随机id
export function getRandomCode(num = 8) {
    var data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var nums = "";
    for (var i = 0; i < num; i++) {
        var r = parseInt(Math.random() * 61);
        nums += data[r];
    }
    return nums;
}

// 判断空数据 (boolean 为非空数据)
export function isNull(data) {
    // console.log(typeof data == 'undefined');
    // console.log(data == null);
    // console.log(data == '');
    if (typeof data != 'boolean' && (typeof data == 'undefined' || data == null || data == '')) {
        return true
    } else {
        return false
    }
}
