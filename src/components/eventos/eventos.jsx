import stylesEvento from "./eventos.module.css"

const Eventos = () => {
  return (
    <div className={stylesEvento.eventosContainer}>
        <div>
            <h2>¿No sabes qué dar como souvenir en tu evento?</h2>
            <p>Nosotros podemos asesorarte, accedé a nuestro catálogo!</p>
            <a target="blank" href="https://drive.google.com/file/d/12V6eW3LxEEB--8m4l4P-uVr1Ta8kSCuz/view?usp=drive_link">Catálogo</a>
        </div>
        <div className={stylesEvento.fotoevento}></div>
    </div>
  )
}

export default Eventos;