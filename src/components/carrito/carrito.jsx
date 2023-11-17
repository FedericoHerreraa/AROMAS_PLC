import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import stylesCarrito from "./carrito.module.css";

const Carrito = () => {
  const { cart, vaciarCarrito, eliminarProd } = useCart();
  const [cantidad,setCantidad] = useState(0)
  const [precio,setPrecio] = useState(0)

  return (
    <div className={stylesCarrito.contenedorCarrito}>
      {cart.map((prod) => {
        useEffect(() => {
          setCantidad(prod.cantidad)
          setPrecio(prod.precio * cantidad)
        }, [])

        const actualizarCantidad = (nuevaCantidad) => {
          setCantidad(nuevaCantidad);
          setPrecio(prod.precio * nuevaCantidad);
        };

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
            <div style={{ marginBottom: '30px', marginRight: '20px' }}>
              <button 
                className={stylesCarrito.btnEliminar}
                onClick={() => {
                  if (cantidad === 1) {
                    eliminarProd(prod.id, cantidad); // Cambio aquí: nueva cantidad es 0
                  } else {
                    actualizarCantidad(cantidad - 1);
                  }
                  // setPrecio(precio - prod.precio)
                  // setCantidad(cantidad - 1)
                  // eliminarProd(prod.id, cantidad)
                }}
                >
                  X
              </button>
            </div>
          </div>
        );
      })}
      <div className={stylesCarrito.contenedorBtn}>
        {cart.length !== 0 ? (
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
