import { Route, Routes,BrowserRouter } from "react-router-dom"
import Contactanos from "./Pages/Contactanos/Contactanos"
import Home from "./Pages/home/Home"
import Detalle from "./Pages/detalle/detalle"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactanos" element={<Contactanos/>} />
        <Route path="/detalle/:id" element={<Detalle/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
