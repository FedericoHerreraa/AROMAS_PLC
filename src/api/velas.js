import axios from 'axios'

export const getAllVelasRequest = async () => axios.get('https://aromasplcbackend.onrender.com/api/getAll')