import stylesCompra from './finalizarCompra.module.css'
import { useCart } from '../../context/CartContext'

const FinalizarCompra = () => {
    const { cart } = useCart()

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center'}}>Carrito final</div>
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
                <form action="">
                    <div>
                        <label htmlFor="">Nombre y apellido</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label htmlFor="">Direccion</label>
                        <input type="text" />
                    </div>
                    <input type="submit" value="Comprar"/>
                </form>
            </div>
        </div>

    )
}

export default FinalizarCompra