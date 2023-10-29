import { useAsync } from "../../hooks/useAsync"
import { getProducts } from "../../products/products"
import './productos.css'
import { Link } from "react-router-dom"

const Productos = () => {
    const products = () => getProducts()
    const [ productos, error ] = useAsync(products)

    if (error) {
        return (
            <div>
                <h1>Ha ocurrido un error: {error}</h1>
            </div>
        )
    }

    return (
        <div className="container">
            <h1 className="tituloProds">Productos</h1>
            <div className="containerProd">
                {productos.map(prod => {
                    return (
                        <div key={prod.id} className="prod">
                            <p>{prod.img}</p>
                            <p>{prod.nombre}</p>
                            <p>Precio: ${prod.precio}</p>
                            <Link className="detalle" to={`/detalle/${prod.id}`}>Ver detalle</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos