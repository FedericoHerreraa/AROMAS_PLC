import { useState, useRef } from 'react'
import { useCart } from '../../context/CartContext'
import emailjs from '@emailjs/browser'

const FinalizarCompra = () => {
    const { cart } = useCart()
    const [nombre,setNombre] = useState('')
    const [email,setEmail] = useState('')
    const [direccion,setDireccion] = useState('')

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l1bsp9f', 'template_es5doqv', form.current, 'C_Sfb7hmjQpTK2Brz')
            .then((res) => {
                console.log(res.text);
            })    
            .catch((error) => {
                console.log(error.text);
            })
                
        // Swal.fire({
        //     title: 'Se ha realizado la compra con exito!',
        //     text: 'Deseas continuar?',
        //     icon: 'success',
        //     confirmButtonText: 'Aceptar'
        // })

        setEmail('')
        setNombre('')
        setDireccion('')
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>Resumen de compra</div>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <p>{prod.nombre}</p>
                                <p>Precio: {prod.precio * prod.cantidad}</p>
                                <p>Cantidad: {prod.cantidad}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <form action="" ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="">Nombre y apellido</label>
                        <input 
                            type="text"
                            name='user_name'
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre} 
                            />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input 
                            type="email"
                            name='user_email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            />
                    </div>
                    <div>
                        <label htmlFor="">Direccion</label>
                        <input 
                            type="text"
                            name='user_direccion'
                            value={direccion}
                            onChange={(e) => setDireccion(e.target.value)} 
                            />
                    </div>
                    {cart.map(prod => (
                        <div key={prod.id}>
                            <input type="hidden" name='prod_nombre' value={prod.nombre} />
                            <input type="hidden" name='prod_precio' value={prod.precio * prod.cantidad} />
                            <input type="hidden" name='prod_cantidad' value={prod.cantidad} />
                        </div>
                    ))}
                    <input type="submit" value="Comprar"/>
                </form>
            </div>
        </div>

    )
}

export default FinalizarCompra