import { useEffect } from "react"
import { useState } from "react"

export const useAsync = (asyncFunction) => {
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

    }, [])

    return [products,error]
}