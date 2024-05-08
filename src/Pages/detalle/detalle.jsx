import stylesDetalle from "./detalle.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import Carrito from "../../components/carrito/carrito";
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useProds } from "../../context/ProdsContext";

const Detalle = () => {
  const { getProduct, products } = useProds()
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    if (loading) {
      const loadData = async () => {
        await getProduct(params.id)
        setLoading(false)
      }

      loadData()
    }
  }, [getProduct, loading, params.id])

  const { addProd, cart } = useCart()

  const [open,setOpen] = useState(false)
  const [cantidad,setCantidad] = useState(0)

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
                </div>
          </Modal>
      )
  }

  if (loading) {
    return (
      <div className={stylesDetalle.skeletonContainer}>
        <div className={stylesDetalle.skeletonImage}></div>
        <div className={stylesDetalle.skeletonInfo}>
          <div className={stylesDetalle.skeletonTitle}></div>
          <div className={stylesDetalle.skeletonDescription}></div>
          <div className={stylesDetalle.skeletonPrice}></div>
          <div className={stylesDetalle.skeletonButtons}></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <nav className={stylesDetalle.navContainer}>
        <Link onClick={() => window.history.back()} style={{ textDecoration: 'none' }} className={stylesDetalle.navTitle}>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALxJREFUSEvt0jFqAmEQhuHHQwRMn4hnEMFbCKmFXCdYC97FCLmDjb2QQ4SBLAQLZ343Cxa77b+878w338TA32RgvlGQJvyQEU3xho90fJqPHPBPvOIdu0zSElHAj3jBGQtc/kvwhK9f+AmrCjzklQ0CHrHMEfAlvrPJu/dM0Ate2WBwQQzRS5JF1EV5feTyHaqCEP2tablJLYJOcsAMG+yzNrUKgveMNbYZvNKiCuPmP/ds0CQdBWlcg0f0A4wQHhnVdK5sAAAAAElFTkSuQmCC"/> 
          <p className='Cinzel' style={{ color: 'black', marginTop: '15px' }}>Aromas PLC</p>
        </Link>
        <div className={stylesDetalle.navInfo}>
          <div style={{ marginTop: '7px'}}>
            <Badge style={{ marginRight: '30px', marginTop: '8px' }} color="secondary" badgeContent={cart.length}>
              <button className={stylesDetalle.btnCarrito} onClick={() => setOpen(true)}>Carrito</button>
            </Badge>
          </div>
          {modal()}
          <p className={stylesDetalle.links} style={{ marginTop: '16px'}}>Eventos</p>
          <Link to="/contactanos" className={stylesDetalle.links} style={{ marginTop: '15px' }}>Contacto</Link>   
        </div>
      </nav>
      <div className={stylesDetalle.contenedorProducto}>
        <div key={products.id} className={stylesDetalle.producto}>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <img src={products.img} alt="No se pudo cargar la imagen"/>
          </div>
          <div className={stylesDetalle.productoInfo}>
            <div className={stylesDetalle.titulo}>
              <h2>{products.nombre}</h2>
            </div>
            <p className={stylesDetalle.descripcion}>{products.descripcion}</p>
            <p className={stylesDetalle.precio}>Precio: ${products.precio}</p>
            <div className={stylesDetalle.botones}>
              <div className={stylesDetalle.btnMasMenos}>
                {cantidad == 0 ? (
                    <button className={stylesDetalle.btnRestar}>
                        <RemoveIcon fontSize="5px"/>
                      </button>                
                    ) : (
                      <button className={stylesDetalle.btnRestar} onClick={() => setCantidad(cantidad - 1)}>
                        <RemoveIcon fontSize="5px"/>
                      </button>                
                    )
                }
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p>{cantidad}</p>
                </div>
                <button className={stylesDetalle.btnSumar} onClick={() => setCantidad(cantidad + 1)}>
                  <AddIcon fontSize="5px"/>
                </button>
              </div>
                {cantidad == 0 ? (
                  <>
                    <button className={stylesDetalle.botonCarrito}>
                      Agregar al carrito
                    </button>
                  </>
                ): (
                  <>
                    <button 
                      onClick={() => {
                        setCantidad(0)
                        addProd(products, cantidad
                      )}} 
                      className={stylesDetalle.botonCarrito}
                    >
                      Agregar al carrito
                    </button>
                  </>
                )  
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
