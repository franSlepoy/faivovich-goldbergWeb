import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {  Hidden, Typography } from '@mui/material';
import { NumeroData } from '../../../servidor/NumeroData';
import { useTranslation } from 'react-i18next';



export default function MesonDeFierro() {
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

 
<Typography   color="black"sx={{mt:"100px",textAlign:"center", fontFamily: 'Albert Sans', fontSize:"19px", fontWeight:"600", lineHeight:"normal", }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>


<Box  mb={5} sx={{mt:"76px",width:"60%", ml:"20%", mr:"20%"}} >


<Box width={"372px"} m={"auto"}>
<Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4">{t("mesonTitulo1")}</Typography>
  <Typography sx={{mt:"22px", textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }}  variant="subtitle2">{t("mesonTitulo2")}</Typography>
  <Typography sx={{ mt:"22px", textAlign:"center",  fontSize:"13px", fontFamily: 'Albert Sans', fontWeight:"500" }} variant="h6">{t("mesonTitulo3")}</Typography>
  <Typography sx={{ textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans', }} variant="subtitle2">
  {t("mesonTitulo4")}

</Typography>

<Typography sx={{mt:"21px", textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("mesonTitulo5")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("mesonTitulo6")}

</Typography>


</Box>
  

<Box  sx={{display: "flex", justifyContent:"center", mt:"84px"   }}>
   <Box textAlign={"justify"} width={"49%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   {t("mesonTexto1")}

</Typography>
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("mesonTexto2")}

    </Typography>
   </Box>
   
   <Box textAlign={"justify"} ml={"4%"} width={"49%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
   {t("mesonTexto3")}

    </Typography>
    
   </Box>
   
</Box>
</Box>




<Box sx={{ width:"60%", ml:"20%", mr:"20%", margin:"auto",  overflowY: "clip" }}>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"70%"}  src="imagenes/mesonDeFierro/meson1.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/mesonDeFierro/meson2.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/mesonDeFierro/meson3.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/mesonDeFierro/meson4.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/mesonDeFierro/meson5.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/mesonDeFierro/meson6.png" alt="" />
</Box>

<Box mb={"290px"}  textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"} src="imagenes/mesonDeFierro/meson7.png"  alt="" />
</Box>



</Box>
</Hidden>
  

<Hidden smUp>
<Box sx={{textAlign:"justify",ml:2, mr:2,mt:"25%", maxWidth:"90%"}}>
<Box sx={{mb:3}}>
<Typography sx={{ fontSize:19,fontWeight:"600", fontFamily: 'Albert Sans', }} variant="h4">{t("mesonTitulo1")}</Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">{t("mesonTitulo2")}</Typography>
  <Typography sx={{width:"90%",  mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">{t("mesonTitulo3")}</Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("mesonTitulo4")}
  </Typography>
  
  
  <Typography sx={{ mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("mesonTitulo5")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("mesonTitulo6")}
  </Typography>
  


<Typography sx={{  mt:2,fontSize:15, fontFamily: 'Albert Sans', width:"100%"}}> 
{t("mesonTexto1")}

</Typography>

<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("mesonTexto2")}

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("mesonTexto3")}
</Typography>



</Box>

<Box sx={{ width:"90%", ml:"20%", mr:"20%", margin:"auto",  overflowY: "clip" }}>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"70%"}  src="imagenes/mesonDeFierro/meson1.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/mesonDeFierro/meson2.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/mesonDeFierro/meson3.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/mesonDeFierro/meson4.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/mesonDeFierro/meson5.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/mesonDeFierro/meson6.png" alt="" />
</Box>

<Box mb={"290px"}  textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"} src="imagenes/mesonDeFierro/meson7.png"  alt="" />
</Box>



</Box>


</Box>
</Hidden>
</>
);
  
    
}