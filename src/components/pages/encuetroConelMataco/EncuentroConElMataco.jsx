import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import { EncuentroConElMatacoData } from '../../../servidor/EncuentroConElMataco';

export default function EncuentroConElMataco() {
  return (
    <>
<Box mt={"15%"} mb={"5%"} sx={{ width:"60%", ml:"20%", mr:"20%" }} >
  <Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4">ENCUENTRO CON EL MATACO</Typography>
  <Typography sx={{ textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">(2014 - ongoing)</Typography>
  <Typography sx={{ mt:4, textAlign:"center",  fontSize:23, fontFamily: 'Albert Sans' }} variant="h6">SERIES</Typography>
  <Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  Materials: micrographos, pigment print on cotton rag paper 120 x 120 cm. each
</Typography>
<Box sx={{display: "flex", justifyContent:"center", mt:12  }}>
   <Typography sx={{fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
A series of round close ups of rock-like objects, where a mineral surface can be read in its eccentricity, comprise Faivovich & Goldberg’s prints from the numero series. Since 2014, the artists have carried out a sequence of immersions into the microscopic level of the Campo del Cielo meteorites. These images emerge as part of their research on microphotography, producing and examining thinly sliced sections, by exploring and harvesting the stunningly brilliant and mysterious silicate inclusions. Radiant iridescent flows of rock are overlapped, in 
abstract cosmic landscapes that glow with the potentiality of new matter. The artists’ decision to present the images in the round shape of the microscopic lens underscores their scientific origin. 
    </Typography>
    <Typography sx={{fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans',width: "100%", ml:3}}> 
    This series partakes in and pays homage to a tradition of “wondrous” photography, produced with microscopes, that has existed since the 19th century. On their own, the micrographs provide few direct clues as to the context in which they were made and the archive in which they are held. Faivovich & Goldberg’s emphasize the diverse components of a seemingly unified rock, revealing that the meteorite consists of a variety of elements, each of a distinct shape, translucency and hue. Using tools designed for sophisticated analysis, they have instead put the object of study on hold and transformed it into a thing of beauty.
    </Typography>
</Box>
</Box>


<Box sx={{ width:"60%", ml:"20%", mr:"20%", margin:"auto",  overflowY: "clip" }}>

  <ImageList  variant="masonry" cols={1} gap={25}>
    {EncuentroConElMatacoData.map((item) => (
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

</>
);
  
    
}