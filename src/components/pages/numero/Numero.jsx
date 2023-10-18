import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Hidden, Typography } from '@mui/material';
import { NumeroData } from '../../../servidor/NumeroData';
import { useTranslation } from 'react-i18next';


export default function Numero() {
  const { t } = useTranslation();

  return (
    <>
<Hidden smDown>
<Box mt={20} mb={5} sx={{width:"60%", ml:"20%", mr:"20%"}} >
  <Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4">{t("numeroTitulo1")}</Typography>
  <Typography sx={{ textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }}  variant="subtitle2">{t("numeroTitulo2")}</Typography>
  <Typography sx={{ mt:4, textAlign:"center",  fontSize:"19px", fontFamily: 'Albert Sans' }} variant="h6">{t("numeroTitulo3")}</Typography>
  <Typography sx={{ width:300, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo4")}

</Typography>
<Typography sx={{ width:300, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  {t("numeroTitulo5")}

</Typography>

<Box sx={{display: "flex", justifyContent:"center", mt:12  }}>
   <Box width={"50%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   {t("numeroTexto1")}

</Typography>
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
{t("numeroTexto2")}

    </Typography>
   </Box>
   
   <Box width={"50%"}>
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

  <ImageList  variant="masonry" cols={1} gap={25}>
    {NumeroData.map((item) => (
      <ImageListItem key={item.imagen}>
       
        <img

          src={`${item.imagen}?w=248&fit=crop&auto=format`}
          srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.titulo}
          loading="lazy"
          
        />
        <Typography sx={{fontWeight:"500", lineHeight:"23px"}} fontSize={"15px"} mt={1} mb={5} textAlign={"center"}>{item.titulo}</Typography>
        
      </ImageListItem>
    ))}
  </ImageList>
</Box>
</Hidden>
  
<Hidden smUp>
<Box sx={{textAlign:"justify",ml:2, mr:2,mt:"25%", maxWidth:"90%"}}>
<Box sx={{mb:3}}>
<Typography sx={{ fontSize:19,fontWeight:"600", fontFamily: 'Albert Sans', }} variant="h4">Numero</Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">desde 2014</Typography>
  <Typography sx={{ mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">Micrografías</Typography>
  <Typography sx={{ width:"90%",   fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  Tinta pigmentada sobre papel de algodón, copias únicas (104x104 cm)

</Typography>
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



<ImageList variant="masonry" cols={1} gap={25}>
    {NumeroData.map((item) => (
      <ImageListItem key={item.imagen}>
       
        <img

          src={`${item.imagen}?w=248&fit=crop&auto=format`}
          srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.titulo}
          loading="lazy"
          
        />
        
      </ImageListItem>
    ))}
  </ImageList>
</Box>
</Hidden>
</>
);
  
    
}