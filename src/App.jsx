
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenuMobile from "./components/common/NavBar/MenuMobile"
import NavBar from "./components/common/NavBar/NavBar"
import Bibliography from "./components/pages/bibliography/Bibliography"
import Contacto from "./components/pages/contacto/Contacto"
import Decomiso from "./components/pages/decomiso/Decomiso"
import ElTaco from "./components/pages/elTaco/ElTaco"
import Home from "./components/pages/home/Home"
import Numero from "./components/pages/numero/Numero"
import Impressum from "./components/pages/impressum/Impressum"
import EncuentroConElMataco from "./components/pages/encuetroConelMataco/EncuentroConElMataco"




function App() {
   

  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/menuMobile' element={<MenuMobile/>}/>
       <Route path='/contact' element={<Contacto/>}/>
       <Route path='/impressum' element={<Impressum/>}/>
       <Route path='/bibliography' element={<Bibliography/>}/>
       <Route path='/decomiso' element={<Decomiso/>}/>
       <Route path='/numero' element={<Numero/>}/>
       <Route path='/elTaco' element={<ElTaco/>}/>
       <Route path='/encuentroConElMataco' element={<EncuentroConElMataco/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
