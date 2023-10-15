import "./Contactanos.css"

const Contactanos = () => {
  return (
    <div className="contactanosContainer">
        <div className="form">
            <div>
                <p>Nombre</p>
                <input type="text" />
            </div>
            <div>
                <p>Mail</p>
                <input type="email" />
            </div>
            <div>
                <p>Mensaje</p>
                <input type="text" />
            </div>
        </div>
        <div className="info">
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Contactanos