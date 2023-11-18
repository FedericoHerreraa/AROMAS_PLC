import { useCart } from "../../context/CartContext";
import stylesCarrito from "./carrito.module.css";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { cart, vaciarCarrito, eliminarProd } = useCart();
  
  return (
    <div className={stylesCarrito.contenedorCarrito}>
      {cart.map((prod) => {
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
            <Link to='/comprar' className={stylesCarrito.btnFinalCompra}>Finalizar compra</Link>
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
