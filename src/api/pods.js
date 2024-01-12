import axios from 'axios'

export const getAllProductsRequest = async () => axios.get('https://aromasplcbackend.onrender.com/api/getProds')

export const getProductRequest = async (id) => axios.get(`https://aromasplcbackend.onrender.com/api/getProd/${id}`)