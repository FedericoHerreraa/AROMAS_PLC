import { useAsync } from "../../hooks/useAsync"
import { getProducts } from "../../products/products"
import './productos.css'

const Productos = () => {
    const products = () => getProducts()
    const [ productos, error ] = useAsync(products)

    if (error) {
        console.log(error)
    }

    console.log(productos)

    return (
        <div className="container">
            <h1>Productos</h1>
            {productos.map(prod => {
                return (
                    <div key={prod.id}>
                        <p>Nombre: {prod.nombre}</p>
                        <p>Precio: {prod.precio}</p>
                        <p>imagen: {prod.img}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Productos