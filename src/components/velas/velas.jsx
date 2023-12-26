import stylesVelas from "./velas.module.css"
import Swal from 'sweetalert2'

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
            <img src='https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg' alt="" className={stylesVelas.img} />
            <div className={stylesVelas.contImgChica}>
              <img src="https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg" alt="" className={stylesVelas.imgChica}/>
              <img src="https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg" alt="" className={stylesVelas.imgChica}/>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum accusantium quas soluta aut quisquam ipsam eius, libero commodi minus corrupti tenetur ratione nam repellendus eaque laudantium deleniti neque provident.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquid sapiente nobis cum quaerat soluta commodi culpa odio quisquam, reprehenderit iure maxime ut, dolores non ab atque voluptatum hic totam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolor quas illum, impedit neque ducimus voluptatum quos non ea praesentium debitis ab culpa nihil fugit, est eius, rerum id dolorem?
            </p>
            <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
          </div>
        </div>
        <div className={stylesVelas.card}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  marginBottom: '20px' }}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat beatae! Ad sint rem debitis quia officiis. Dolorem aperiam nulla repudiandae nemo assumenda, magnam blanditiis est ea nesciunt alias. Tenetur!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquid sapiente nobis cum quaerat soluta commodi culpa odio quisquam, reprehenderit iure maxime ut, dolores non ab atque voluptatum hic totam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolor quas illum, impedit neque ducimus voluptatum quos non ea praesentium debitis ab culpa nihil fugit, est eius, rerum id dolorem?
            </p>
            <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
          </div>
          <div className={stylesVelas.contImg}>
            <img src='https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg' alt="" className={stylesVelas.img} />
            <div className={stylesVelas.contImgChica}>
              <img src="https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg" alt="" className={stylesVelas.imgChica}/>
              <img src="https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg" alt="" className={stylesVelas.imgChica}/>
            </div>
          </div>
        </div>
        <div className={stylesVelas.card}>
          <div className={stylesVelas.contImg}>
            <img src='https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg' alt="" className={stylesVelas.img} />
            <div className={stylesVelas.contImgChica}>
              <img src="https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg" alt="" className={stylesVelas.imgChica}/>
              <img src="https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg" alt="" className={stylesVelas.imgChica}/>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat nobis laboriosam pariatur at unde, eligendi iusto eius ipsum neque totam, assumenda quo dolores consequatur vero quia veritatis blanditiis corrupti?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquid sapiente nobis cum quaerat soluta commodi culpa odio quisquam, reprehenderit iure maxime ut, dolores non ab atque voluptatum hic totam.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolor quas illum, impedit neque ducimus voluptatum quos non ea praesentium debitis ab culpa nihil fugit, est eius, rerum id dolorem?
            </p>
            <button onClick={btn} className={stylesVelas.btnAgregar}>Agregar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Velas