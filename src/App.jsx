
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/pages/home/Home"




function App() {
   

  return (
    <BrowserRouter>
    <NavBar/>
     <Routes>
       <Route path='/index' element={<Home/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
