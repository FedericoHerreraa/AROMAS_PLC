import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import stylesCarrito from "./carrito.module.css";

const Carrito = () => {
  const { cart, vaciarCarrito, eliminarProd } = useCart();

  console.log(cart)

  if (cart.length == 0) return <h3>El carrito esta vacio!</h3>

  return (
    <div className={stylesCarrito.contenedorCarrito}>
      {cart.map((prod) => {
        const [cantidad,setCantidad] = useState(prod.cantidad)
        const [precio,setPrecio] = useState(prod.precio * cantidad)
        return (
          <div key={prod.id} className={stylesCarrito.contenedorProduct}>
            <div style={{ display: 'flex' }}>
              <img src={prod.img} alt="" />
              <div className={stylesCarrito.productInfo}>
                <p>{prod.nombre}</p>
                <p>Precio: ${precio}</p>
                <p>Cantidad: {cantidad}</p>
              </div>
            </div>
            <div style={{ marginBottom: '30px', marginRight: '20px'}}>
              <button 
                className={stylesCarrito.btnEliminar}
                onClick={() => {
                  cantidad == 1 ? (
                    eliminarProd(prod.id)
                  ) : (
                    setPrecio(precio - prod.precio),
                    setCantidad(cantidad - 1)
                  )
                }}
                >
                  X
              </button>
            </div>
          </div>
        );
      })}
      <div className={stylesCarrito.contenedorBtn}>
        {cart.length != 0 ? (
          <div>
            <button className={stylesCarrito.vacCarrito} onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button className={stylesCarrito.btnFinalCompra}>Finalizar compra</button>
          </div>
          ) : (
            <p>El carrito esta vacio!</p>
          ) 
        }
      </div>
    </div>
  );
};

export default Carrito;
