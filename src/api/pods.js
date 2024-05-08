import axios from 'axios'
import { production, development } from './mail'

export const getAllProductsRequest = async () => axios.get(`${production}/api/getProds`)

export const getProductRequest = async (id) => axios.get(`${production}/api/getProd/${id}`)