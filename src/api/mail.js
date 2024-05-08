import axios from 'axios'

export const production = 'https://aromasplcbackend.onrender.com';
export const development = 'http://localhost:4000';

export const sendUsPurchaseMailRequest = async (info,cart) => axios.post(`${production}/api/send-us-purchase-email`, { info, cart })

export const sendThemPurchaseMailRequest = async (info) => axios.post(`${production}/api/send-them-purchase-email`, info)

export const sendUsQuestionMailRequest = async (info) => axios.post(`${production}/api/send-us-question-email`, info)

export const sendThemQuestionMailRequest = async (info) => axios.post(`${production}/api/send-them-question-email`, info)