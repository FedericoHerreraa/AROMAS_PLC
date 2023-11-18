import { useState } from "react";
import { useCart } from "../../context/CartContext";
import stylesCarrito from "./carrito.module.css";

const Carrito = () => {
  const { cart, vaciarCarrito, eliminarProd } = useCart();
  
  return (
    <div className={stylesCarrito.contenedorCarrito}>
      {cart.map((prod) => {
        // const [cantidad,setCantidad] = useState(prod.cantidad)
        // const [precio,setPrecio] = useState(prod.precio * prod.cantidad)

        // const handleEliminarProd = () => {
        //   if (cantidad === 1) {
        //     eliminarProd(prod.id, cantidad); 
        //   } else {
        //     setPrecio(prod.precio * (cantidad - 1));
        //     setCantidad(cantidad - 1);
        //     eliminarProd(prod.id, cantidad);
        //   }
        // };

        let precio = prod.precio * prod.cantidad
        let cantidad = prod.cantidad

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
                  cantidad = cantidad - 1
                  precio = prod.precio * cantidad
                  eliminarProd(prod.id, cantidad)
                  // if (cantidad === 1) {
                  //   eliminarProd(prod.id, cantidad)
                  // } else {
                  //   cantidad = cantidad - 1
                  //   precio = prod.precio * cantidad
                  //   eliminarProd(prod.id, cantidad)
                  // }
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
