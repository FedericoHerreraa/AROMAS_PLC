import './detalle.css'
import { getProductById } from '../../products/products'
import { useParams } from 'react-router-dom'
import { useAsync } from '../../hooks/useAsync'

const Detalle = () => {
    const idProd = useParams()

    console.log(idProd)
    const product = () => getProductById(idProd)
    const [products, error] = useAsync(product)

    console.log(products)

    return (
        <div>
            <h1>Detalle de producto</h1>
        </div>
    )
}

export default Detalle