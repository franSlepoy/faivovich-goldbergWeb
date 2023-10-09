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
      Durante más de una década, el dúo formado por Guillermo Faivovich y Nicolás Goldberg ha desarrollado un extenso trabajo de investigación sobre Campo del Cielo, región fronteriza entre Chaco y Santiago del Estero sobre la que se precipitó una lluvia de meteoritos hace aproximadamente 4.000 años. El resultado de esta iniciativa en expansión constante es un conjunto de obra que analiza las particularidades de un evento singular e ilumina la dinámica -de variabilidad infinita- entre ciertos objetos cósmicos y su compleja existencia política. A través de la archivística más efusiva, lo forense cultural y la narratología sistémica, Faivovich y Goldberg revisan la carga testimonial contenida en Campo del Cielo y sus bifurcaciones. Su trabajo se asemeja así a una exploración del rol probatorio de la materia como lienzo para la inscripción de eventos, o a un tratado sobre los medios humanos diseñados para leer la historia de aquellas cosas que son ajenas a este mundo pero que se han convertido en una parte de él.
      </Typography>
      <Typography sx={{ mb:5,fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      Entre sus proyectos recientes se destacan ¡Saxa Loquuntur! (Galería Barro, 2022), Encuentro con El Mataco (Museo Histórico Provincial de Rosario Julio Marc, 2019), Mesón de fierro: Towards the XXII Century (Naciones Unidas, Viena, 2019), En búsqueda del Mesón de Fierro (Naturhistorisches Museum, Viena, 2018) y Decomiso (ASU Art Museum, Arizona, 2018). Han participado en programas de conferencias de la Universidad Di Tella, Buenos Aires (2018), Thyssen-Bornemisza Art Contemporary, Viena (2017), Museo de Arte Latinoamericano de Buenos Aires (2017), Dia Art Foundation, Nueva York (2013) y el Massachusetts Institute of Technology, Cambridge (2011). Viven y trabajan en Buenos Aires.
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
      Durante más de una década, el dúo formado por Guillermo Faivovich y Nicolás Goldberg ha desarrollado un extenso trabajo de investigación sobre Campo del Cielo, región fronteriza entre Chaco y Santiago del Estero sobre la que se precipitó una lluvia de meteoritos hace aproximadamente 4.000 años. El resultado de esta iniciativa en expansión constante es un conjunto de obra que analiza las particularidades de un evento singular e ilumina la dinámica -de variabilidad infinita- entre ciertos objetos cósmicos y su compleja existencia política. A través de la archivística más efusiva, lo forense cultural y la narratología sistémica, Faivovich y Goldberg revisan la carga testimonial contenida en Campo del Cielo y sus bifurcaciones. Su trabajo se asemeja así a una exploración del rol probatorio de la materia como lienzo para la inscripción de eventos, o a un tratado sobre los medios humanos diseñados para leer la historia de aquellas cosas que son ajenas a este mundo pero que se han convertido en una parte de él.
      </Typography>
      <Typography sx={{textAlign:"justify", mb:5,fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      Entre sus proyectos recientes se destacan ¡Saxa Loquuntur! (Galería Barro, 2022), Encuentro con El Mataco (Museo Histórico Provincial de Rosario Julio Marc, 2019), Mesón de fierro: Towards the XXII Century (Naciones Unidas, Viena, 2019), En búsqueda del Mesón de Fierro (Naturhistorisches Museum, Viena, 2018) y Decomiso (ASU Art Museum, Arizona, 2018). Han participado en programas de conferencias de la Universidad Di Tella, Buenos Aires (2018), Thyssen-Bornemisza Art Contemporary, Viena (2017), Museo de Arte Latinoamericano de Buenos Aires (2017), Dia Art Foundation, Nueva York (2013) y el Massachusetts Institute of Technology, Cambridge (2011). Viven y trabajan en Buenos Aires.
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
        <Typography sx={{textDecoration:"underline", mt:2, fontSize: "19px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}>
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
