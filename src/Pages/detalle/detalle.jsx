import "./detalle.css";
import { getProductById } from "../../products/products";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
import { useState } from "react";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";

const Detalle = () => {
  const { id } = useParams();
  const product = () => getProductById(id);
  const [products, error] = useAsync(product, id);

  const [open,setOpen] = useState(false)

    const cerrarModal = () => setOpen(false)

    const modal = () => {
        return (
            <Modal
                open={open}
                className='containerCarrito'
                onClose={cerrarModal}
                >
                <h1>Carrito de compras:</h1>
            </Modal>
        )
    }

  if (error) {
    <div>
      <h1>Hubo un error con la carga del producto</h1>
    </div>
  }

  return (
    <>
      <nav className="navContainer">
        <Link to='/' style={{ textDecoration: 'none' }} className="navTitle">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALxJREFUSEvt0jFqAmEQhuHHQwRMn4hnEMFbCKmFXCdYC97FCLmDjb2QQ4SBLAQLZ343Cxa77b+878w338TA32RgvlGQJvyQEU3xho90fJqPHPBPvOIdu0zSElHAj3jBGQtc/kvwhK9f+AmrCjzklQ0CHrHMEfAlvrPJu/dM0Ate2WBwQQzRS5JF1EV5feTyHaqCEP2tablJLYJOcsAMG+yzNrUKgveMNbYZvNKiCuPmP/ds0CQdBWlcg0f0A4wQHhnVdK5sAAAAAElFTkSuQmCC"/> 
          <p className='Cinzel' style={{ color: 'black' }}>Aromas PLC</p>
        </Link>
        <div className="navInfo">
          <p className='links'>Productos</p>
          <button className='btnCarrito' onClick={() => setOpen(true)}>Carrito</button> 
          {modal()}
          <p className='links'>Eventos</p>
          <Link to="/contactanos" className='links'>Contacto</Link>   
        </div>
      </nav>
      <div className="contenedorProducto">
        <div key={products.id} className="producto">
          <img src={products.img} alt="No se pudo cargar la imagen"/>
          <div className="productoInfo">
            <h2>{products.nombre}</h2>
            <p>Precio: ${products.precio}</p>
            <button className="botonCarrito">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
