import { useState, useRef, useEffect } from 'react'
import stylesCompra from './finalizarCompra.module.css'
import { useCart } from '../../context/CartContext'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

const FinalizarCompra = () => {
    const { cart, total, vaciarCarrito } = useCart()
    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')
    const [direccion,setDireccion] = useState('')
    const [decision,setDecision] = useState('whatsapp')
    const [telefono,setTelefono] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if (decision === '') {
            setDecision('whatsapp')
        }
    }, [])

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l1bsp9f', 'template_es5doqv', form.current , 'C_Sfb7hmjQpTK2Brz')
            .then((res) => {
                console.log(res.text);
                vaciarCarrito()
            })
            .catch((error) => {
                console.log(error.text);
            });
                
        Swal.fire({
            title: 'Se ha realizado la compra con exito!',
            text: 'Deseas continuar?',
            icon: 'success',
            confirmButtonText: 'Volver al inicio'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
            }
        })

        setEmail('')
        setNombre('')
        setDireccion('')
        setTelefono('')
    }

    return (
        <div>
            <nav className={stylesCompra.navContainer}>
                <Link onClick={() => window.history.back()} style={{ textDecoration: 'none' }} className={stylesCompra.navTitle}>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALxJREFUSEvt0jFqAmEQhuHHQwRMn4hnEMFbCKmFXCdYC97FCLmDjb2QQ4SBLAQLZ343Cxa77b+878w338TA32RgvlGQJvyQEU3xho90fJqPHPBPvOIdu0zSElHAj3jBGQtc/kvwhK9f+AmrCjzklQ0CHrHMEfAlvrPJu/dM0Ate2WBwQQzRS5JF1EV5feTyHaqCEP2tablJLYJOcsAMG+yzNrUKgveMNbYZvNKiCuPmP/ds0CQdBWlcg0f0A4wQHhnVdK5sAAAAAElFTkSuQmCC"/> 
                    <p className='Cinzel' style={{ color: 'black', marginTop: '15px' }}>Aromas PLC</p>
                </Link>
            </nav>
            <div className={stylesCompra.title}>
                <div>
                    <FaCartShopping size={'23px'}/>
                </div>
                <h2>Resumen de compra</h2>
            </div>
            <div className={stylesCompra.contenedorCompra}>
                <div className={stylesCompra.contenedorCarrito}>
                    {
                        cart.map(prod => {
                            return (
                                <div key={prod.id}>
                                    <p>{prod.nombre}</p>
                                    <p>Precio: ${prod.precio * prod.cantidad}</p>
                                    <p>Cantidad: {prod.cantidad}</p>
                                </div>
                            )
                        })
                    }
                    <div>
                        {cart.length > 0 ? <p>Total a pagar: ${total()}</p> : ''}
                    </div>
                </div>
                <div className={stylesCompra.contenedorForm}>
                    <form style={{ width: '300px' }} action="" ref={form} onSubmit={sendEmail}>
                        <h3>Formulario de compra:</h3>
                        <div className={stylesCompra.campo}>
                            <input 
                                required
                                placeholder='Ingrese su nombre'
                                type="text"
                                name='user_name'
                                onChange={(e) => setNombre(e.target.value)}
                                value={nombre} 
                                />
                        </div>
                        <div className={stylesCompra.campo}>
                            <input 
                                type="email"
                                required
                                placeholder='Ingrese su email'
                                name='user_email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                                />
                        </div>
                        <div className={stylesCompra.campo}>
                            <input 
                                type="text"
                                required
                                placeholder='Ingrese su direccion'
                                name='user_direccion'
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)} 
                                />
                        </div>
                        <div className={stylesCompra.campo}>
                            <input 
                                type="number"
                                required
                                name='user_telefono'
                                placeholder='Ingrese su telefono'
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)} 
                                />
                        </div>
                        <div style={{ marginTop: '15px'}} className={stylesCompra.campo}>
                            <label htmlFor="">Por donde desea continuar la compra?</label>
                            <select 
                                style={{ padding: '5px' }}
                                value={decision}
                                onChange={(e) => {
                                    setDecision(e.target.value)
                                }}
                                onBlur={() => {
                                    if (decision === '') {
                                        setDecision('whatsapp')
                                    }
                                }}
                                >
                                <option required value="whatsapp">Whatsapp</option>
                                <option required value="email">Email</option>
                            </select>
                        </div>
                        {cart.map((prod, index) => (
                            <div key={prod.id}>
                                <input type="hidden" name={`prod_nombre_${index}`} value={prod.nombre} />
                                <input type="hidden" name={`prod_precio_${index}`} value={prod.precio * prod.cantidad} />
                                <input type="hidden" name={`prod_cantidad_${index}`} value={prod.cantidad} />
                            </div>
                        ))}
                        <input type="hidden" name='totalAPagar' value={total()}/>
                        <input type="hidden" name='decision' value={decision}/>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                            <input type="submit" value="Comprar" className={stylesCompra.btnCompra}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>

)
}

export default FinalizarCompra