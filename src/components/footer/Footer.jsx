import "./Footer.css"
import {BiLogoGmail} from "react-icons/bi"
import {PiMapPinFill} from "react-icons/pi"
import {AiOutlineInstagram} from "react-icons/ai"
const Footer = () => {
  return (
    <div className='footercontainer'> 
        <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contacto</h4>
          <div>
              
            <p> <BiLogoGmail/> aromass.plc@gmail.com</p>
          </div>
          <p><PiMapPinFill/> Monte Castro, CABA</p>
        </div>
        <div className="social-links">
          <h4>Redes Sociales</h4>
          <ul>
              <AiOutlineInstagram/>
              <a href="#">Instagram</a>
          </ul>
        </div>
        <div className="site-links">
          <h4>Enlaces del Sitio</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Aromas PLC. Todos los derechos reservados.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer