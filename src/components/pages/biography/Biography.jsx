import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { NavLink } from "react-router-dom"

const Biography = () => {
  return (
    <Box margin={"auto"} width={460}>
      <Typography sx={{mt: 26,mb:8,textAlign:"center", fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>BIOGRAPHY</Typography>
      <Typography sx={{ fontSize:19, fontFamily:"Albert Sans",}} variant='h3'>Faivovich & Goldberg </Typography>
      <Typography sx={{ fontSize:15, fontFamily:"Albert Sans",}} variant="subtitle2">(Buenos Aires, 1977 / Paris, 1978) </Typography>
      <Typography sx={{ mt:5, fontSize:15, fontFamily:"Albert Sans",textIndent:42}} variant="subtitle2"> 
      
      Since 2006, Guillermo Faivovich and Nicolás Goldberg have been engaged in an intensive and wide-ranging research project—A Guide to Campo del Cielo—that forms the basis of their practice. Campo del Cielo is located in northern Argentina and was the site of a meteor shower about 4,000 years ago. Faivovich & Goldberg combine the roles of scientist, historian, anthropologist, and even bureaucrat, to conduct projects that suggest new ways of seeing and experiencing the terrestrial results of a long ago cosmic event, as well as thinking about its historical and cultural significance. For over a decade, the duo has produced a diverse body of work, laboriously mining the particularities of a singular event, Faivovich & Goldberg illuminate broadly resonant themes: the dynamics between an object and its documentation, the inherent complexities of institutional histories, and the complicated personal, cultural, and national relationships that develop with artifacts. </Typography>
      <Typography sx={{with:400, mb:5, ml:5, fontSize:15, fontFamily:"Albert Sans", textIndent:42}} variant="subtitle2"> 
      Some of Faivovich & Goldberg’s latest projects are Encuentro con el El Mataco (Museo Histórico Provincial de Rosario Julio Marc, 2019), Mesón de Fierro: Towards the XXII Century (United Nations, Vienna, 2019), Auf der Suche nach Mesón de Fierro (Naturhistorisches Museum, Vienna, 2018), Decomiso (ASU Art Museum, Arizona, 2018), Un meteorito para la Sociedad Científica del año 2105 (U-Turn, ArteBA, Buenos Aires, 2018), numero (11 Gwangju Biennal, South Korea, 2016), The San Juan Mass of Campo del Cielo en la Colección Guerrico (Museo Nacional de Bellas Artes).
       </Typography>
     <Box component={NavLink} to={"/index"}>
     <Typography sx={{fontSize:19, fontFamily:"Albert Sans", mb:15, mt:8}}>Curriculum Vitae</Typography>
     </Box>
         
       
    </Box>
    

  )
}

export default Biography
