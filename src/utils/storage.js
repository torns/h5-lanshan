export function setLocalStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
    localStorage.removeItem(key);
}