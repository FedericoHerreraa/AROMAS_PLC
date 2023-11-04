import Header from '../../components/header/header'
import Eventos from '../../components/eventos/eventos'
import Footer from '../../components/footer/Footer'
import Productos from '../../components/productos/productos'
import Proximamente from '../../components/proximamente/Proximamente'

const Home = () => {
  return (
    <div>
        <Header/>
        <Eventos/>
        <Productos/>
        <Proximamente/>
        <Footer/>
    </div>
  )
}

export default Home