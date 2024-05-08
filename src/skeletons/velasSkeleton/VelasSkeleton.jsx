import stylesVelas from "./velas.module.css";

const VelasSkeleton = () => {
    const skeletonItems = Array.from({ length: 4 }, (_, index) => (
        <div key={index} className={stylesVelas.card}>
            <div className={stylesVelas.contImg}>
                <div className={stylesVelas.skeletonImage}></div>
            </div>
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
                <h3>Velas Aromáticas</h3>
            </div>
            <div>{skeletonItems}</div>
        </div>
    );
};

export default VelasSkeleton;
