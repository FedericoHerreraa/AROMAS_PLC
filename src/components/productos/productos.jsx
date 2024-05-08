import stylesProducts from "./productos.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProds } from "../../context/ProdsContext";
import ProductosSkeleton from "../../skeletons/productsSkeleton/ProductsSkeleton";

const Productos = () => {
  const { getProducts, products } = useProds()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (loading) {
      const loadData = async () => {
        await getProducts()
        setLoading(false)
      }
      loadData()
    }
  }, [getProducts, loading])


  function Arrow(props) {
    // eslint-disable-next-line react/prop-types
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ 
          display: "block", 
          fontSize: '40px', 
          background: 'none',
          backgroundColor: 'black', 
          color: 'black',
          borderRadius: '12px',
          border: '1px solid grey'
        }}
        onClick={onClick}
      />
    );
  }
  
  const [sliderSettings] = useState({
    infinite: true,
    className: stylesProducts.slider,
    dots: true,
    centerMode: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <Arrow/>,
    prevArrow: <Arrow/>,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],

  });



  if (loading) {
    return <ProductosSkeleton/>
  }

  return (
    <div className={stylesProducts.container}>
      <h1 className={stylesProducts.tituloProds}>Nuestros Productos</h1>
      <Slider {...sliderSettings}>
        {products.map((prod) => (
          <Link key={prod._id} className={stylesProducts.detalle} to={`/detalle/${prod._id}`}>
            <div className={stylesProducts.prod}>
              <img src={prod.img} className={stylesProducts.img} alt="No se pudo cargar la imagen"/>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <p className={stylesProducts.nombre}>{prod.nombre}</p>
                <p>Precio: ${prod.precio}</p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default Productos;
