import "./header.css";
import { Link } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import { Modal } from "@mui/material";
import Carrito from "../carrito/carrito";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [vacio,setVacio] = useState(false)

  if (cart.length == 0) {
    
  }

  const cerrarModal = () => setOpen(false);
  const { vaciarCarrito, cart } = useCart();

  const modal = () => {
    return (
      <Modal open={open} className="containerCarrito" onClose={cerrarModal}>
        <div>
          <h2 className="carritoTitle">Carrito de compras</h2>
          <div>
            <Carrito />
          </div>
          {cart.lenght > 0 ? 
            <button className="btnVaciarCarrito" onClick={vaciarCarrito}>
                Vaciar carrito
            </button>: <p></p> }
            
        </div>
      </Modal>
    );
  };

  return (
    <>
      <nav className="navContainer">
        <div className="navTitle">
          <p className="Cinzel">Aromas PLC</p>
        </div>
        <div className="navInfo">
          <p className="links">Productos</p>
          <button className="btnCarrito" onClick={() => setOpen(true)}>
            Carrito
          </button>
          {modal()}
          <p className="links">Eventos</p>
          <Link to="/contactanos" className="links">
            Contacto
          </Link>
        </div>
      </nav>
      <div className="inicio">
        <div className="titleContainer">
          <p>Bienvenidos</p>
          <h1 className="Cinzel">Aromas PLC</h1>
        </div>
      </div>
      <div className="verMas">
        <p>Ver mas</p>
      </div>
    </>
  );
};

export default Header;
