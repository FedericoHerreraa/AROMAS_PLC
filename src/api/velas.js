import axios from 'axios'
import { production, development } from './mail'


export const getAllVelasRequest = async () => axios.get(`${production}/api/getAll`)