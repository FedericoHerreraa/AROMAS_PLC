import stylesVelas from "./VelasSkeleton.module.css";

const VelasSkeleton = () => {
  // Genera un array de 2 elementos para mostrar 2 items en el skeleton
  const skeletonItems = Array.from({ length: 2 }, (_, index) => (
    <div key={index} className={stylesVelas.card}>
      <div className={stylesVelas.skeletonImage}></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
        <div className={stylesVelas.skeletonTitle}></div>
        <div className={stylesVelas.skeletonDescription}></div>
        <div className={stylesVelas.skeletonButton}></div>
      </div>
    </div>
  ));

  return (
    <div className={stylesVelas.container}>
      <div className={stylesVelas.proximo}>
        <h3 className={stylesVelas.title}>Velas aromáticas</h3>
      </div>
      <div>{skeletonItems}</div>
    </div>
  );
};

export default VelasSkeleton;
