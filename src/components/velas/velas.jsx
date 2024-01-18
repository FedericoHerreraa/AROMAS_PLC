import stylesVelas from "./velas.module.css"
import Swal from 'sweetalert2'
import velaCocoVaini from '../../img/velaCocoVaini.jpg'
import velaFrutosRojos from '../../img/velaFrutosRojos.avif'
import { useState, useEffect } from "react"
import { useProds } from "../../context/ProdsContext"

const Velas = () => {
  const [loading, setLoading] = useState(true)
  const { velas, getAllVelas } = useProds()

  useEffect(() => {
    if (loading) {
      const loadData = async () => {
        await getAllVelas()
        setLoading(false)
      }
      loadData()
    }
  }, [getAllVelas])

  const btn = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'No disponible por el momento...',
      text: 'Proximamente!'
    });
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div className="spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={stylesVelas.proximo}>
          <h3 >¡Velas aromáticas!</h3>
      </div>
      <div className={stylesVelas.container}>
        {velas.map(vela => (
          <div className={stylesVelas.card}>
            <div className={stylesVelas.contImg}>
              <img src={vela.img} alt="" className={stylesVelas.img} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
              <h3>{vela.nombre}</h3>
              <p style={{ fontSize: "18px"}}>{vela.descripcion}
              </p>
              <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
            </div>
          </div>
        ))}
        {/* <div className={stylesVelas.card}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  marginBottom: '20px', marginTop: '20px' }}>
            <h3>Frutos Rojos</h3>
            <p style={{ fontSize: "18px"}}>Descubre el encanto de nuestro difusor de aromas Frutos Rojos, una experiencia sensorial que transforma tu espacio en un paraíso olfativo vibrante. La cuidada fusión de bayas y frutos rojos despierta tus sentidos, creando una atmósfera envolvente y revitalizante. Con un precio de 3200, este elegante difusor no solo embellece tu entorno, sino que también se convierte en un regalo excepcional. La presentación sofisticada y la liberación gradual de fragancias hacen de este difusor una elección única. Suma un toque de lujo a tu vida cotidiana con la frescura irresistiblemente dulce de nuestro difusor de Frutos Rojos.
            </p>
            <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
          </div>
          <div className={stylesVelas.contImg}>
            {/* <div className={stylesVelas.contImgChica}>
              <img src="https://libbys.es/wordpress/wp-content/uploads/2017/05/frutosrojoscalor%C3%ADas.jpg" alt="" className={stylesVelas.imgChica}/>
              <img src="https://acdn.mitiendanube.com/stores/001/679/168/products/mix-frutos-rojos-especial1-c1228e22be831cd3a116217121865533-640-0.jpg" alt="" className={stylesVelas.imgChica}/>
            </div> */}
            {/* <img src={velaFrutosRojos} alt="" className={stylesVelas.img} /> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Velas