import "./Contactanos.css"
import React, { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const Contactanos = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleName = e => setName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handleMessage = e => setMessage(e.target.value)

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_l1bsp9f', 'template_outbd6o', form.current, 'C_Sfb7hmjQpTK2Brz')
            .then((res) => {
                console.log(res.text);
            })    
            .catch((error) => {
              console.log(error.text);
            })

        setEmail('')
        setName('')
        setMessage('')
      }

    return (
        <div className="contactanosContainer">
            <form className="form" onSubmit={sendEmail} ref={form}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        name="user_name"
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="user_email"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label>Mensaje:</label>
                    <textarea 
                        type="text" 
                        name="message"
                        value={message}
                        onChange={handleMessage}
                    />
                </div>
                <input className="btnEnviar" type="submit" value="Enviar" />
            </form>
            <div className="info">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Contactanos