import axios from 'axios'

export const sendMailRequest = async (info,cart) => axios.post('http://localhost:4000/api/send-us-email', { info, cart })