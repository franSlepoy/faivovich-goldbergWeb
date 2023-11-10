import * as React from 'react';
import Box from '@mui/material/Box';
import {  Hidden, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';



export default function UnMeteorito() {
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


<Box width={"472px"} m={"auto"}>
<Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4">{t("unMeteoritoTitulo1")}</Typography>
  <Typography sx={{mt:"22px", textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }}  variant="subtitle2">{t("unMeteoritoTitulo2")}</Typography>
  <Typography sx={{mt:"22px", textAlign:"center",  fontSize:"13px", fontFamily: 'Albert Sans', fontWeight:"500" }} variant="h6">{t("unMeteoritoTitulo3")}</Typography>
  <Typography sx={{ textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans', }} variant="subtitle2">
  {t("unMeteoritoTitulo4")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo5")}

</Typography>
<Box textTransform={"uppercase"}>
<Typography sx={{mt:"21px", textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo6")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo7")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo8")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo9")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo10")}

</Typography>
</Box>




</Box>
  
<Box  sx={{display: "flex", justifyContent:"center", mt:"84px"   }}>
   <Box textAlign={"justify"} width={"49%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   {t("unMeteoritoTexto1")}

</Typography>
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("unMeteoritoTexto2")}

    </Typography>
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
   {t("unMeteoritoTexto3")}

    </Typography>
   </Box>
   
   <Box textAlign={"justify"} ml={"4%"} width={"49%"}>
   
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
    {t("unMeteoritoTexto4")}

    </Typography>
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
    {t("unMeteoritoTexto5")}

    </Typography>
   </Box>
   
</Box>

</Box>




<Box sx={{ width:"60%", ml:"20%", mr:"20%", margin:"auto",  overflowY: "clip" }}>

<Box textAlign={"center"}>
<img style={{marginTop:"80px", marginBottom:"150px"}} width={"70%"}  src="imagenes/un.png" alt="" />
</Box>
</Box>
</Hidden>
  

<Hidden smUp>
<Box sx={{ml:2, mr:2,mt:"25%", maxWidth:"90%"}}>
<Box sx={{mb:3}}>
<Typography sx={{ fontSize:19,fontWeight:"600", fontFamily: 'Albert Sans', }} variant="h4">{t("unMeteoritoTitulo1")}</Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">{t("unMeteoritoTitulo2")}</Typography>
  <Typography sx={{width:"90%",  mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">{t("unMeteoritoTitulo3")}</Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo4")}
  </Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">{t("unMeteoritoTitulo5")}</Typography>
  
  <Box textTransform={"uppercase"}>
  <Typography sx={{ mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo6")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo7")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo8")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo9")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("unMeteoritoTitulo10")}
  </Typography>
  </Box>
  
  



</Box>

<Box sx={{  margin:"auto",  overflowY: "clip" }}>


<Box textAlign={"center"}>
<img style={{marginTop:"40px", marginBottom:"150px"}} width={"100%"}  src="/imagenes/un.png" alt="" />
</Box>


</Box>


</Box>
</Hidden>
</>
);
  
    
}