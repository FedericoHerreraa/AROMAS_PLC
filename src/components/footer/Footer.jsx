import "./Footer.css"
const Footer = () => {
  return (
    <div className='footercontainer'> 
        <footer>
      <div className="footer-content">
        <div className="contact-info">
          <h4>Contacto</h4>
          <p>Correo: info@example.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: 123 Calle Principal</p>
        </div>
        <div className="social-links">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div className="site-links">
          <h4>Enlaces del Sitio</h4>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Nombre de la Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer