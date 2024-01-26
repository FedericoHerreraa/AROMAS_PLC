import stylesVelas from "./velas.module.css"
import Swal from 'sweetalert2'
import velaCocoVaini from '../../img/velaCocoVaini.jpg'
import velaFrutosRojos from '../../img/velaFrutosRojos.avif'
import { useState, useEffect } from "react"
import { useProds } from "../../context/ProdsContext"

const Velas = () => {
  const [loading, setLoading] = useState(true)
  const { velas, getAllVelas } = useProds()

  const isMobile = () => window.innerWidth < 768
  const mobile = isMobile() 

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
      title: '¡Todas las velas se hacen por encargo!',
      text: mobile ? 'desde celu' : 'desde compu'
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
        {velas.map((vela, index) => (
          <div key={index} className={stylesVelas.card}>
            {index % 2 === 0 ? (
              <>
                <div className={stylesVelas.contImg}>
                  <img src={velaCocoVaini} alt="" className={stylesVelas.img} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                  <h3>{vela.nombre}</h3>
                  <p style={{ fontSize: "18px"}}>{vela.descripcion}
                  </p>
                  <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
                  <h3>{vela.nombre}</h3>
                  <p style={{ fontSize: "18px"}}>{vela.descripcion}
                  </p>
                  <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
                </div>
                <div className={stylesVelas.contImg}>
                  <img src={velaFrutosRojos} alt="" className={stylesVelas.img} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Velas