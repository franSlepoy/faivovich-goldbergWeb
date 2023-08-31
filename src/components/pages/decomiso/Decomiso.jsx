import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { decomisoData } from '../../../servidor/DecomisoData';
import { Typography } from '@mui/material';

export default function Decomiso() {
  return (
    <>
<Box  mt={20}  mb={5} sx={{display: { xs: "none", sm:"block"}}}>
  <Typography sx={{textAlign:"center", fontSize:33, fontFamily: 'Albert Sans', }} variant="h4">DECOMISO</Typography>
  <Typography sx={{ textAlign:"center",  fontSize:13, fontFamily: 'Albert Sans' }} variant="subtitle2">ASU Art Museum. Arizona, USA</Typography>
  <Typography sx={{ mt:4, textAlign:"center",  fontSize:23, fontFamily: 'Albert Sans' }} variant="h6">EXHIBITION</Typography>
  <Typography sx={{ width:314, textAlign:"center", margin:"auto",  fontSize:13, fontFamily: 'Albert Sans' }} variant="subtitle2">
Materials: photographs, storage racks, archives, files, digital video, analog sound.
</Typography>
<Box sx={{display: "flex", justifyContent:"center", mt:12  }}>
<Box>
<Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:388}}>Who owns the sky? Or for that matter, anything that falls from the sky? Certain 
indigenous groups such as the Australian Aboriginal Warrabri believe that a meteorite 
represents past, present and future realities, which are at once parallel to our own. Fallen 
matter has the power to compress time. The work of Faivovich & Goldberg adresses how 
artifacts are rooted in time and place, who gets to place value on them and brings into 
question the colonization of cultures and the theft of cultural commodities that often end 
up in the global markets.  
</Typography>
<Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:388, textIndent:42}}>
Decomiso [2016] is centered around a government seizure of meteorites in the province of Santiago del Estero, Argentina. The artists convinced state officials and were granted access to index, classify and document over 400 meteorites, which resulted in the first enforcement of a neglected provincial law used in the confiscation. According to the official records made by the province’s notaries, they participate in the procedure not as experts but as visual artists and researchers. Focusing on the process of this event, the artwork highlights the tedious process it took to record this matter but also contemplates the idea that so much of our human knowledge is lost, buried, or neglected. 
</Typography>
</Box>

<Box>
<Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:388, ml:2}}> In an age marked by the invisibility of tax havens and the hypervisibility offered by visual 
havens like art, media, and social networks, images of seizures move across the boundaries 
drawn by this paradox. 
</Typography>
<Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:388, ml:2, textIndent:42}}> Art is not exempt from these visual paradoxes in an age torn between abstraction and matter, absolute intangibility and a sense of total access, in which the image of seizure stands as a frenzied hybrid, not just because works of art are material protagonists of organized crime and money laundering, possessing vast warehouse space in tax havens, but because they provide one of the greatest reflections on seeing (and on how we see and how far we see) in terms of current images and their production, circulation, and 
consumption. All artists are confiscators. They reclaim materials from hazy sources: intuitive 
creativity, data concealed from history, unthinkable corners of science, or new takes on politics.
</Typography>
</Box>


   
</Box>


  
</Box>


<Box sx={{  width: 800, margin:"auto",  overflowY: "clip",display: { xs: "none", sm:"block"}}}>

  <ImageList   variant="masonry" cols={1} gap={25}>
    {decomisoData.map((item) => (
      <ImageListItem key={item.imagen}>
       
        <img

          src={`${item.imagen}?w=248&fit=crop&auto=format`}
          srcSet={`${item.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.titulo}
          loading="lazy"
          
        />
        <Typography fontSize={"15px"} mt={1} mb={5} textAlign={"center"}>{item.titulo}</Typography>
        
      </ImageListItem>
    ))}
  </ImageList>
</Box>

<Box sx={{ml:2, mr:2,mt:10, display: { xs: "block", sm:"none",}}}>
<Typography sx={{ fontSize:33, fontFamily: 'Albert Sans', }} variant="h4">DECOMISO</Typography>
  <Typography sx={{ fontSize:13, fontFamily: 'Albert Sans' }} variant="subtitle2">ASU Art Museum. Arizona, USA</Typography>
  <Typography sx={{ mt:4, fontSize:23, fontFamily: 'Albert Sans' }} variant="h6">EXHIBITION</Typography>
  <Typography sx={{ width:320,   fontSize:13, fontFamily: 'Albert Sans' }} variant="subtitle2">
Materials: photographs, storage racks, archives, files, digital video, analog sound.
</Typography>
<Typography sx={{mt:3,fontSize:15, fontFamily: 'Albert Sans', width:320}}>Who owns the sky? Or for that matter, anything that falls from the sky? Certain 
indigenous groups such as the Australian Aboriginal Warrabri believe that a meteorite 
represents past, present and future realities, which are at once parallel to our own. Fallen 
matter has the power to compress time. The work of Faivovich & Goldberg adresses how 
artifacts are rooted in time and place, who gets to place value on them and brings into 
question the colonization of cultures and the theft of cultural commodities that often end 
up in the global markets.  
</Typography>
<Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:328, textIndent:42}}>
Decomiso [2016] is centered around a government seizure of meteorites in the province of Santiago del Estero, Argentina. The artists convinced state officials and were granted access to index, classify and document over 400 meteorites, which resulted in the first enforcement of a neglected provincial law used in the confiscation. According to the official records made by the province’s notaries, they participate in the procedure not as experts but as visual artists and researchers. Focusing on the process of this event, the artwork highlights the tedious process it took to record this matter but also contemplates the idea that so much of our human knowledge is lost, buried, or neglected. 
</Typography>
<Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:328}}> In an age marked by the invisibility of tax havens and the hypervisibility offered by visual 
havens like art, media, and social networks, images of seizures move across the boundaries 
drawn by this paradox. 
</Typography>
<Typography sx={{mb:3,fontSize:15, fontFamily: 'Albert Sans', width:328, textIndent:42}}> Art is not exempt from these visual paradoxes in an age torn between abstraction and matter, absolute intangibility and a sense of total access, in which the image of seizure stands as a frenzied hybrid, not just because works of art are material protagonists of organized crime and money laundering, possessing vast warehouse space in tax havens, but because they provide one of the greatest reflections on seeing (and on how we see and how far we see) in terms of current images and their production, circulation, and 
consumption. All artists are confiscators. They reclaim materials from hazy sources: intuitive 
creativity, data concealed from history, unthinkable corners of science, or new takes on politics.
</Typography>
<ImageList variant="masonry" cols={1} gap={25}>
    {decomisoData.map((item) => (
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





</>
);
  
    
}