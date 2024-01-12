import { createContext, useContext, useState } from "react";
import { getAllProductsRequest, getProductRequest } from "../api/pods";

const ProdsContext = createContext()

export const ProdsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            const res = await getAllProductsRequest()
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    } 

    const getProduct = async (id) => {
        try {
            const res = await getProductRequest(id)
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ProdsContext.Provider value={{ products, getProducts, getProduct, loading }}>
            {children}
        </ProdsContext.Provider>
    )
}

export const useProds = () => {
    return useContext(ProdsContext)
}