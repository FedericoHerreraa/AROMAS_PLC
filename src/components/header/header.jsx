import "./header.css";
import { Link } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import { Modal } from "@mui/material";
import Carrito from "../carrito/carrito";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { vaciarCarrito } = useCart();
  const cerrarModal = () => setOpen(false);
  
  const modal = () => {
    return (
      <Modal open={open} className="containerCarrito" onClose={cerrarModal}>
        <div>
          <h2 className="carritoTitle">Carrito de compras</h2>
          <div>
            <Carrito />
          </div>
          <button className="btnVaciarCarrito" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </div>
      </Modal>
    );
  };

  const desplazamientoProds = () => {
    window.scrollTo({
      top: window.innerHeight + 450,
      behavior: 'smooth'
    })
  }

  const desplazamiento = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <nav className="navContainer">
        <div className="navTitle">
          <p className="Cinzel">Aromas PLC</p>
        </div>
        <div className="navInfo">
          <button className="btnCarrito" onClick={desplazamientoProds}>Productos</button>
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
      <div className="verMas" onClick={desplazamiento}>
        <p>Ver mas</p>
      </div>
    </>
  );
};

export default Header;
