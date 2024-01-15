import { useCart } from "../../context/CartContext";
import stylesCarrito from "./carrito.module.css";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Carrito = () => {
  const { cart, vaciarCarrito, eliminarProd, total, addProd } = useCart();
  
  return (
    <div className={stylesCarrito.contenedorCarrito}>
      {cart.map((prod) => {
        let precio = prod.precio * prod.cantidad
        let cantidad = prod.cantidad

        return (
          <div key={prod._id} className={stylesCarrito.contenedorProduct}>
            <div style={{ display: 'flex' }}>
              <img src={prod.img} alt="" />
              <div className={stylesCarrito.productInfo}>
                <p>{prod.nombre}</p>
                <p>Precio: ${precio}</p>
                <p>Cantidad: {cantidad}</p>
              </div>
            </div>
            <div className={stylesCarrito.btnMasMenos}>
              <button 
                className={stylesCarrito.btnSumar}
                onClick={() => {
                  precio = prod.precio * cantidad
                  addProd(prod, 1)
                }}
                >
                <AddIcon fontSize="10px" style={{ textDecoration: "none", color: 'black' }}/>
              </button>
              <button 
                className={stylesCarrito.btnRestar}
                onClick={() => {
                  cantidad = cantidad - 1
                  precio = prod.precio * cantidad
                  eliminarProd(prod._id, cantidad)
                }}
                >
                <RemoveIcon fontSize="10px" style={{ textDecoration: "none", color: 'black' }}/>
              </button>
            </div>
          </div>
        );
      })}
      <div className={stylesCarrito.contenedorBtn}>
        {cart.length !== 0 ? (
          <div>
            <p className={stylesCarrito.total}>Total: ${total()}</p>
            <button className={stylesCarrito.vacCarrito} onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link 
              onClick={() => {
                console.log(cart)
               window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                })
                } 
              }
              to='/comprar' 
              className={stylesCarrito.btnFinalCompra}
              >
                Finalizar compra
            </Link>
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
