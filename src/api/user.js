import { Get, Post } from '@/utils/request'

let login = async (data) => Post('/user/login', data)

let register = async (data) => Post('/user/register', data)

let getUserInfo = async (data) => Post('/user/getUserInfo', data)

let test = async () => Post('/user/test')

export {
    login,
    register,
    getUserInfo,
    test,
} 