import React from "react";
import { useCart } from "../../context/CartContext";

const Carrito = () => {
    const { cart } = useCart()

    return (
        <>
            <h1>Carrito</h1>
            <div>
                {
                    cart.map(prod => {
                        return (
                            <div>{prod.nombre}</div>
                        )
                    })
                }
            </div>
        </>
        
    )
}

export default Carrito