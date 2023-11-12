import stylesHeader from "./header.module.css";
import { Link } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import  Modal  from "@mui/material/Modal";
import Box from "@mui/material/Box"
import Carrito from "../carrito/carrito";


const Header = () => {
  const [open, setOpen] = useState(false);
  
  const cerrarModal = () => setOpen(false);
  
  const modal = () => {
    return (
      <Modal 
        open={open} 
        className={stylesHeader.containerCarrito} 
        onClose={cerrarModal}
        >
        <Box>
          <div>
            <h2 className={stylesHeader.carritoTitle}>Carrito de compras</h2>
            <div>
              <Carrito />
            </div>
          </div>
        </Box>
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
      <nav className={stylesHeader.navContainer}>
        <div className={stylesHeader.navTitle}>
          <p className="Cinzel">Aromas PLC</p>
        </div>
        <div className={stylesHeader.navInfo}>
          <button className={stylesHeader.btnCarrito} onClick={desplazamientoProds}>Productos</button>
          <button className={stylesHeader.btnCarrito} onClick={() => setOpen(true)}>
            Carrito
          </button>
          {modal()}
          <p className={stylesHeader.links}>Eventos</p>
          <Link to="/contactanos" className={stylesHeader.links}>
            Contacto
          </Link>
        </div>
      </nav>
      <div className={stylesHeader.inicio}>
        <div className={stylesHeader.titleContainer}>
          <p>Bienvenidos</p>
          <h1 className="Cinzel">Aromas PLC</h1>
        </div>
      </div>
      <div className={stylesHeader.verMas} onClick={desplazamiento}>
        <p>Ver mas</p>
      </div>
    </>
  );
};

export default Header;
