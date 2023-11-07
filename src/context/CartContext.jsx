import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    setCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProd = (prod) => {
        !existe(prod.id) ? (
            setCart(prev => {
                return [...prev, prod]
            })
        ) : (
            console.log('El producto ya esta en el carrito')
        )
    }

    const existe = (idProd) => {
        return cart.some(prod => prod.id === idProd)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ addProd, cart, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}