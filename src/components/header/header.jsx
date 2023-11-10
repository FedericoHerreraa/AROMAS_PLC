import "./header.css";
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
      <Modal open={open} className="containerCarrito" onClose={cerrarModal}>
        <Box>
          <div style={{backgroundColor: "white", height: "100%"}}>
            <h2 className="carritoTitle">Carrito de compras</h2>
            <div>
              <Carrito />
            </div>
          </div>
        </Box>
          
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
