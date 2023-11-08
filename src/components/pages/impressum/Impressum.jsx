import {  Hidden, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next';

const Impressum = () => {
  const [isCvHovered, setIsCvHovered] = useState(false);
  const [isMailHovered, setIsMailHovered] = useState(false);
  const [isBarroHovered, setIsBarroHovered] = useState(false);
  const [isEnglish, setIsEnglish] = React.useState(true); 
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
    setIsEnglish(!isEnglish);
  }
 

  return (
    <>
   <Hidden smDown>
   
   
<Box >
 <Typography
          onClick={toggleLanguage}  
          sx={{ 
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline'
            },
            
            mt:"78px", textAlign:"center",  
            fontSize:"15px", 
            fontFamily: 'Albert Sans', 
            fontWeight:"600" 
          }} 
          variant="h6"
        >
          {isEnglish ? 'ESPAÑOL' : 'ENGLISH'}
        </Typography>
 </Box>

 


<Typography   color="black"sx={{mt:"76px",textAlign:"center", fontFamily: 'Albert Sans', fontSize:"31px", fontWeight:"600", lineHeight:"normal", }}>
IMPRESSUM
</Typography>
  
  
  <Box
    display="flex"
 
    m={"auto"}
    ml={"20%"}
    mr={"20%"}
    
    textAlign={"justify"}
  >
    {/* Sección "BIO" */}
    <Box width="48%"> {/* BIO ocupa la mitad del espacio */}
      <Typography
        sx={{mt:"135px",fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h3"
      >
        BIO
      </Typography>
      <Typography
        sx={{mt:"93px", fontSize: "15px", fontWeight: "600", lineHeight: "19px", fontFamily: "Albert Sans" }}
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
      <Typography sx={{ mt:"15px",fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",textIndent:42}} variant="subtitle2"> 
      {t("bioTexto1")}
      </Typography>
      </Box>
      
      <Box textAlign={"justify"} ml={"4%"} width={"48%"}>
      <Typography sx={{mt:"298px", fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      {t("bioTexto2")}
       </Typography>
       {/* Botón "CV" */}
      <Box
  component="a" // Usa una etiqueta <a> en lugar de NavLink
  href="/public/CV2023.pdf" // Reemplaza con la ruta correcta al archivo PDF
  target="_blank" // Abre en una nueva pestaña
  download="CV2023.pdf" // Sugerir la descarga
  onMouseEnter={() => setIsCvHovered(true)}
  onMouseLeave={() => setIsCvHovered(false)}
  sx={{
    textDecoration: isCvHovered ? "underline" : "none",
  }}
>
  <Typography
    sx={{ mt: "30%", fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
  >
    CURRICULUM VITAE
  </Typography>
</Box>

      </Box>
  </Box>

    
    {/* Sección "CONTACTO" y "SITE" (ambas ocupan la otra mitad del espacio) */}
    <Box ml={"20%"} width={"80%"} mt={"125px"} display={"flex"}>
      {/* Sección "CONTACTO" */}
    <Box width={"40%"}>
    <Typography
        sx={{  fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h3"
      >
        CONTACT
      </Typography>
      <Box mt={"93px"}>
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
          marginTop:"30px"
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
    </Box>
      

     {/* Sección "SITE" */}
    <Box width={"50%"}>
      <Typography
        sx={{  fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
        variant="h3"
      >
        SITE
      </Typography>
      <Typography
        sx={{ mt:"88px", fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
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
        sx={{ mt: 2, fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
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
        sx={{ mt: 2, fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
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
        sx={{ mt: 2, fontSize: "15px", fontWeight: "500", lineHeight: "19px", fontFamily: "Albert Sans" }}
        variant="h5"
      >
        Desarrollo Web
      </Typography>
      <Typography
        sx={{mb:"150px", fontSize: "15px", fontWeight: "600", lineHeight: "normal", fontFamily: "Albert Sans" }}
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
      {t("bioTexto1")}
      </Typography>
      <Typography sx={{textAlign:"justify", mb:5,fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      {t("bioTexto1")}
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
