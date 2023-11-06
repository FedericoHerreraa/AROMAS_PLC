import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../products/products";
import "./productos.css";
import { Link } from "react-router-dom";

const Productos = () => {
  const products = () => getProducts();
  const [productos, error] = useAsync(products);

  if (error) {
    return (
      <div>
        <h1>Ha ocurrido un error: {error}</h1>
      </div>
    );
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
