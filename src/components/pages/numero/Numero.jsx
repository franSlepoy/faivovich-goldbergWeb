import * as React from 'react';
import Box from '@mui/material/Box';
import {  Hidden, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';



export default function Numero() {
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


<Box width={"272px"} m={"auto"}>
<Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4">{t("numeroTitulo1")}</Typography>
  <Typography sx={{mt:"22px", textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }}  variant="subtitle2">{t("numeroTitulo2")}</Typography>
  <Typography sx={{ mt:"22px", textAlign:"center",  fontSize:"13px", fontFamily: 'Albert Sans', fontWeight:"500" }} variant="h6">{t("numeroTitulo3")}</Typography>
  <Typography sx={{ textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans', }} variant="subtitle2">
  {t("numeroTitulo4")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo5")}

</Typography>
<Typography sx={{mt:"21px", textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo6")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo7")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo8")}

</Typography>
<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo9")}
</Typography>

<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo10")}
</Typography>

<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo11")}
</Typography>

<Typography sx={{ textAlign:"center", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo12")}
</Typography>

</Box>
  

<Box  sx={{display: "flex", justifyContent:"center", mt:"84px"   }}>
   <Box textAlign={"justify"} width={"49%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   {t("numeroTexto1")}

</Typography>
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("numeroTexto2")}

    </Typography>
   </Box>
   
   <Box textAlign={"justify"} ml={"4%"} width={"49%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
   {t("numeroTexto3")}

    </Typography>
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
    {t("numeroTexto4")}

    </Typography>
   </Box>
   
</Box>
</Box>




<Box sx={{ width:"60%", ml:"20%", mr:"20%", margin:"auto",  overflowY: "clip" }}>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"70%"}  src="imagenes/numeroEscritorio/numeroEscritorio1.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio2.png" alt="" />
</Box>

<Box display={"flex"} textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio3-1.png" alt="" />  
<img style={{marginTop:"180px", marginLeft:"5%"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio3-2.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/numeroEscritorio/numeroEscritorio4.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/numeroEscritorio/numeroEscritorio5.png" alt="" />
</Box>

<Box display={"flex"} textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio6-1.png" alt="" />  
<img style={{marginTop:"180px", marginLeft:"5%"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio6-2.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/numeroEscritorio/numeroEscritorio7.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio8.png" alt="" />
</Box>

<Box display={"flex"} textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio9-1.png" alt="" />  
<img style={{marginTop:"180px", marginLeft:"5%"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio9-2.png" alt="" />
</Box>

<Box display={"flex"} textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio10-1.png" alt="" />  
<img style={{marginTop:"180px", marginLeft:"5%"}} width={"48%"}  src="imagenes/numeroEscritorio/numeroEscritorio10-2.png" alt="" />
</Box>

<Box mb={"290px"}  textAlign={"center"}>
<img style={{marginTop:"180px"}} width={"70%"}  src="imagenes/numeroEscritorio/numeroEscritorio11.png" alt="" />
</Box>



</Box>
</Hidden>
  

<Hidden smUp>
<Box sx={{ml:2, mr:2,mt:"25%", maxWidth:"90%"}}>
<Box sx={{mb:3}}>
<Typography sx={{ fontSize:19,fontWeight:"600", fontFamily: 'Albert Sans', }} variant="h4">{t("numeroTitulo1")}</Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">{t("numeroTitulo2")}</Typography>
  <Typography sx={{width:"90%",  mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">{t("numeroTitulo3")}</Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo4")}
  </Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">{t("numeroTitulo5")}</Typography>
  
  <Typography sx={{ mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo6")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo7")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo8")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo9")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo10")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo11")}
  </Typography>
  <Typography sx={{  fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo12")}
  </Typography>

<Box textAlign={"justify"}>
<Typography sx={{  mt:2,fontSize:15, fontFamily: 'Albert Sans', width:"100%"}}> 
{t("numeroTexto1")}

</Typography>

<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("numeroTexto2")}

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("numeroTexto3")}


</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("numeroTexto4")}

</Typography>
</Box>

</Box>

<Box sx={{  margin:"auto",  overflowY: "clip" }}>

<Box textAlign={"center"}>
<img style={{marginTop:"40px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio1.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio2.png" alt="" />
</Box>

<Box  textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio3-1.png" alt="" />  
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio3-2.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio4.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio5.png" alt="" />
</Box>

<Box  textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio6-1.png" alt="" />  
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio6-2.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio7.png" alt="" />
</Box>

<Box textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio8.png" alt="" />
</Box>

<Box  textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio9-1.png" alt="" />  
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio9-2.png" alt="" />
</Box>

<Box  textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio10-1.png" alt="" />  
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio10-2.png" alt="" />
</Box>

<Box mb={"290px"}  textAlign={"center"}>
<img style={{marginTop:"80px"}} width={"100%"}  src="imagenes/numeroEscritorio/numeroEscritorio11.png" alt="" />
</Box>



</Box>


</Box>
</Hidden>
</>
);
  
    
}