import './detalle.css'
import { getProductById } from '../../products/products'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'
import { useCart } from '../../context/CartContext'

const Detalle = () => {
    const { id } = useParams()
    const product = () => getProductById(id)
    const [products, error] = useAsync(product, id)

    const { addProd } = useCart()

    if (error) {
        <div>
            <h1>Hubo un error con la carga del producto</h1>
        </div>
    }

    return (
        <div key={products.id}>
            <h1>Detalle de producto</h1>
            <p>{products.nombre}</p>
            <p>${products.precio}</p>
            <button
                onClick={addProd(products)}
                >
                Agregar al carrito
            </button>
        </div>
    )
}

export default Detalle