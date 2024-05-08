import stylesProducts from "./ProductsSkeleton.module.css";

const ProductosSkeleton = () => {
  // Genera un array de 8 elementos para mostrar 8 items en el skeleton
  const skeletonItems = Array.from({ length: 8 }, (_, index) => (
    <div key={index} className={stylesProducts.skeletonItem}>
      <div className={stylesProducts.skeletonImage}></div>
      <div className={stylesProducts.skeletonInfo}>
        <div className={stylesProducts.skeletonTitle}></div>
        <div className={stylesProducts.skeletonPrice}></div>
      </div>
    </div>
  ));

  return (
    <div className={stylesProducts.container}>
      <h1 className={stylesProducts.tituloProds}>Nuestros Productos</h1>
      <div className={stylesProducts.slider}>{skeletonItems}</div>
    </div>
  );
};

export default ProductosSkeleton;
