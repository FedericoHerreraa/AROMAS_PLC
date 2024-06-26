import stylesVelas from "./velas.module.css"
import Swal from 'sweetalert2'
import velaCocoVaini from '../../img/velaCocoVaini.jpg'
import velaFrutosRojos from '../../img/velaFrutosRojos.avif'
import { useState, useEffect } from "react"
import { useProds } from "../../context/ProdsContext"
import VelasSkeleton from "../../skeletons/velasSkeleton/VelasSkeleton"

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
  }, [getAllVelas, loading])

  

  const htmlCelu = `
    <div>
      <a href="https://api.whatsapp.com/send?phone=5491122758931&text=Hace%20tu%20pedido%20aca" style="text-decoration: none;" target="_blank">Hace tu pedido aca.</a>
    </div>
  `

  const htmlCompu = `
    <div>
      <p>Hace tu pedido al +54 9 11 2275-8931</p>
    </div>
  `

  const btn = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: '¡Todas las velas se hacen por encargo!',
      html: mobile ? htmlCelu : htmlCompu
    });
  }

  if (loading) {
    return <VelasSkeleton />
  }

  return (
    <div className={stylesVelas.container}>
      <div className={stylesVelas.proximo}>
          <h3 >¡Velas aromáticas!</h3>
      </div>
      <div>
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