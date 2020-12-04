import { Get, Post } from '@/utils/request'

let pageGetList = async (data) => Post('/page/getByList')

let pageGetById = async (data) => Post('/page/getById', data)

let pageAdd = async (data) => Post('/page/add', data)

let pageEdit = async (data) => Post('/page/edit', data)
export {
    pageGetList,
    pageGetById,
    pageAdd,
    pageEdit
} 