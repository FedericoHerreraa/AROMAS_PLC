import { getDocs, collection, QuerySnapshot } from 'firebase/firestore'
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