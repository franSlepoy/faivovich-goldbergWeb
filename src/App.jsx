
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Decomiso from "./components/pages/decomiso/Decomiso"
import Home from "./components/pages/home/Home"




function App() {
   

  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
       <Route path='/index' element={<Home/>}/>
       <Route path='/decomiso' element={<Decomiso/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
