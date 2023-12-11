import Header from '../../components/header/header'
import Eventos from '../../components/eventos/eventos'
import Footer from '../../components/footer/Footer'
import Productos from '../../components/productos/productos'
import HomeSpray from '../../components/homeSpray/HomeSpray'

const Home = () => {
  return (
    <div>
        <Header/>
        <Eventos/>
        <Productos/>
        <HomeSpray/>
        <Footer/>
    </div>
  )
}

export default Home