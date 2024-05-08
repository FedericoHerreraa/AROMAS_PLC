import stylesDetalle from './DetalleSkeleton.module.css';

const DetalleSkeleton = () => {
    return (
        <div className={stylesDetalle.skeletonContainer}>
            <div className={stylesDetalle.skeletonImage}></div>
            <div className={stylesDetalle.skeletonInfo}>
                <div className={stylesDetalle.skeletonTitle}></div>
                <div className={stylesDetalle.skeletonDescription}></div>
                <div className={stylesDetalle.skeletonPrice}></div>
                <div className={stylesDetalle.skeletonButtons}></div>
            </div>
        </div>
    )
}

export default DetalleSkeleton;