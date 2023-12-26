import Header from '../../components/header/header'
import Eventos from '../../components/eventos/eventos'
import Footer from '../../components/footer/Footer'
import Productos from '../../components/productos/productos'
import Foto from '../../components/fotoFondo/foto'
import Velas from '../../components/velas/velas'

const Home = () => {
  return (
    <div>
        <Header/>
        <Eventos/>
        <Productos/>
        {/* <Foto/> */}
        <Velas/>
        <Footer/>
    </div>
  )
}

export default Home