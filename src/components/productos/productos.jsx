import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../products/products";
import stylesProducts from "./productos.module.css";
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
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div className="spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={stylesProducts.container}>
      <h1 className={stylesProducts.tituloProds}>Nuestros Productos</h1>
      <div className={stylesProducts.containerProd}>
        {productos.map((prod) => {
          return (
            <Link key={prod.id} className={stylesProducts.detalle} to={`/detalle/${prod.id}`}>
              <div className={stylesProducts.prod}>
                  <img src={prod.img} className={stylesProducts.img} alt="No se pudo cargar la imagen"/>
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
