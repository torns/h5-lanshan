import { Get, Post } from '@/utils/request'

let base64ToImg = async (data) => Post('/base64ToImg', data)


export {
    base64ToImg,
} 