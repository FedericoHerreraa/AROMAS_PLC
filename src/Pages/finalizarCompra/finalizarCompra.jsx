import { useState, useEffect } from 'react'
import stylesCompra from './finalizarCompra.module.css'
import { useCart } from '../../context/CartContext'
import { 
    sendUsPurchaseMailRequest,
    sendThemPurchaseMailRequest 
} from '../../api/mail'
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
    const [telefono,setTelefono] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (decision === '' || decision === undefined || decision === null) {
            setDecision('whatsapp')
        }
    }, [decision])

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true)

        const info = {
            "nombre": nombre,
            "email": email,
            "direccion": direccion,
            "decision": decision,
            "telefono": telefono,
            "total": total()
        }

        console.log(info)

        await sendUsPurchaseMailRequest(info, cart)

        await sendThemPurchaseMailRequest(info)
        
        setLoading(false)
        Swal.fire({
            title: 'Se ha realizado la compra con exito!',
            text: 'Deseas continuar?',
            icon: 'success',
            confirmButtonText: 'Volver al inicio'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/')
                vaciarCarrito()
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
                                <div key={prod._id} className={stylesCompra.item}>
                                    <p className={stylesCompra.nombre}>{prod.nombre}</p>
                                    <p className={stylesCompra.cantidad}>Cantidad: {prod.cantidad}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                        <p className={stylesCompra.precio}>Precio:</p>
                                        <p>${prod.precio * prod.cantidad}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <hr />
                    <div>
                        {cart.length > 0 ? (
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <p style={{ fontWeight: 'bold'}}>Total a pagar: </p>
                                <p style={{ fontWeight: 'bold'}}>${total()}</p>
                            </div>
                            ) : ''
                        }
                    </div>
                </div>
                <div className={stylesCompra.contenedorForm}>
                    <form style={{ width: '550px', display: 'flex', alignItems: 'center', flexDirection: 'column' }} onSubmit={sendEmail}>
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
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px'}}>
                            <input type="submit" value={loading ? 'Enviando email...' : 'Comprar'} className={stylesCompra.btnCompra}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>

)
}

export default FinalizarCompra