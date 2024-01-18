import stylesVelas from "./velas.module.css"
import Swal from 'sweetalert2'
import velaCocoVaini from '../../img/velaCocoVaini.jpg'
import velaFrutosRojos from '../../img/velaFrutosRojos.avif'

const Velas = () => {
  const btn = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'info',
      title: 'No disponible por el momento...',
      text: 'Proximamente!'
    });
  }

  return (
    <div>
      <div className={stylesVelas.proximo}>
          <h3 >¡Velas aromáticas!</h3>
      </div>
      <div className={stylesVelas.container}>
        <div className={stylesVelas.card}>
          <div className={stylesVelas.contImg}>
            <img src={velaCocoVaini} alt="" className={stylesVelas.img} />
            {/* <div className={stylesVelas.contImgChica}>
              <img src='https://hierbassuquia.com.ar/wp-content/uploads/2018/09/Vainilla-en-Chauchas-1.jpg' alt="" className={stylesVelas.imgChica}/>
              <img src="https://www.cocinista.es/download/bancorecursos/ingredientes/ingrediente-coco.jpg" alt="" className={stylesVelas.imgChica}/>
            </div> */}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
            <h3>Coco-Vainilla</h3>
            <p style={{ fontSize: "18px"}}>Sumérgete en la indulgencia tropical con nuestra vela Coco-Vainilla. La fusión de coco y vainilla crea un ambiente cálido y acogedor. Con un precio de 3200, esta vela elegante y aromática es la elección perfecta para transformar cualquier espacio en un refugio relajante. Experimenta la armonía de los aromas exquisitos con nuestra vela Coco-Vainilla: lujo asequible para tus sentidos.
            </p>
            <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
          </div>
        </div>
        <div className={stylesVelas.card}>
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
            <img src={velaFrutosRojos} alt="" className={stylesVelas.img} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Velas