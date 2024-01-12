import axios from 'axios'

export const sendUsPurchaseMailRequest = async (info,cart) => axios.post('https://aromasplcbackend.onrender.com/api/send-us-purchase-email', { info, cart })

export const sendThemPurchaseMailRequest = async (info) => axios.post('https://aromasplcbackend.onrender.com/api/send-them-purchase-email', info)

export const sendUsQuestionMailRequest = async (info) => axios.post('https://aromasplcbackend.onrender.com/api/send-us-question-email', info)

export const sendThemQuestionMailRequest = async (info) => axios.post('https://aromasplcbackend.onrender.com/api/send-them-question-email', info)