import { useEffect } from "react"
import { useState } from "react"

export const useAsync = (asyncFunction, dependencies = []) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        asyncFunction()
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [...dependencies])

    return [products,error,loading]
}