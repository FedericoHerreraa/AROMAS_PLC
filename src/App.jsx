import { Route, Routes,BrowserRouter } from "react-router-dom"
import Contactanos from "./Pages/Contactanos/Contactanos"
import Home from "./Pages/home/Home"
import Detalle from "./Pages/detalle/detalle"
import FinalizarCompra from "./Pages/finalizarCompra/finalizarCompra"
import { CartProvider } from "./context/CartContext"
import { ProdsProvider } from "./context/ProdsContext"


function App() {
  return (
    <BrowserRouter> 
      <ProdsProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contactanos" element={<Contactanos/>} />
            <Route path="/detalle/:id" element={<Detalle/>}/>
            <Route path="/comprar" element={<FinalizarCompra/>}/>
          </Routes>
        </CartProvider>
      </ProdsProvider>
    </BrowserRouter>
  )
}

export default App
