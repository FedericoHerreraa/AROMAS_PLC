import { Route, Routes,BrowserRouter } from "react-router-dom"
import Contactanos from "./Pages/Contactanos/Contactanos"
import Home from "./Pages/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contactanos" element={<Contactanos/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
