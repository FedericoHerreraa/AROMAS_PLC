import "./Contactanos.css"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser'
import {AiFillInstagram, AiOutlineMail} from "react-icons/ai"
import {BiSolidMap} from "react-icons/bi"

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
            <div className="info">
                <div>
                    <h2>Contacto Aromas PLC</h2>
                    <p>Contactenos ante cualquier consulta y le responderemos a la brevedad.</p>
                </div>
                <div>
                    <h3>Seguinos en nuestra red social y contactanos</h3>
                    <div className="red">
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                    <div className="red">
                        <AiOutlineMail/>
                        <p>aromass.plc@gmail.com</p>
                    </div>
                    <div className="red">
                        <BiSolidMap/>
                        <p>Monte Castro, CABA. Buenos Aires</p>
                    </div>
                </div>
                <Link className="botonVolver" to="/">volver al menu inicial</Link>
                <p>&copy; 2023 Aromas PLC. Todos los derechos reservados.</p>
            </div>
            <form className="form" onSubmit={sendEmail} ref={form}>
                <h1>Formulario de Contacto</h1>
                <div>
                    <label>Nombre:</label>
                    <input 
                        placeholder="Ingrese su Nombre"
                        type="text" 
                        name="user_name"
                        value={name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        placeholder="Ingrese un Email Válido"
                        type="email" 
                        name="user_email"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label>Mensaje:</label>
                    <textarea 
                        placeholder="Deje aqui su Mensaje"
                        type="text" 
                        name="message"
                        value={message}
                        onChange={handleMessage}
                        
                    />
                </div>
                <input className="btnEnviar" type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Contactanos