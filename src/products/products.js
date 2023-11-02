import { getDocs, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

export const getProducts = () => {
    const productsRef = collection(db, 'productos')

    return getDocs(productsRef)
        .then(res => {
            const productsAdapted = res.docs.map(doc => {
                const fields = doc.data()
                return { id: doc.id, ...fields }
            })
            return productsAdapted
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getProductById = (id) => {
    const productRef = doc(db, 'productos', id)
    return getDoc(productRef)
        .then(res => {
            const data = res.data()
            const productAdapted = { id: res.id, ...data }
            return productAdapted
        })
        .catch(error => {
            console.log(error)
        })
}

