import { createContext, useContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    setCart: () => {}
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProd = (prod, cantidad) => {
        if (!existe(prod._id)) {
            setCart(prev => [...prev, { ...prod, cantidad }])
        } else {
            setCart(prev => 
                prev.map(item => 
                    item._id === prod._id
                        ? { ...item, cantidad: item.cantidad + cantidad }
                        : item
                )
            )
        }
    }

    const eliminarProd = (id, nuevaCantidad) => {
        setCart((prevCart) => {
            if (nuevaCantidad === 0) {
              return prevCart.filter((prod) => prod._id !== id);
            } else {
              return prevCart.map((prod) =>
                prod._id === id ? { ...prod, cantidad: nuevaCantidad } : prod
              );
            }
        });
    }

    const existe = (idProd) => {
        return cart.some(prod => prod._id === idProd)
    }

    const vaciarCarrito = () => {
        setCart([])
    }

    const total = () => {
        let total = 0
        cart.forEach(prod => {
            let precio = prod.precio * prod.cantidad
            total = total + precio
        })
        return total
    }

    return (
        <CartContext.Provider value={{ addProd, cart, vaciarCarrito, eliminarProd, total }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}