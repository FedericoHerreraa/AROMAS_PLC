import axios from 'axios'

export const sendUsPurchaseMailRequest = async (info,cart) => axios.post('http://localhost:4000/api/send-us-purchase-email', { info, cart })

export const sendThemPurchaseMailRequest = async (info) => axios.post('http://localhost:4000/api/send-them-purchase-email', info)

export const sendUsQuestionMailRequest = async (info) => axios.post('http://localhost:4000/api/send-us-question-email', info)

export const sendThemQuestionMailRequest = async (info) => axios.post('http://localhost:4000/api/send-them-question-email', info)