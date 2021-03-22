export function setLocalStorage(key, val) {
    console.log('设置setLocalStorage');
    console.log(key);
    console.log(val);
    localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}