import stylesFooter from "./Footer.module.css"
import { AiOutlineInstagram } from "react-icons/ai"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, velit voluptatum in saepe ratione cupiditate maiores? Aliquam, eligendi fuga dolorum incidunt earum eveniet ad dolor cupiditate natus, explicabo laborum corporis!</p>
          </div>
          <div className={stylesFooter.socialLinks}>
            <h4>Redes Sociales</h4>
            <div style={{ display: 'flex', alignItems: 'center'}}>
              <AiOutlineInstagram size={'20px'} color="#8d48a8"/>
              <a target="blank" className={stylesFooter.ig} href="https://www.instagram.com/aromas.plc/">Instagram</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px'}}>
              <WhatsAppIcon fontSize="small" style={{ color: 'green' }} size={'10px'} color="green"/>
              <a target="blank" className={stylesFooter.num} href="https://www.instagram.com/aromas.plc/">+54 9 11 44559933</a>
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