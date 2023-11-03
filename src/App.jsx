import { Route, Routes,BrowserRouter } from "react-router-dom"
import Contactanos from "./Pages/Contactanos/Contactanos"
import Home from "./Pages/home/Home"
import Detalle from "./Pages/detalle/detalle"
import { CartProvider } from "./context/CartContext"


function App() {
  return (
    <BrowserRouter> 
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contactanos" element={<Contactanos/>} />
          <Route path="/detalle/:id" element={<Detalle/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
