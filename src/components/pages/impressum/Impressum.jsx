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
  <Box
    display="flex"
    margin="auto"
    ml="20%"
    mt="15%"
    alignItems="flex-start"
    width="60%" // BIO ocupa la mitad del espacio
  >
    {/* Sección "BIO" */}
    <Box width="100%"> {/* BIO ocupa la mitad del espacio */}
      <Typography
        sx={{   mb: "10%", fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h3"
      >
        BIO
      </Typography>
      <Typography
        sx={{  fontSize: "15px", fontWeight: "600", lineHeight: "19px", fontFamily: "Albert Sans" }}
        variant="h3"
      >
        Guillermo Faivovich & Nicolás Goldberg
      </Typography>
      <Typography
        sx={{ fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
        variant="subtitle2"
      >
        (Buenos Aires, 1977 / Paris, 1978)
      </Typography>
      <Typography sx={{ mt:5,fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",textIndent:42}} variant="subtitle2"> 
      
      Since 2006, Guillermo Faivovich and Nicolás Goldberg have been engaged in an intensive and wide-ranging research project—A Guide to Campo del Cielo—that forms the basis of their practice. Campo del Cielo is located in northern Argentina and was the site of a meteor shower about 4,000 years ago. Faivovich & Goldberg combine the roles of scientist, historian, anthropologist, and even bureaucrat, to conduct projects that suggest new ways of seeing and experiencing the terrestrial results of a long ago cosmic event, as well as thinking about its historical and cultural significance. For over a decade, the duo has produced a diverse body of work, laboriously mining the particularities of a singular event, Faivovich & Goldberg illuminate broadly resonant themes: the dynamics between an object and its documentation, the inherent complexities of institutional histories, and the complicated personal, cultural, and national relationships that develop with artifacts. </Typography>
      <Typography sx={{ mb:5,fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      Some of Faivovich & Goldberg’s latest projects are Encuentro con el El Mataco (Museo Histórico Provincial de Rosario Julio Marc, 2019), Mesón de Fierro: Towards the XXII Century (United Nations, Vienna, 2019), Auf der Suche nach Mesón de Fierro (Naturhistorisches Museum, Vienna, 2018), Decomiso (ASU Art Museum, Arizona, 2018), Un meteorito para la Sociedad Científica del año 2105 (U-Turn, ArteBA, Buenos Aires, 2018), numero (11 Gwangju Biennal, South Korea, 2016), The San Juan Mass of Campo del Cielo en la Colección Guerrico (Museo Nacional de Bellas Artes).
       </Typography>
    </Box>

    {/* Sección "CONTACTO" y "SITE" (ambas ocupan la otra mitad del espacio) */}
    <Box ml={"8%"} width="20%">
      {/* Sección "CONTACTO" */}
      <Typography
        sx={{ mb: "25%", fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h3"
      >
        CONTACT
      </Typography>
      <Box mb={2}>
        <a
          href="mailto:mail@faivovichgoldberg.com"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsMailHovered(true)}
          onMouseLeave={() => setIsMailHovered(false)}
          style={{
            textDecoration: isMailHovered ? "underline" : "none",
            pointerEvents: "auto",
            display: "block",
            fontSize: "15px",
            fontFamily: "Albert Sans",
            fontWeight: "600",
            lineHeight: "15px",
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
          pointerEvents: "auto",
          display: "block",
          fontSize: "15px",
          fontFamily: "Albert Sans",
          fontWeight: "600",
          lineHeight: "19px",
        }}
      >
        Barro Galería
      </a>
      <Typography sx={{ fontSize: "15px", fontFamily: "Albert Sans" }} variant="h5">
        Caboto 531, La Boca
      </Typography>
      <Typography sx={{ fontSize: "15px", fontFamily: "Albert Sans" }} variant="h5">
        CABA, Argentina
      </Typography>

      {/* Botón "CV" */}
      <Box
      
        component={NavLink}
        to="/index"
        onMouseEnter={() => setIsCvHovered(true)}
        onMouseLeave={() => setIsCvHovered(false)}
        sx={{
          textDecoration: isCvHovered ? "underline" : "none",
        }}
      >
        <Typography sx={{mt:2, fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}>
          CV
        </Typography>
      </Box>
    </Box>

    {/* Sección "SITE" */}
    <Box ml={"8%"} width="45%">
      <Typography
        sx={{ mb: "8%", fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h3"
      >
        SITE
      </Typography>
      <Typography
        sx={{ width: "100%", fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Concepto
      </Typography>
      <Typography
        sx={{ fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Faivovich & Goldberg
      </Typography>
      <Typography
        sx={{ mt: 3, fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Edición de Textos
      </Typography>
      <Typography
        sx={{ fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Alejo Ponce de León
      </Typography>
      <Typography
        sx={{ mt: 3, fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Diseño
      </Typography>
      <Typography
        sx={{ fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Job Salorio
      </Typography>
      <Typography
        sx={{ mt: 3, fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Desarrollo Web
      </Typography>
      <Typography
        sx={{ fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Francisco Slepoy
      </Typography>
    </Box>
  </Box>
</Hidden>
    
    
    
    
    <Box sx ={{maxWidth:"90%",ml:2,mr:2,mb:2,mt:"25%", display: { xs: "block", sm:"none"} }}>
      <Box>
      <Typography sx={{ mb:"10%", fontSize:"19px",fontWeight:"600",lineHeight:"normal", fontFamily:"Albert Sans",}} variant='h3'>BIO</Typography>
      <Typography sx={{ fontSize:"15px" ,fontWeight:"600", lineHeight:"19px", fontFamily:"Albert Sans",}} variant='h3'>Guillermo Faivovich & Nicolás Goldberg </Typography>
      <Typography sx={{ fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",}} variant="subtitle2">(Buenos Aires, 1977 / Paris, 1978) </Typography>
      <Typography sx={{textAlign:"justify", mt:2,fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans"}} variant="subtitle2"> 
      
      Since 2006, Guillermo Faivovich and Nicolás Goldberg have been engaged in an intensive and wide-ranging research project—A Guide to Campo del Cielo—that forms the basis of their practice. Campo del Cielo is located in northern Argentina and was the site of a meteor shower about 4,000 years ago. Faivovich & Goldberg combine the roles of scientist, historian, anthropologist, and even bureaucrat, to conduct projects that suggest new ways of seeing and experiencing the terrestrial results of a long ago cosmic event, as well as thinking about its historical and cultural significance. For over a decade, the duo has produced a diverse body of work, laboriously mining the particularities of a singular event, Faivovich & Goldberg illuminate broadly resonant themes: the dynamics between an object and its documentation, the inherent complexities of institutional histories, and the complicated personal, cultural, and national relationships that develop with artifacts. </Typography>
      <Typography sx={{textAlign:"justify", mb:5,fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      Some of Faivovich & Goldberg’s latest projects are Encuentro con el El Mataco (Museo Histórico Provincial de Rosario Julio Marc, 2019), Mesón de Fierro: Towards the XXII Century (United Nations, Vienna, 2019), Auf der Suche nach Mesón de Fierro (Naturhistorisches Museum, Vienna, 2018), Decomiso (ASU Art Museum, Arizona, 2018), Un meteorito para la Sociedad Científica del año 2105 (U-Turn, ArteBA, Buenos Aires, 2018), numero (11 Gwangju Biennal, South Korea, 2016), The San Juan Mass of Campo del Cielo en la Colección Guerrico (Museo Nacional de Bellas Artes).
       </Typography>
      </Box>

      <Box>
      
      <Box>
       <Typography sx={{mt: 3, fontSize:"19px",fontWeight:"600",fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
       <Typography sx={{ mt:3, fontSize:"15px", fontFamily:"Albert Sans",}} variant='h5'>mail@faivovichgoldberg.com </Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{ mt:3,fontSize:"15px", fontFamily:"Albert Sans",}} variant='h5'>BARRO ARTE CONTEMPORANEO </Typography>
       </Link>
       <Typography sx={{ fontSize:"12px", fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG</Typography>
       
       <Box
      
        component={NavLink}
        to="/index"
        onMouseEnter={() => setIsCvHovered(true)}
        onMouseLeave={() => setIsCvHovered(false)}
        sx={{
          textDecoration: isCvHovered ? "underline" : "none",
        }}
      >
        <Typography sx={{mt:2, fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}>
          CV
        </Typography>
      </Box>

       <Typography sx={{mt:3,mb:3,fontSize:"19px",fontWeight:"600",lineHeight:"normal", fontFamily:"Albert Sans"}}>SITE</Typography>
       <Typography sx={{ width:"100%",fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",}} variant='h5'>Concepto</Typography>
       
       <Typography  sx={{  fontSize:"15px",fontWeight:"600",lineHeight:"normal", fontFamily:"Albert Sans",}} variant='h5'>Faivovich & Goldberg</Typography>
      
       <Typography sx={{ mt:3, fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",}} variant='h5'>Edición de Textos</Typography>
       
       <Typography  sx={{ fontSize:"15px",fontWeight:"600",lineHeight:"normal", fontFamily:"Albert Sans",}} variant='h5'>Alejo Ponce de León</Typography>
       
       <Typography sx={{ mt:3,fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",}} variant='h5'>Diseño</Typography>
       
       <Typography  sx={{  fontSize:"15px",fontWeight:"600",lineHeight:"normal", fontFamily:"Albert Sans",}} variant='h5'>Job Salorio</Typography>
       
       <Typography sx={{ mt:3, fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",}} variant='h5'>Desarrollo Web</Typography>
       
       <Typography  sx={{ fontSize:"15px",fontWeight:"600",lineHeight:"normal", fontFamily:"Albert Sans",}} variant='h5'>Francisco Slepoy</Typography>
       </Box>


      </Box>
       
     </Box>
     </>
  )
}

export default Impressum
