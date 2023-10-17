import './header.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <nav className="navContainer">
                <div className="navTitle">
                    <p>Aromas PLC</p>
                </div>
                <div className="navInfo">
                    <p className='links'>Productos</p>
                    <p className='links'>Eventos</p>
                    <Link to="/contactanos" className='links'>Contacto</Link>   
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