import stylesFooter from "./Footer.module.css"
import { AiOutlineInstagram } from "react-icons/ai"
import MailIcon from '@mui/icons-material/Mail';
import { Link } from "react-router-dom"

const Footer = () => {
  const desplazamiento = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={stylesFooter.footercontainer}>
      <footer>
        <div className={stylesFooter.footerContent}>
          <div className={stylesFooter.contactInfo}>
            <h4>Sobre nosotros</h4>
            <p>Somos un equipo comprometido a ofrecer difusores de ambiente asequibles sin sacrificar calidad. Descubre la perfecta combinación entre precio y fragancia, creando ambientes encantadores a un costo accesible!</p>
          </div>
          <div className={stylesFooter.socialLinks}>
            <h4>Redes Sociales</h4>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <AiOutlineInstagram size={'20px'} color="#8d48a8"/>
              <a target="blank" className={stylesFooter.ig} href="https://www.instagram.com/aromas.plc/">Instagram</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px'}}>
              <MailIcon fontSize="small" style={{ color: '#b86863' }} size={'10px'} color="green"/>
              <a className={stylesFooter.num}>aromas.plc@gmail.com</a>
            </div>
          </div>
          <div className={stylesFooter.siteLinks}>
            <h4>Enlaces del Sitio</h4>
            <div>
              <button onClick={desplazamiento} className={stylesFooter.btnFooter}>Inicio</button>
              <Link className={stylesFooter.btnFooter} to='/contactanos'>Preguntanos!</Link>
            </div>
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