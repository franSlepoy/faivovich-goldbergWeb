import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Hidden, Typography } from '@mui/material';
import { ElTacoData } from '../../../servidor/ElTacoData';
import { NumeroData } from '../../../servidor/NumeroData';

export default function ElTaco() {
  return (
    <>

<Hidden smDown>
<Box mt={"15%"} mb={"5%"} sx={{width:"60%", ml:"20%", mr:"20%"}}>
  <Typography sx={{textAlign:"center", fontSize:"31px", fontWeight:"600",lineHeight:"normal", fontFamily: 'Albert Sans', }} variant="h4"> Meteorit “El Taco”
</Typography>
  <Typography sx={{ textAlign:"center",  fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">(2010)</Typography>
  <Typography sx={{ mt:4, textAlign:"center",  fontSize:"19px", fontFamily: 'Albert Sans' }} variant="h6">EXHIBITION </Typography>
  <Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
  Meteorito de hierro IAB (1574 kg)

</Typography>
<Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
Portikus
</Typography>
<Typography sx={{ width:314, textAlign:"center", margin:"auto", fontSize:"13px", fontWeight:"500", fontFamily: 'Albert Sans' }} variant="subtitle2">
Frankfurt, Alemania
</Typography>

<Box sx={{display: "flex", justifyContent:"center", mt:12, mb:"-3%"  }}>
  
  <Box width={"100%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   Tal y como los cuerpos de los mártires se repartían por el mundo cristiano atomizados en apéndices marchitos y detalles óseos, hay dos mitades de El Taco -meteorito de casi 2 toneladas descubierto en 1962 en Campo del Cielo- que descansan, separadas, en puntos distantes del globo, apuntalando el carácter milagroso que le proporciona su unicidad como cuerpo astronómico.
   </Typography>
   <Typography sx={{fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   Instigadas por el encuentro fortuito con una de las mitades en el Planetario de Buenos Aires, algunas elementales preguntas empezaron a darle sentido a una obra que intentara responderlas elementalmente: cuándo se dividió, quién lo hizo y para qué.
    Siguiendo un esquema de indagación impersonal y razonado al detalle, los artistas se volvieron espectadores, ellos mismos, de la multiplicidad de formas que las respuestas fueron adquiriendo.
   </Typography>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%"}}>
   Su investigación evidenció los términos bajo los cuales se disputó el dominio legal sobre El Taco luego de su exhumación, en un asimétrico cortejo institucional entre Argentina, los Estados Unidos y Alemania. De manera progresiva se revelaron nombres y documentos, se inventarió el estatus cambiante bajo el cual el meteorito fue pasando de mano en mano (primero “obsequio”, luego “donación” y, finalmente, “préstamo” al Instituto Smithsoniano) y se repasaron también las discusiones sobre qué metodologías serían las más aptas para estudiarlo. Se supo que la racionalización del objeto se dio en términos de gótico cientificista: en las notas y cartas que intercambiaron los organismos involucrados quedó asentado el anhelo de ejercer sobre aquel cuerpo acciones tales como "cortarlo por la mitad” para producir "especímenes de gran tamaño", “remover una lonja de cada mitad”, “pulirlo y limpiarlo con ácido nítrico”, etc.
   </Typography>
</Box>
   
   
   <Box width={"100%"}>
   <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:3}}> 
   De ahí en más, la trayectoria de El Taco se expandió y se contrajo alternadamente: atravesó el Atlántico hasta la ciudad alemana de Maguncia para ser rebanado mediante un sistema experimental, regresó partido a América y, en 1967, cinco años después de su descubrimiento en el Chaco Austral, una de las mitades fue repatriada a la Argentina. En Europa y Estados Unidos se produjo una gran cantidad de información técnica sobre el aerolito, mientras que en Buenos Aires su destino fue el de convertirse en una atracción pública y dominical, sin legajos que dieran cuenta de su actualidad ni de su travesía.

    </Typography>
    <Typography  sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:3}}> 
    La desproporción de este recorrido histórico encontró su último capítulo -hasta el momento- en 2010. “Meteorit ‘El Taco’” fue el nombre de la exhibición en la que las dos mitades del meteorito se vieron reunidas por primera vez en un movimiento compositivo y, como ya se mencionó, elemental. La teórica Graciela Speranza especula, sin embargo, con que “más que denunciar los abusos solapados del colonialismo, la desidia de las instituciones, las desigualdades entre el Primer y el Tercer Mundo, las ‘componendas’ geopolíticas, [“Meteorit ‘El Taco’”] componía los restos en una obra que invitaba a atender y a reconsiderar sus efectos”. Dicho de otro modo, es el procedimiento de composición sobre los restos materiales de la política lo que avala una politicidad genuina desde el arte: el conceptualismo se vuelve una condición de posibilidad para que lo humano-histórico y lo cósmico-ahistórico puedan ser sondeados como procesos en lugar de quedar reducidos a simples consignas. El espacio que separa a las dos mitades del meteorito es, también, la escisión entre la estética y lo puramente material.
    </Typography>
    <Typography sx={{textIndent:42,fontSize:"15px", fontWeight:"500",lineHeight:"23px", fontFamily: 'Albert Sans', width:"100%", ml:3}}> 
    Antes que presentar al artista como una figura política plenipotenciaria, “Meteorit ‘El Taco’” atiende la plena dimensión de quien hace arte como un retórico materialista, capaz de ejercer un tipo muy específico de persuasión sobre las estructuras que gobiernan el mundo. El lenguaje artístico se instituye así no solo como uno de los sistemas diseñados por la humanidad para abordar asuntos extraterrestres, sino como el más apto para sortear las dificultades generadas por todos los otros sistemas.

    </Typography>
   </Box>
   
</Box>


  
</Box>
<Box sx={{ width:"60%", ml:"20%", mr:"20%" , margin:"auto",  overflowY: "clip" }}>

  <ImageList  variant="masonry" cols={1} gap={25}>
    {ElTacoData.map((item) => (
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
<Box sx={{ml:2, mr:2,mt:"20%", }}>
  <Box mb={3}>
  <Typography sx={{ fontSize:22, fontFamily: 'Albert Sans', }} variant="h4">Meteorit “El Taco”</Typography>
  <Typography sx={{ fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">(2010)</Typography>
  <Typography sx={{ mt:2, fontSize:15, fontFamily: 'Albert Sans' }} variant="h6">Exhibición</Typography>
  <Typography sx={{ width:320,   fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  Portikus
  </Typography>
  <Typography sx={{ width:320,   fontSize:15, fontFamily: 'Albert Sans' }} variant="subtitle2">
  Frankfurt, Alemania
  </Typography>
  
<Typography sx={{mt:2,fontSize:15, fontFamily: 'Albert Sans', width:"100%"}}> 
Tal y como los cuerpos de los mártires se repartían por el mundo cristiano atomizados en apéndices marchitos y detalles óseos, hay dos mitades de El Taco -meteorito de casi 2 toneladas descubierto en 1962 en Campo del Cielo- que descansan, separadas, en puntos distantes del globo, apuntalando el carácter milagroso que le proporciona su unicidad como cuerpo astronómico.

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
Instigadas por el encuentro fortuito con una de las mitades en el Planetario de Buenos Aires, algunas elementales preguntas empezaron a darle sentido a una obra que intentara responderlas elementalmente: cuándo se dividió, quién lo hizo y para qué.
Siguiendo un esquema de indagación impersonal y razonado al detalle, los artistas se volvieron espectadores, ellos mismos, de la multiplicidad de formas que las respuestas fueron adquiriendo.

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
Su investigación evidenció los términos bajo los cuales se disputó el dominio legal sobre El Taco luego de su exhumación, en un asimétrico cortejo institucional entre Argentina, los Estados Unidos y Alemania. De manera progresiva se revelaron nombres y documentos, se inventarió el estatus cambiante bajo el cual el meteorito fue pasando de mano en mano (primero “obsequio”, luego “donación” y, finalmente, “préstamo” al Instituto Smithsoniano) y se repasaron también las discusiones sobre qué metodologías serían las más aptas para estudiarlo. Se supo que la racionalización del objeto se dio en términos de gótico cientificista: en las notas y cartas que intercambiaron los organismos involucrados quedó asentado el anhelo de ejercer sobre aquel cuerpo acciones tales como "cortarlo por la mitad” para producir "especímenes de gran tamaño", “remover una lonja de cada mitad”, “pulirlo y limpiarlo con ácido nítrico”, etc.

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
De ahí en más, la trayectoria de El Taco se expandió y se contrajo alternadamente: atravesó el Atlántico hasta la ciudad alemana de Maguncia para ser rebanado mediante un sistema experimental, regresó partido a América y, en 1967, cinco años después de su descubrimiento en el Chaco Austral, una de las mitades fue repatriada a la Argentina. En Europa y Estados Unidos se produjo una gran cantidad de información técnica sobre el aerolito, mientras que en Buenos Aires su destino fue el de convertirse en una atracción pública y dominical, sin legajos que dieran cuenta de su actualidad ni de su travesía.

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
La desproporción de este recorrido histórico encontró su último capítulo -hasta el momento- en 2010. “Meteorit ‘El Taco’” fue el nombre de la exhibición en la que las dos mitades del meteorito se vieron reunidas por primera vez en un movimiento compositivo y, como ya se mencionó, elemental. La teórica Graciela Speranza especula, sin embargo, con que “más que denunciar los abusos solapados del colonialismo, la desidia de las instituciones, las desigualdades entre el Primer y el Tercer Mundo, las ‘componendas’ geopolíticas, [“Meteorit ‘El Taco’”] componía los restos en una obra que invitaba a atender y a reconsiderar sus efectos”. Dicho de otro modo, es el procedimiento de composición sobre los restos materiales de la política lo que avala una politicidad genuina desde el arte: el conceptualismo se vuelve una condición de posibilidad para que lo humano-histórico y lo cósmico-ahistórico puedan ser sondeados como procesos en lugar de quedar reducidos a simples consignas. El espacio que separa a las dos mitades del meteorito es, también, la escisión entre la estética y lo puramente material.

</Typography>
<Typography sx={{fontSize:"15px", fontFamily: 'Albert Sans', width:"100%"}}>
Antes que presentar al artista como una figura política plenipotenciaria, “Meteorit ‘El Taco’” atiende la plena dimensión de quien hace arte como un retórico materialista, capaz de ejercer un tipo muy específico de persuasión sobre las estructuras que gobiernan el mundo. El lenguaje artístico se instituye así no solo como uno de los sistemas diseñados por la humanidad para abordar asuntos extraterrestres, sino como el más apto para sortear las dificultades generadas por todos los otros sistemas.

</Typography>

  </Box>



<ImageList  variant="masonry" cols={1} gap={25}>
    {ElTacoData.map((item) => (
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