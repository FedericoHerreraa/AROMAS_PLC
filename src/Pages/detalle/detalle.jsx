<<<<<<< HEAD
import './detalle.css'
import { getProductById } from '../../products/products'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
=======
import "./detalle.css";
import { getProductById } from "../../products/products";
import { useParams } from "react-router-dom";
import { useAsync } from "../../hooks/useAsync";
>>>>>>> ff53e0c7733baa997a9585ada227d3b45f1cd568

const Detalle = () => {
  const { id } = useParams();
  const product = () => getProductById(id);
  const [products, error] = useAsync(product, id);

<<<<<<< HEAD
=======
  if (error) {
    <div>
      <h1>Hubo un error con la carga del producto</h1>
    </div>;
  }
>>>>>>> ff53e0c7733baa997a9585ada227d3b45f1cd568

  return (
    <div key={products.id}>
      <h1>Detalle de producto</h1>
      <img src={products.img} alt="" />
      <p>{products.nombre}</p>
      <p>${products.precio}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

<<<<<<< HEAD
    return (
        <div key={products.id}>
            <h1>Detalle de producto</h1>
            <p>{products.nombre}</p>
            <p>${products.precio}</p>
            <button
                >
                Agregar al carrito
            </button>
        </div>
    )
}

export default Detalle
=======
export default Detalle;
>>>>>>> ff53e0c7733baa997a9585ada227d3b45f1cd568
