import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Hidden, Typography } from '@mui/material';
import { NumeroData } from '../../../servidor/NumeroData';

export default function Numero() {
  return (
    <>
<Hidden smDown>
<Box mt={20} mb={5} sx={{width:"60%", ml:"20%", mr:"20%"}} >
  <Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4">Numero</Typography>
  <Typography sx={{ textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }}  variant="subtitle2">(Desde 2014)</Typography>
  <Typography sx={{ mt:4, textAlign:"center",  fontSize:"19px", fontFamily: 'Albert Sans' }} variant="h6">SERIES</Typography>
  <Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  Tinta pigmentada sobre papel de algodón, copias únicas (104x104 cm)

</Typography>

<Box sx={{display: "flex", justifyContent:"center", mt:12  }}>
   <Box width={"50%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   La manera más directa de trazar equivalencias entre una obra de arte y un meteorito se da en el campo de la economía material: la escasez constituye un factor crucial a la hora de determinar el precio de un bien, y el carácter irrepetible de la pieza artística se ha utilizado históricamente como parámetro para establecer su valor, al menos hasta antes de que irrumpiera “la época de su reproducibilidad técnica”. De origen celestial -lugar en el que, durante siglos, se ubicó la raíz de las visiones más trascendentes-, los meteoritos también escasean y tampoco podían ser despojados de su aura. Pero tal y como sucedió con las obras de arte, el curso del siglo XX repercutió de manera negativa en la valoración simbólica de las poquísimas rocas espaciales que fueron halladas en nuestro planeta: cuando el ser humano consiguió situar su cuerpo en la Luna, los meteoritos perdieron su atributo principal, aquel que los convertía en los únicos objetos capaces de testimoniar la existencia de una realidad material más allá de la Tierra.

</Typography>
<Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
Número es una serie en curso que navega las lógicas contradictorias de lo múltiple contenido en lo único y de lo vasto incluido en lo ínfimo. Una sucesión de primeros planos microfotográficos efectuados sobre muestras meteoríticas permite leer las líneas de variedad interminable que conforman un cuerpo, en apariencia, singular. En cada una de las imágenes, la lente revela un conjunto particular de silicatos misteriosos y otros destellos de policromatismo minúsculo, ingredientes moleculares de las etapas más tempranas del Sistema Solar.

    </Typography>
   </Box>
   
   <Box width={"50%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
   Así, como serie compuesta de diferencias que surgen del mismo fundamento, numero se vuelve el resultado de una analítica al servicio de desmontar la noción de unicidad del cuerpo y observa poéticamente el concepto económico de escasez. A partir de los efectos multiplicadores de la repetición, se pregunta si es posible reescribir el sentido universal para explorar la singularidad de una potencial vida interior, que es infinitesimal y chispea bajo la uniformidad gris de lo general.

    </Typography>
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:2}}> 
    La decisión de presentar las imágenes evocando la forma circular de la lente microscópica enfatiza su cariz científico, ya que la obra es, al mismo tiempo, continuidad y homenaje a una tradición de microfotografía “maravillosa” que existe desde el siglo XIX. Los avances tecnológicos producen estética como una digresión del idioma de las herramientas, que suele ser considerado hermético en su utilitarismo pero que pareciera ser la única lengua capaz de revelar la belleza morfemática que organiza las cosas desde adentro.
Entonces, además de formular la cuestión racional sobre si es posible extraer una sucesión sin límite de aquello que se estima único, el asunto sensible en torno a este trabajo tiene que ver con la aplicación experimental de diversos lenguajes superpuestos con el fin de precisar si la realidad puede ser reflejo del misterio.

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
<Box sx={{ml:2, mr:2,mt:"20%"}}>
<Box sx={{mb:3}}>
<Typography sx={{ fontSize:22, fontFamily: 'Albert Sans', }} variant="h4">Numero</Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">(desde 1014)</Typography>
  <Typography sx={{ mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">Micrografías</Typography>
  <Typography sx={{ width:320,   fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  Tinta pigmentada sobre papel de algodón, copias únicas (104x104 cm)

</Typography>
<Typography sx={{mt:2,fontSize:15, fontFamily: 'Albert Sans', width:"100%"}}> 
La manera más directa de trazar equivalencias entre una obra de arte y un meteorito se da en el campo de la economía material: la escasez constituye un factor crucial a la hora de determinar el precio de un bien, y el carácter irrepetible de la pieza artística se ha utilizado históricamente como parámetro para establecer su valor, al menos hasta antes de que irrumpiera “la época de su reproducibilidad técnica”. De origen celestial -lugar en el que, durante siglos, se ubicó la raíz de las visiones más trascendentes-, los meteoritos también escasean y tampoco podían ser despojados de su aura. Pero tal y como sucedió con las obras de arte, el curso del siglo XX repercutió de manera negativa en la valoración simbólica de las poquísimas rocas espaciales que fueron halladas en nuestro planeta: cuando el ser humano consiguió situar su cuerpo en la Luna, los meteoritos perdieron su atributo principal, aquel que los convertía en los únicos objetos capaces de testimoniar la existencia de una realidad material más allá de la Tierra.

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
Número es una serie en curso que navega las lógicas contradictorias de lo múltiple contenido en lo único y de lo vasto incluido en lo ínfimo. Una sucesión de primeros planos microfotográficos efectuados sobre muestras meteoríticas permite leer las líneas de variedad interminable que conforman un cuerpo, en apariencia, singular. En cada una de las imágenes, la lente revela un conjunto particular de silicatos misteriosos y otros destellos de policromatismo minúsculo, ingredientes moleculares de las etapas más tempranas del Sistema Solar.

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
Así, como serie compuesta de diferencias que surgen del mismo fundamento, numero se vuelve el resultado de una analítica al servicio de desmontar la noción de unicidad del cuerpo y observa poéticamente el concepto económico de escasez. A partir de los efectos multiplicadores de la repetición, se pregunta si es posible reescribir el sentido universal para explorar la singularidad de una potencial vida interior, que es infinitesimal y chispea bajo la uniformidad gris de lo general.


</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
La decisión de presentar las imágenes evocando la forma circular de la lente microscópica enfatiza su cariz científico, ya que la obra es, al mismo tiempo, continuidad y homenaje a una tradición de microfotografía “maravillosa” que existe desde el siglo XIX. Los avances tecnológicos producen estética como una digresión del idioma de las herramientas, que suele ser considerado hermético en su utilitarismo pero que pareciera ser la única lengua capaz de revelar la belleza morfemática que organiza las cosas desde adentro.
Entonces, además de formular la cuestión racional sobre si es posible extraer una sucesión sin límite de aquello que se estima único, el asunto sensible en torno a este trabajo tiene que ver con la aplicación experimental de diversos lenguajes superpuestos con el fin de precisar si la realidad puede ser reflejo del misterio.

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