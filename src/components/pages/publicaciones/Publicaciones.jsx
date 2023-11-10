import React from 'react'
import {  Hidden, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useTranslation } from 'react-i18next';

const Publicaciones = () => {
  const [isEnglish, setIsEnglish] = React.useState(true); 
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
    setIsEnglish(!isEnglish);
  }
  return (
    <>
      <Hidden smDown>
   
      <Typography   color="black"sx={{mt:"1.3%",textAlign:"center", fontFamily: 'Albert Sans', fontSize:"19px", fontWeight:"600", lineHeight:"normal", }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
   {/* <Box >
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
    </Box> */}
   
    
   
   
   <Typography   color="black"sx={{mt:"76px",textAlign:"center", fontFamily: 'Albert Sans', fontSize:"31px", fontWeight:"600", lineHeight:"normal", }}>
   {t("publiTitulo1")}
   </Typography>
     
   {/* <Box
       display="flex"
    
       m={"auto"}
       ml={"20%"}
       mr={"20%"}
       mt={"10%"}
       
       textAlign={"justify"}
     >
       
       <Box width="48%"> 
         <Typography sx={{ fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",textIndent:42}} variant="subtitle2"> 
         {t("bioTexto1")}
         </Typography>
         </Box>
         
         <Box textAlign={"justify"} ml={"4%"} width={"48%"}>
         <Typography sx={{ fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
         {t("bioTexto2")}
         </Typography>
         </Box>

       </Box>
    */}
       
      <Box width={"60%"} ml={"20%"} >
       <Box display={"flex"} mt={"20%"} textAlign={"justify"}>
          <Box >
            <img width={"100%"} src="/imagenes/publi/publi1.png" alt="portada de un libro" />
            <Typography width={"80%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
            {t("publiFoto1")}
            </Typography>
          </Box>

          <Box ml={"5%"}>
          <img width={"102%"} src="/imagenes/publi/publi2.png" alt="portada de libro" />
            <Typography width={"80%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
            {t("publiFoto2")}
            </Typography>
          </Box>
       </Box>

       <Box width={"50%"} m={"auto"} mt={"20%"}>
          
          <img width={"100%"} src="/imagenes/publi/publi3.png" alt="" />
          <Typography textAlign={"justify"} width={"90%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
          {t("publiFoto3")}
          </Typography>
       </Box>

       <Box display={"flex"}   textAlign={"justify"}>
          <Box mt={"25%"} >
            <img width={"100%"} src="/imagenes/publi/publi4.png" alt="portada de un libro" />
            <Typography width={"100%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
            {t("publiFoto4")}
            </Typography>
          </Box>

          <Box ml={"25%"} mt={"20%"} mb={"200px"}>
          <img width={"70%"} src="/imagenes/publi/publi5.png" alt="portada de libro" />
            <Typography mb={"200px"} width={"70%"}  sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
            {t("publiFoto5")}
            </Typography>
          </Box>
       </Box>
        

      </Box>
 </Hidden>

<Hidden smUp>
  
  
{/* <Box >
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
</Box> */}





 
{/* <Box
   display="flex"

   m={"auto"}
   ml={"20%"}
   mr={"20%"}
   mt={"10%"}
   
   textAlign={"justify"}
 >
   
   <Box width="48%"> 
     <Typography sx={{ fontSize:"15px", fontWeight:"500", lineHeight:"19px", fontFamily:"Albert Sans",textIndent:42}} variant="subtitle2"> 
     {t("bioTexto1")}
     </Typography>
     </Box>
     
     <Box textAlign={"justify"} ml={"4%"} width={"48%"}>
     <Typography sx={{ fontSize:"15px", fontWeight:"500", lineHeight:"19px",  fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
     {t("bioTexto2")}
     </Typography>
     </Box>

   </Box>
*/}
   
  <Box width={"90%"}  m={"auto"} >
  <Typography   color="black"sx={{mt:"25%", textAlign:"center", fontFamily: 'Albert Sans', fontSize:"19px", fontWeight:"600", lineHeight:"normal", }}>
{t("publiTitulo1")}
</Typography>
   <Box  textAlign={"justify"}>
      <Box mt={"80px"} >
        <img width={"100%"} src="/imagenes/publi/publi1.png" alt="portada de un libro" />
        <Typography width={"90%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
        {t("publiFoto1")}
        </Typography>
      </Box>

      <Box mt={"80px"}>
      <img width={"100%"} src="/imagenes/publi/publi2.png" alt="portada de libro" />
        <Typography width={"90%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
        {t("publiFoto2")}
        </Typography>
      </Box>
   </Box>

   <Box width={"100%"} m={"auto"} mt={"80px"}>
      
      <img width={"100%"} src="/imagenes/publi/publi3.png" alt="" />
      <Typography textAlign={"justify"} width={"90%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
      {t("publiFoto3")}
      </Typography>
   </Box>

   <Box  textAlign={"justify"}>
      <Box mt={"80px"} >
        <img width={"100%"} src="/imagenes/publi/publi4.png" alt="portada de un libro" />
        <Typography width={"90%"} m={"auto"} sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
        {t("publiFoto4")}
        </Typography>
      </Box>

      <Box  mt={"80px"} mb={"200px"}>
      <img width={"100%"} src="/imagenes/publi/publi5.png" alt="portada de libro" />
        <Typography mb={"200px"} width={"90%"} m={"auto"}  sx={{fontSize:"15px", fontWeight:"500", lineHeight:"19px", mt:"30px"}}>
        {t("publiFoto5")}
        </Typography>
      </Box>
   </Box>
    

  </Box>
</Hidden>
    </>
  

    


    
  )
}

export default Publicaciones
