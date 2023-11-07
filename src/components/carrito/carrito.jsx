import { useCart } from "../../context/CartContext"
import './carrito.css'

const Carrito = () => {
    const { cart } = useCart()
    console.log(cart)

    if (cart.length == 0) {
        return (
            <h3>El carrito esta vacio!</h3>
        )
    }

    return (
        <div className="contenedorCarrito">
            {cart.map((prod) => {
                return (
                    <div key={prod.id} className="contenedorProduct">
                        <img src={prod.img} alt=""/>
                        <div className="productInfo">
                            <p>{prod.nombre}</p>
                            <p>Precio: ${prod.precio}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Carrito