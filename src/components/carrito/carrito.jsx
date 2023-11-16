import { useCart } from "../../context/CartContext";
import stylesCarrito from "./carrito.module.css";

const Carrito = () => {
  const { cart } = useCart();
  const { vaciarCarrito } = useCart();

  if (cart.length == 0) {
    return <h3>El carrito esta vacio!</h3>;
  }

  return (
    <div className={stylesCarrito.contenedorCarrito}>
      {cart.map((prod) => {
        console.log(prod)
        let precioNuevo = prod.precio * prod.cantidad
        return (
          <div key={prod.id} className={stylesCarrito.contenedorProduct}>
            <img src={prod.img} alt="" />
            <div className={stylesCarrito.productInfo}>
              <p>{prod.nombre}</p>
              <p>Precio: {precioNuevo}</p>
              <p>Cantidad: {prod.cantidad}</p>
            </div>
          </div>
        );
      })}
      <div className={stylesCarrito.vacCarrito}>
        {cart.length != 0 ? (
          <div>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
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
