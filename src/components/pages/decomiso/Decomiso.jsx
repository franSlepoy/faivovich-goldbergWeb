import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { decomisoData } from '../../../servidor/DecomisoData';
import { Hidden, Typography } from '@mui/material';

export default function Decomiso() {
  return (
    <>
<Hidden smDown>
<Box mt={20} mb={5} sx={{width:"60%", ml:"20%", mr:"20%"}} >
  <Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4">Decomiso</Typography>
  <Typography sx={{ textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }}  variant="subtitle2">2016</Typography>
  <Typography sx={{ mt:4, textAlign:"center",  fontSize:"19px", fontFamily: 'Albert Sans' }} variant="h6">Exhibición</Typography>
  <Typography sx={{ width:300, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  Fotografías, estanterías metálicas, dossiers, video digital, sonido analógico

</Typography>
<Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
(loops de audio y video no sincronizados)
</Typography>

<Box mt={2}>
<Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
ASU Art Museum
</Typography>
<Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
Arizona, EEUU (2018)
</Typography>
</Box>


<Box sx={{display: "flex", justifyContent:"center", mt:12  }}>
   <Box width={"50%"}>
   
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
La historia de Campo del Cielo suele narrarse invocando un conjunto circunscrito de meteoritos que está compuesto por grandes especímenes individuales, con nombres como El Taco, Otumpa, El Chaco o el mítico Mesón de Fierro, visto por última vez a principios de la década de 1780. Estas rocas, en su singularidad, asumieron roles protagónicos en el teatro humano de la religión, la ciencia y la política, y fueron procesadas por diversos sistemas culturales a lo largo de las eras. Según se dice, por ejemplo, cultos solares celebraban sus ritos alrededor del Mesón de Fierro, y aún hasta el día de hoy se realizan mediciones magnéticas en las isletas y bosques del Chaco Austral con el fin de seguir develando los sigilos siderales preservados bajo la tierra.


    </Typography>
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
    Pero además de los ejemplares con nombre propio, y de aquellos que a esta altura son más leyenda que realidad, de Campo del Cielo se extrajeron cientos de otras piezas de menor peso y escala: meteoritos pequeños, fragmentos, esquirlas y desprendimientos de masas mayores que, debido a su fácil transportabilidad, suelen convertirse en mercadería de contrabando. Así, junto a la religión, la industria y la ciencia, se acomoda otro vector de gestión material y simbólica que opera sobre los cuerpos asteroidales: la ley.
</Typography>
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
Decomiso aborda los aspectos legales de Campo del Cielo y se enfoca en los esfuerzos orientados a la protección patrimonial de la materia celeste. Luego de un allanamiento llevado adelante por la Fiscalía de Estado de Santiago del Estero, en junio de 2014, 405 piezas incautadas quedaron a la espera de ser pesadas, clasificadas y rotuladas, tal y como exigía la ley provincial de preservación, sancionada hacía no mucho tiempo pero jamás aplicada. Curiosamente, no fue sino la intromisión de la voluntad artística la que consiguió que estos artículos se cumplieran por primera vez en la historia.


</Typography>
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}> 
   A lo largo de dos días de trabajo, y con la venia de los oficiales, Faivovich & Goldberg llevaron a cabo un proceso de pesaje, rotulado y registro in situ de las casi cuatro toneladas de material extraterrestre decomisado, adoptando una posición operativa trivalente que los ponía al mismo tiempo en el lugar de artistas, investigadores y peritos civiles.


    </Typography>
   </Box>
   
   <Box width={"50%"}>
  
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
    El alcance de este trabajo puede medirse entonces en dos universos: como la primera aplicación exitosa de una ley dirigida a proteger patrimonialmente y garantizar la óptima situación archivística de los meteoritos argentinos, y como instalación artística. En su forma original, la exhibición de Decomiso está compuesta por 405 fotografías, copia única y con escala 1:1, de cada uno de los cuerpos incautados por el Estado Provincial, expuestas en estanterías metálicas que evocan un interminable depósito científico, “una bóveda o un laboratorio”. En una sala anexa se proyecta además el registro fílmico del proceso de indexación, y un grabador de cinta abierta reproduce una toma de audio directa de algunos de esos momentos, que incluyen recitales improvisados de folklore santiagueño por parte de las autoridades.



    </Typography>
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
    
    Los meteoritos tienen una relación particular con el mundo de lo visible: cuando son asteroides, flotando entre las órbitas de Marte y Júpiter, no podemos verlos sino a través de un telescopio; cuando atraviesan la atmósfera en forma de meteoros, se vuelven destellos efímeros que iluminan los cielos durante apenas un instante; luego de impactar en la superficie terrestre, su destino es quedar enterrados por siglos en mausoleos secretos; cuando se los trafica desaparecen de los radares y, cuando son archivados en dependencias estatales, museos y universidades, no se los puede ver sin una clave puntual de invocación.
Los 405 cuerpos registrados en esta obra eran piezas anónimas de Campo del Cielo que, en su indexación y nombramiento técnico, logran representar a miles de otras rocas espaciales invisibilizadas por acción u omisión humana. Mediante la épica del concepto convertida en ley, Decomiso retrotrae los meteoritos al segundo exacto en el que fueron gobernados por la estabilidad total de lo que puede ser visto.

    </Typography>
   </Box>
   
</Box>
</Box>




<Box sx={{ width:"60%", ml:"20%", mr:"20%", margin:"auto",  overflowY: "clip" }}>

  <ImageList  variant="masonry" cols={1} gap={25}>
    {decomisoData.map((item) => (
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
<Box sx={{ml:2, mr:2,mt:"25%", maxWidth:"90%"}}>
<Box sx={{mb:3}}>
<Typography sx={{ fontSize:19,fontWeight:"600",  fontFamily: 'Albert Sans', }} variant="h4">Decomiso</Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">(2016)</Typography>
  <Typography sx={{ mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">Exhibición</Typography>
  

<Typography sx={{ width:"90%",   fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
Fotografías, estanterías metálicas, dossiers, video digital, sonido analógico
(loops de audio y video no sincronizados)
</Typography>

<Typography sx={{mt:2,fontSize:15, fontFamily: 'Albert Sans', width:"100%"}}> 
ASU Art Museum

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
Arizona, EEUU (2018)

</Typography>
<Typography sx={{textAlign:"justify",mt:3,fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
La historia de Campo del Cielo suele narrarse invocando un conjunto circunscrito de meteoritos que está compuesto por grandes especímenes individuales, con nombres como El Taco, Otumpa, El Chaco o el mítico Mesón de Fierro, visto por última vez a principios de la década de 1780. Estas rocas, en su singularidad, asumieron roles protagónicos en el teatro humano de la religión, la ciencia y la política, y fueron procesadas por diversos sistemas culturales a lo largo de las eras. Según se dice, por ejemplo, cultos solares celebraban sus ritos alrededor del Mesón de Fierro, y aún hasta el día de hoy se realizan mediciones magnéticas en las isletas y bosques del Chaco Austral con el fin de seguir develando los sigilos siderales preservados bajo la tierra.


</Typography>
<Typography sx={{textAlign:"justify", fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>

Pero además de los ejemplares con nombre propio, y de aquellos que a esta altura son más leyenda que realidad, de Campo del Cielo se extrajeron cientos de otras piezas de menor peso y escala: meteoritos pequeños, fragmentos, esquirlas y desprendimientos de masas mayores que, debido a su fácil transportabilidad, suelen convertirse en mercadería de contrabando. Así, junto a la religión, la industria y la ciencia, se acomoda otro vector de gestión material y simbólica que opera sobre los cuerpos asteroidales: la ley.


</Typography>
<Typography sx={{ textAlign:"justify",fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
Decomiso aborda los aspectos legales de Campo del Cielo y se enfoca en los esfuerzos orientados a la protección patrimonial de la materia celeste. Luego de un allanamiento llevado adelante por la Fiscalía de Estado de Santiago del Estero, en junio de 2014, 405 piezas incautadas quedaron a la espera de ser pesadas, clasificadas y rotuladas, tal y como exigía la ley provincial de preservación, sancionada hacía no mucho tiempo pero jamás aplicada. Curiosamente, no fue sino la intromisión de la voluntad artística la que consiguió que estos artículos se cumplieran por primera vez en la historia.

</Typography>
<Typography sx={{textAlign:"justify",fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
A lo largo de dos días de trabajo, y con la venia de los oficiales, Faivovich & Goldberg llevaron a cabo un proceso de pesaje, rotulado y registro in situ de las casi cuatro toneladas de material extraterrestre decomisado, adoptando una posición operativa trivalente que los ponía al mismo tiempo en el lugar de artistas, investigadores y peritos civiles.

</Typography>
<Typography sx={{textAlign:"justify",fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
El alcance de este trabajo puede medirse entonces en dos universos: como la primera aplicación exitosa de una ley dirigida a proteger patrimonialmente y garantizar la óptima situación archivística de los meteoritos argentinos, y como instalación artística. En su forma original, la exhibición de Decomiso está compuesta por 405 fotografías, copia única y con escala 1:1, de cada uno de los cuerpos incautados por el Estado Provincial, expuestas en estanterías metálicas que evocan un interminable depósito científico, “una bóveda o un laboratorio”. En una sala anexa se proyecta además el registro fílmico del proceso de indexación, y un grabador de cinta abierta reproduce una toma de audio directa de algunos de esos momentos, que incluyen recitales improvisados de folklore santiagueño por parte de las autoridades.

</Typography>
<Typography sx={{textAlign:"justify",fontSize:"15px",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}> 
    
    Los meteoritos tienen una relación particular con el mundo de lo visible: cuando son asteroides, flotando entre las órbitas de Marte y Júpiter, no podemos verlos sino a través de un telescopio; cuando atraviesan la atmósfera en forma de meteoros, se vuelven destellos efímeros que iluminan los cielos durante apenas un instante; luego de impactar en la superficie terrestre, su destino es quedar enterrados por siglos en mausoleos secretos; cuando se los trafica desaparecen de los radares y, cuando son archivados en dependencias estatales, museos y universidades, no se los puede ver sin una clave puntual de invocación.
Los 405 cuerpos registrados en esta obra eran piezas anónimas de Campo del Cielo que, en su indexación y nombramiento técnico, logran representar a miles de otras rocas espaciales invisibilizadas por acción u omisión humana. Mediante la épica del concepto convertida en ley, Decomiso retrotrae los meteoritos al segundo exacto en el que fueron gobernados por la estabilidad total de lo que puede ser visto.

    </Typography>

</Box>



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
</Hidden>




</>
);
  
    
}