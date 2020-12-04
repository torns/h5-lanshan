import { Get, Post } from '@/utils/request'

let remoteGetList = async (data) => Post('/remoteConfig/getByList')

let remoteGetById = async (data) => Post('/remoteConfig/getById', data)

let remoteAdd = async (data) => Post('/remoteConfig/add', data)

let remoteEdit = async (data) => Post('/remoteConfig/edit', data)
export {
    remoteGetList,
    remoteGetById,
    remoteAdd,
    remoteEdit
} 