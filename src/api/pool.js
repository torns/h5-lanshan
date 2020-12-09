import { Get, Post } from '@/utils/request'

let poolChange = async (data) => Post('/pool/change',data)

let poolGetById = async (data) => Post('/pool/getById', data)

export {
    poolChange,
    poolGetById,
} 