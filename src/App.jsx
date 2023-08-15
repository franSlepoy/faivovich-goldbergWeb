
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Biography from "./components/pages/biography/Biography"
import Decomiso from "./components/pages/decomiso/Decomiso"
import ElTaco from "./components/pages/elTaco/ElTaco"
import Home from "./components/pages/home/Home"
import Numero from "./components/pages/numero/Numero"




function App() {
   

  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
       <Route path='/index' element={<Home/>}/>
       <Route path='/biography' element={<Biography/>}/>
       <Route path='/decomiso' element={<Decomiso/>}/>
       <Route path='/numero' element={<Numero/>}/>
       <Route path='/elTaco' element={<ElTaco/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
