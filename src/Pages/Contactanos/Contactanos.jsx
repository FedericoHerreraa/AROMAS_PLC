import styleContacto from "./Contactanos.module.css"
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import emailjs from '@emailjs/browser'
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai"
import { BiSolidMap } from "react-icons/bi"
import Swal from 'sweetalert2'


const Contactanos = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleName = e => setName(e.target.value)

    const handleEmail = (e) => setEmail(e.target.value)

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
                
        Swal.fire({
            title: 'Se ha enviado el mensaje!',
            text: 'Deseas continuar?',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        setEmail('')
        setName('')
        setMessage('')
    }

    return (
    <>
        <nav className={styleContacto.navContainer}>
            <Link onClick={() => window.history.back()} style={{ textDecoration: 'none' }} className={styleContacto.navTitle}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALxJREFUSEvt0jFqAmEQhuHHQwRMn4hnEMFbCKmFXCdYC97FCLmDjb2QQ4SBLAQLZ343Cxa77b+878w338TA32RgvlGQJvyQEU3xho90fJqPHPBPvOIdu0zSElHAj3jBGQtc/kvwhK9f+AmrCjzklQ0CHrHMEfAlvrPJu/dM0Ate2WBwQQzRS5JF1EV5feTyHaqCEP2tablJLYJOcsAMG+yzNrUKgveMNbYZvNKiCuPmP/ds0CQdBWlcg0f0A4wQHhnVdK5sAAAAAElFTkSuQmCC"/> 
                <p className='Cinzel' style={{ color: 'black', marginTop: '15px' }}>Aromas PLC</p>
            </Link>
        </nav>
        <div className={styleContacto.contactanosContainer}>
            <div className={styleContacto.info}>
                <div>   
                    <h2>Contacto Aromas PLC</h2>
                    <p>Contactenos ante cualquier consulta y le responderemos a la brevedad.</p>
                </div>
                <div>
                    <h3>Seguinos en nuestra red social y contactanos</h3>
                    <div className={styleContacto.red}>
                        <div>
                            <AiFillInstagram/>
                        </div>
                        <p>aromas.plc</p>
                    </div>
                    <div className={styleContacto.red}>
                        <div>
                            <AiOutlineMail/>
                        </div>
                        <p>aromass.plc@gmail.com</p>
                    </div>
                    <div className={styleContacto.red}>
                        <div>
                            <BiSolidMap/>
                        </div>
                        <p>Monte Castro, CABA. Buenos Aires</p>
                    </div>
                </div>
                <Link className={styleContacto.botonVolver} to="/">Volver al menu inicial</Link>
                <p className={styleContacto.derechos}>&copy; 2023 Aromas PLC. Todos los derechos reservados.</p>
            </div>
            <form className={styleContacto.form} onSubmit={sendEmail} ref={form}>
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
                <input 
                    className={styleContacto.btnEnviar} 
                    type="submit" 
                    value="Enviar"
                    />
            </form>
        </div>
    </>
    )
}

export default Contactanos