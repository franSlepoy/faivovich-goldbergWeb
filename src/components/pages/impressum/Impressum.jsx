import { Hidden, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"

const Impressum = () => {
  const [isCvHovered, setIsCvHovered] = useState(false);
  const [isMailHovered, setIsMailHovered] = useState(false);
  const [isBarroHovered, setIsBarroHovered] = useState(false);
  return (
    <>
    <Hidden smDown>
      <Box display={"flex"}
      margin={"auto"}
        width={"60%"}
        ml={"250px"}
         >
      <Box sx={{width:"444px"}} >
      <Typography sx={{mt: 20,mb:8, fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>BIOGRAPHY</Typography>
      <Typography sx={{ fontSize:19, fontFamily:"Albert Sans",}} variant='h3'>Faivovich & Goldberg </Typography>
      <Typography sx={{ fontSize:15, fontFamily:"Albert Sans",}} variant="subtitle2">(Buenos Aires, 1977 / Paris, 1978) </Typography>
      <Typography sx={{ mt:5, width:"444px", fontSize:15, fontFamily:"Albert Sans",textIndent:42}} variant="subtitle2"> 
      
      Since 2006, Guillermo Faivovich and Nicolás Goldberg have been engaged in an intensive and wide-ranging research project—A Guide to Campo del Cielo—that forms the basis of their practice. Campo del Cielo is located in northern Argentina and was the site of a meteor shower about 4,000 years ago. Faivovich & Goldberg combine the roles of scientist, historian, anthropologist, and even bureaucrat, to conduct projects that suggest new ways of seeing and experiencing the terrestrial results of a long ago cosmic event, as well as thinking about its historical and cultural significance. For over a decade, the duo has produced a diverse body of work, laboriously mining the particularities of a singular event, Faivovich & Goldberg illuminate broadly resonant themes: the dynamics between an object and its documentation, the inherent complexities of institutional histories, and the complicated personal, cultural, and national relationships that develop with artifacts. </Typography>
      <Typography sx={{ mb:5, fontSize:15, fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      Some of Faivovich & Goldberg’s latest projects are Encuentro con el El Mataco (Museo Histórico Provincial de Rosario Julio Marc, 2019), Mesón de Fierro: Towards the XXII Century (United Nations, Vienna, 2019), Auf der Suche nach Mesón de Fierro (Naturhistorisches Museum, Vienna, 2018), Decomiso (ASU Art Museum, Arizona, 2018), Un meteorito para la Sociedad Científica del año 2105 (U-Turn, ArteBA, Buenos Aires, 2018), numero (11 Gwangju Biennal, South Korea, 2016), The San Juan Mass of Campo del Cielo en la Colección Guerrico (Museo Nacional de Bellas Artes).
       </Typography>
     
     </Box>
    <Box>
    <Box>
    
    <Box sx={{marginLeft:8}} width={"267px"}   >
      <Typography sx={{mt: 20,mb:8, fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
    <Box mb={2}>
    <a
    href="mailto:mail@faivovichgoldberg.com"
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => setIsMailHovered(true)}
    onMouseLeave={() => setIsMailHovered(false)}
    style={{
        textDecoration: isMailHovered ? 'underline' : 'none',
        pointerEvents: 'auto',
        display: 'block', 
        mt: 3,
        fontSize: 18,
        fontFamily: "Albert Sans",
        
    }}
>
    mail@faivovichgoldberg.com
</a>
   </Box>
    
    <a
    href="https://www.barro.cc/es"
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => setIsBarroHovered(true)}
    onMouseLeave={() => setIsBarroHovered(false)}
    style={{
        textDecoration: isBarroHovered ? "underline" : "none",
        pointerEvents: 'auto',
        display: 'block',
        
        mt: 3,
        fontSize: 16,
        fontFamily: "Albert Sans",
    }}
>
    BARRO ARTE CONTEMPORANEO
</a>
      <Typography sx={{fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG +54 11 4978 3759</Typography>
     </Box>

     <Box  sx={{display: { xs: "block", sm:"none"} }}>
       <Typography sx={{mt: 26,mb:8, fontSize:"19px", fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
       <Typography sx={{ mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>mail@faivovichgoldberg.com </Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{ mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>BARRO ARTE CONTEMPORANEO </Typography>
       </Link>
       <Typography sx={{ mb: 15, fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG +54 11 4978 3759</Typography>
     </Box>
     <Box component={NavLink} to={"/index"}
      onMouseEnter={() => setIsCvHovered(true)}
      onMouseLeave={() => setIsCvHovered(false)}
      sx={{textDecoration: isCvHovered? "underline" : "none"}} >
     <Typography sx={{mt:8,ml:8,fontSize:33, fontFamily:"Albert Sans"}}>CV</Typography>
     </Box>
     <Box sx={{ mt:8, marginLeft:8, width:"267px"}  } >
       
     <Typography sx={{mt:8,fontSize:33, fontFamily:"Albert Sans"}}>Site</Typography>
       <Typography sx={{ fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>Concepto</Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{  fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>Faivovich & Goldberg</Typography>
       </Link>
       <Typography sx={{ mt:3, fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>Edición de Textos</Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{  fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>Alejo Ponce de León</Typography>
       </Link>
       <Typography sx={{ mt:3,fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>Diseño</Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{  fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>Job Salorio</Typography>
       </Link>
       <Typography sx={{ mt:3, fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>Desarrollo Web</Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{  fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>Francisco Slepoy</Typography>
       </Link>
       
      
      </Box>
    
     
     </Box>

     </Box>
      
    </Box>
    
    </Hidden>
    
    
    <Box sx ={{ml:2,mt:12, display: { xs: "block", sm:"none"} }}>
     <Typography sx={{fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>BIOGRAPHY</Typography>
      <Typography sx={{mt:5, fontSize:19, fontFamily:"Albert Sans",}} variant='h3'>Faivovich & Goldberg </Typography>
      <Typography sx={{ fontSize:15, fontFamily:"Albert Sans",}} variant="subtitle2">(Buenos Aires, 1977 / Paris, 1978) </Typography>
      <Typography sx={{ mt:5, fontSize:15, fontFamily:"Albert Sans",textIndent:22, width:"90%"}} variant="subtitle2"> 
      
      Since 2006, Guillermo Faivovich and Nicolás Goldberg have been engaged in an intensive and wide-ranging research project—A Guide to Campo del Cielo—that forms the basis of their practice. Campo del Cielo is located in northern Argentina and was the site of a meteor shower about 4,000 years ago. Faivovich & Goldberg combine the roles of scientist, historian, anthropologist, and even bureaucrat, to conduct projects that suggest new ways of seeing and experiencing the terrestrial results of a long ago cosmic event, as well as thinking about its historical and cultural significance. For over a decade, the duo has produced a diverse body of work, laboriously mining the particularities of a singular event, Faivovich & Goldberg illuminate broadly resonant themes: the dynamics between an object and its documentation, the inherent complexities of institutional histories, and the complicated personal, cultural, and national relationships that develop with artifacts. </Typography>
      <Typography sx={{ mb:5,  fontSize:15, fontFamily:"Albert Sans", textIndent:22, width:"90%"}} variant="subtitle2"> 
      Some of Faivovich & Goldberg’s latest projects are Encuentro con el El Mataco (Museo Histórico Provincial de Rosario Julio Marc, 2019), Mesón de Fierro: Towards the XXII Century (United Nations, Vienna, 2019), Auf der Suche nach Mesón de Fierro (Naturhistorisches Museum, Vienna, 2018), Decomiso (ASU Art Museum, Arizona, 2018), Un meteorito para la Sociedad Científica del año 2105 (U-Turn, ArteBA, Buenos Aires, 2018), numero (11 Gwangju Biennal, South Korea, 2016), The San Juan Mass of Campo del Cielo en la Colección Guerrico (Museo Nacional de Bellas Artes).
       </Typography>        
     </Box>
     </>
  )
}

export default Impressum
