import stylesFooter from "./Footer.module.css"
import { BiLogoGmail } from "react-icons/bi"
import { PiMapPinFill } from "react-icons/pi"
import { AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className={stylesFooter.footercontainer}> 
        <footer>
      <div className={stylesFooter.footerContent}>
        <div className={stylesFooter.contactInfo}>
          <h4>Contacto</h4>
          <div>              
            <p> <BiLogoGmail/> aromass.plc@gmail.com</p>
          </div>
          <p><PiMapPinFill/> Monte Castro, CABA</p>
        </div>
        <div className={stylesFooter.socialLinks}>
          <h4>Redes Sociales</h4>
          <ul>
              <AiOutlineInstagram/>
              <a href="#">Instagram</a>
          </ul>
        </div>
        <div className={stylesFooter.siteLinks}>
          <h4>Enlaces del Sitio</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
          </ul>
        </div>
      </div>
      <div className={stylesFooter.copyright}>
        <p>&copy; 2023 Aromas PLC. Todos los derechos reservados.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer