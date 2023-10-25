import Header from '../../components/header/header'
import Eventos from '../../components/eventos/eventos'
import Footer from '../../components/footer/Footer'
import Productos from '../../components/productos/productos'

const Home = () => {
  return (
    <div>
        <Header/>
        <Eventos/>
        <Productos/>
        <Footer/>
    </div>
  )
}

export default Home