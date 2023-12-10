import stylesFooter from "./Footer.module.css"
import { BiLogoGmail } from "react-icons/bi"
import { PiMapPinFill } from "react-icons/pi"
import { AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
  const desplazamiento = () => {
    window.scrollTo({
      top: window.innerHeight + 620,
      behavior: 'smooth'
    })
  }

  return (
    <div className={stylesFooter.footercontainer}>
      <footer>
        <div className={stylesFooter.footerContent}>
          <div className={stylesFooter.contactInfo}>
            <h4>Contacto</h4>
            <p> <BiLogoGmail /> aromass.plc@gmail.com</p>
            <p><PiMapPinFill /> Monte Castro, CABA</p>
          </div>
          <div className={stylesFooter.socialLinks}>
            <h4>Redes Sociales</h4>
            <ul>
              <AiOutlineInstagram />
              <a style={{ textDecoration: 'none', color: 'black', marginLeft: '5px'}} target="blank" href="https://www.instagram.com/aromas.plc/">Instagram</a>
            </ul>
          </div>
          <div className={stylesFooter.siteLinks}>
            <h4>Enlaces del Sitio</h4>
            <ul>
              <li><a style={{ color: 'black' }} href="#">Inicio</a></li>
              <li><a style={{ color: 'black', textDecoration: 'underline', cursor: 'pointer' }} onClick={desplazamiento}>Productos</a></li>
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