import { createContext, useContext, useState } from "react";
import { getAllProductsRequest, getProductRequest } from "../api/pods";
import { getAllVelasRequest } from "../api/velas";

const ProdsContext = createContext()

export const ProdsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [velas, setVelas] = useState([])
    const [loading, setLoading] = useState(true)

    const getAllVelas = async () => {
        try {   
            const res = await getAllVelasRequest()
            setVelas(res.data)
            console.log(res.data)
        } catch (errro) {
            console.log(error)
        }
    }

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
        } finally {
            setLoading(false)
        }
    }

    return (
        <ProdsContext.Provider value={{ products, getProducts, getProduct, loading, getAllVelas, velas }}>
            {children}
        </ProdsContext.Provider>
    )
}

export const useProds = () => {
    return useContext(ProdsContext)
}