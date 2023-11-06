import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../products/products";
import "./productos.css";
import { Link } from "react-router-dom";

const Productos = () => {
  const products = () => getProducts();
  const [productos, error, loading] = useAsync(products);

  if (error) {
    return (
      <div>
        <h1>Ha ocurrido un error: {error}</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px', fontSize: '30px' }}>Cargando...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <h1 className="tituloProds">Nuestros Productos</h1>
      <div className="containerProd">
        {productos.map((prod) => {
          return (
            <Link key={prod.id} className="detalle" to={`/detalle/${prod.id}`}>
              <div className="prod">
                  <img src={prod.img} className="img" alt="No se pudo cargar la imagen"/>
                  <p>{prod.nombre}</p>
                  <p>Precio: ${prod.precio}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
