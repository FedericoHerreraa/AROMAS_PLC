import './header.css'

const Header = () => {
    return (
        <>
            <nav className="navContainer">
                <div className="navTitle">
                    <p>Aromas PLC</p>
                </div>
                <div className="navInfo">
                    <p>Productos</p>
                    <p>Eventos</p>
                    <p>Contacto</p>
                </div>
            </nav>
            <div className="inicio">
                <div className="titleContainer">
                    <p>Bienvenidos</p>
                    <h1>Aromas PLC</h1>
                </div>
            </div>
            <div className="verMas">
                <p>Ver mas</p>
            </div>
        </>
    )
}

export default Header