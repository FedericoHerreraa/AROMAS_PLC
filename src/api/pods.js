import axios from 'axios'

export const getAllProductsRequest = async () => axios.get('http://localhost:4000/api/getProds')

export const getProductRequest = async (id) => axios.get(`http://localhost:4000/api/getProd/${id}`)