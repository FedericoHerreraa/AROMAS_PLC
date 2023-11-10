import { useCart } from "../../context/CartContext";
import "./carrito.css";

const Carrito = () => {
  const { cart } = useCart();
  const { vaciarCarrito } = useCart();

  if (cart.length == 0) {
    return <h3>El carrito esta vacio!</h3>;
  }

  return (
    <div className="contenedorCarrito">
      {cart.map((prod) => {
        return (
          <div key={prod.id} className="contenedorProduct">
            <img src={prod.img} alt="" />
            <div className="productInfo">
              <p>{prod.nombre}</p>
              <p>Precio: ${prod.precio}</p>
            </div>
          </div>
        );
      })}
      {cart.length != 0? <button onClick={vaciarCarrito}>vaciar Carrito</button>: <p>El carrito esta vacio</p>}
    </div>
  );
};

export default Carrito;
