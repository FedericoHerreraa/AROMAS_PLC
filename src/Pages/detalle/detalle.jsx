import stylesDetalle from "./detalle.module.css";
import { getProductById } from "../../products/products";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { useState } from "react";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Carrito from "../../components/carrito/carrito";

const Detalle = () => {
  const { id } = useParams();
  const product = () => getProductById(id);
  const [products, error, loading] = useAsync(product, id);

  const { addProd, vaciarCarrito } = useCart()

  const [open,setOpen] = useState(false)

    const cerrarModal = () => setOpen(false)

    const modal = () => {
        return (
            <Modal
                open={open}
                className={stylesDetalle.containerCarrito}
                onClose={cerrarModal}
                >
                  <div>
                    <h2 className={stylesDetalle.carritoTitle}>Carrito de compras</h2>
                    <div>
                      <Carrito/>
                    </div>
                    <button className={stylesDetalle.btnVaciarCarrito} onClick={vaciarCarrito}>Vaciar carrito</button>
                  </div>
            </Modal>
        )
    }

  if (error) {
    <div>
      <h1>Hubo un error con la carga del producto</h1>
    </div>
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden" style={{ marginTop: '30px', marginLeft: '40px', fontSize: '30px' }}>Cargando...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <nav className={stylesDetalle.navContainer}>
        <Link onClick={() => window.history.back()} style={{ textDecoration: 'none' }} className={stylesDetalle.navTitle}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALxJREFUSEvt0jFqAmEQhuHHQwRMn4hnEMFbCKmFXCdYC97FCLmDjb2QQ4SBLAQLZ343Cxa77b+878w338TA32RgvlGQJvyQEU3xho90fJqPHPBPvOIdu0zSElHAj3jBGQtc/kvwhK9f+AmrCjzklQ0CHrHMEfAlvrPJu/dM0Ate2WBwQQzRS5JF1EV5feTyHaqCEP2tablJLYJOcsAMG+yzNrUKgveMNbYZvNKiCuPmP/ds0CQdBWlcg0f0A4wQHhnVdK5sAAAAAElFTkSuQmCC"/> 
          <p className='Cinzel' style={{ color: 'black' }}>Aromas PLC</p>
        </Link>
        <div className={stylesDetalle.navInfo}>
          <button className={stylesDetalle.btnCarrito} onClick={() => setOpen(true)}>Carrito</button> 
          {modal()}
          <p className={stylesDetalle.links}>Eventos</p>
          <Link to="/contactanos" className={stylesDetalle.links}>Contacto</Link>   
        </div>
      </nav>
      <div className={stylesDetalle.contenedorProducto}>
        <div key={products.id} className={stylesDetalle.producto}>
          <img src={products.img} alt="No se pudo cargar la imagen"/>
          <div className={stylesDetalle.productoInfo}>
            <h2>{products.nombre}</h2>
            <p>Precio: ${products.precio}</p>
            <button onClick={() => addProd(products)} className={stylesDetalle.botonCarrito}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
