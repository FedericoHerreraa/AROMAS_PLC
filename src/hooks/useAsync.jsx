import { useEffect } from "react"
import { useState } from "react"

export const useAsync = (asyncFunction, dependencies = []) => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        asyncFunction()
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                setError(error)
            })

    }, [...dependencies])

    return [products,error]
}