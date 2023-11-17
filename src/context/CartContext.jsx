import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    setCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProd = (prod, cantidad) => {
        if (!existe(prod.id)) {
            setCart(prev => [...prev, { ...prod, cantidad }])
        } else {
            setCart(prev => 
                prev.map(item => 
                    item.id === prod.id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                )
            )
        }
    }

    const eliminarProd = (id, nuevaCantidad) => {
        if (nuevaCantidad == 1) {
            const carritoNuevo = cart.filter(prod => prod.id !== id)
            setCart(carritoNuevo)
        } else {
            const carritoActualizado = cart.map(prod =>
                prod.id === id ? { ...prod, cantidad: nuevaCantidad } : prod
            )
            setCart(carritoActualizado);
        }
    }

    const existe = (idProd) => {
        return cart.some(prod => prod.id === idProd)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    console.log(cart)

    return (
        <CartContext.Provider value={{ addProd, cart, vaciarCarrito, eliminarProd }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}