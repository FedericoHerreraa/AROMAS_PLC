import stylesHeader from "./header.module.css";
import { Link } from "react-router-dom";
import "../../App.css";
import { useState } from "react";
import  Modal  from "@mui/material/Modal";
import Box from "@mui/material/Box"
import Carrito from "../carrito/carrito";
import Badge from '@mui/material/Badge';
import { useCart } from "../../context/CartContext";
import Swal from 'sweetalert2'



const Header = () => {
  const [open, setOpen] = useState(false);
  const cerrarModal = () => setOpen(false);
  const { cart } = useCart()
  
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

  const desplazamientoTitulo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <header className={stylesHeader.header}>
        <nav className={stylesHeader.navContainer}>
          <button style={{ background: 'none', border: 'none'}} className={stylesHeader.navTitle} onClick={desplazamientoTitulo}>
            <p className="Cinzel" style={{ marginTop: '15px' }}>Aromas PLC</p>
          </button>
          <div className={stylesHeader.navInfo}>
            <button className={stylesHeader.btnCarrito} onClick={desplazamientoProds}>Productos</button>
            <Badge style={{ marginRight: '20px', marginLeft: '20px'}} color="secondary" badgeContent={cart.length}>
              <button className={stylesHeader.btnCarrito} onClick={() => setOpen(true)}>Carrito</button>
            </Badge>
            {modal()}
            <button 
              className={stylesHeader.eventos} 
              onClick={() => {
                Swal.fire({
                  position: 'top-end',
                  icon: 'info',
                  title: 'No disponible...',
                  text: 'Proximamente sección de eventos!'
                });
              }}
              >
                Eventos
            </button>
            <Link to="/contactanos" className={stylesHeader.contacto}>Contacto</Link>
          </div>
        </nav>
      </header>
      <div className={stylesHeader.inicio}>
        <div className={stylesHeader.titleContainer}>
          <p>Bienvenidos</p>
          <h1 className="Cinzel">Aromas PLC</h1>
        </div>
      </div>
      <button className={stylesHeader.verMas} onClick={desplazamiento}>
        Ver mas
      </button>
    </>
  );
};

export default Header;
