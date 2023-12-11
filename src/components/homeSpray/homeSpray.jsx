import stylesSpray from "./homeSpray.module.css"

const HomeSpray = () => {
  return (
    <div>
      <div className={stylesSpray.proximo}>
          <h3 >¡Proximamente Home Spray!</h3>
      </div>
      <div className={stylesSpray.container}>
        <div className={stylesSpray.card}>
          <img src='https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg' alt="" className={stylesSpray.img} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum accusantium quas soluta aut quisquam ipsam eius, libero commodi minus corrupti tenetur ratione nam repellendus eaque laudantium deleniti neque provident.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquid sapiente nobis cum quaerat soluta commodi culpa odio quisquam, reprehenderit iure maxime ut, dolores non ab atque voluptatum hic totam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolor quas illum, impedit neque ducimus voluptatum quos non ea praesentium debitis ab culpa nihil fugit, est eius, rerum id dolorem?
          </p>
        </div>
        <div className={stylesSpray.card}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat beatae! Ad sint rem debitis quia officiis. Dolorem aperiam nulla repudiandae nemo assumenda, magnam blanditiis est ea nesciunt alias. Tenetur!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquid sapiente nobis cum quaerat soluta commodi culpa odio quisquam, reprehenderit iure maxime ut, dolores non ab atque voluptatum hic totam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolor quas illum, impedit neque ducimus voluptatum quos non ea praesentium debitis ab culpa nihil fugit, est eius, rerum id dolorem?
          </p>
          <img src='https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg' alt="" className={stylesSpray.img} />
        </div>
        <div className={stylesSpray.card}>
          <img src='https://acdn.mitiendanube.com/stores/492/056/products/img_35481-396b97c13d9d430d5416549593579806-1024-1024.jpg' alt="" className={stylesSpray.img} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat nobis laboriosam pariatur at unde, eligendi iusto eius ipsum neque totam, assumenda quo dolores consequatur vero quia veritatis blanditiis corrupti?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae aliquid sapiente nobis cum quaerat soluta commodi culpa odio quisquam, reprehenderit iure maxime ut, dolores non ab atque voluptatum hic totam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi dolor quas illum, impedit neque ducimus voluptatum quos non ea praesentium debitis ab culpa nihil fugit, est eius, rerum id dolorem?
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeSpray