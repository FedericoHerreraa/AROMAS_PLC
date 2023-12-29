import { useAsync } from "../../hooks/useAsync";
import { getProducts } from "../../products/products";
import stylesProducts from "./productos.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Productos = () => {
  const products = () => getProducts();
  const [productos, error, loading] = useAsync(products);

  function Arrow(props) {
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
          autoplaySpeed: 2000,
        },
      },
    ],

  });

  if (error) {
    return (
      <div>
        <h1>Ha ocurrido un error: {error}</h1>
      </div>
    );
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
    <div className={stylesProducts.container}>
      <h1 className={stylesProducts.tituloProds}>Nuestros Productos</h1>
      <Slider {...sliderSettings}>
        {productos.map((prod) => (
          <Link key={prod.id} className={stylesProducts.detalle} to={`/detalle/${prod.id}`}>
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
