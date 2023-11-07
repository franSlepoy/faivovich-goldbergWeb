
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
import Cuatrocientos4 from "./components/pages/404/Cuatrocientos4"
import EnConstruccion from "./components/pages/enConstruccion/EnConstruccion"
import NavBar1 from "./components/common/NavBar/NavBar1"
import Publicaciones from "./components/pages/publicaciones/Publicaciones"


function App() {
   

  return (
    <BrowserRouter>
    <NavBar1/>
   
    <Routes>
       
       <Route path='/' element={<EnConstruccion/>}/>
       <Route path='/test' element={<Home/>}/>
       <Route path='/publications' element={<Publicaciones/>}/>
       <Route path='/menuMobile' element={<MenuMobile/>}/>
       <Route path='/contact' element={<Contacto/>}/>
       <Route path='/impressum' element={<Impressum/>}/>
       <Route path='/bibliography' element={<Bibliography/>}/>
       <Route path='/decomiso' element={<Decomiso/>}/>
       <Route path='/numero' element={<Numero/>}/>
       <Route path='/elTaco' element={<ElTaco/>}/>
       <Route path='/encuentroConElMataco' element={<EncuentroConElMataco/>}/>
       <Route path='*' element={<Cuatrocientos4/>}/>
     </Routes>

    
    </BrowserRouter>
    
  )
}

export default App
