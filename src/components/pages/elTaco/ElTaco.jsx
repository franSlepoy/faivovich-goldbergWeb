import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Typography } from '@mui/material';
import { ElTacoData } from '../../../servidor/ElTacoData';

export default function ElTaco() {
  return (
    <>
<Box mt={20} ml={-6} mb={5}>
  <Typography sx={{textAlign:"center", fontSize:33, fontFamily: 'Albert Sans', }} variant="h4"> METEORIT, "EL TACO"</Typography>
  <Typography sx={{ textAlign:"center",  fontSize:13, fontFamily: 'Albert Sans' }} variant="subtitle2">(2010)</Typography>
  <Typography sx={{ mt:4, textAlign:"center",  fontSize:23, fontFamily: 'Albert Sans' }} variant="h6">EXHIBITION </Typography>
  <Typography sx={{ width:314, textAlign:"center", margin:"auto",  fontSize:13, fontFamily: 'Albert Sans' }} variant="subtitle2">
  Materials: IAB iron meteorite (1574 kg.)

</Typography>
<Box sx={{display: "flex", justifyContent:"center", mt:12  }}>
   <Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:388}}>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ac lorem non tempus. Proin pretium turpis nisl, eu eleifend massa accumsan non. Donec sed consectetur erat, vitae varius metus. Nulla eget lectus dolor. Suspendisse et tellus aliquet dolor suscipit sodales at et mauris. Duis semper felis vitae sodales venenatis. Suspendisse fringilla, dolor quis venenatis sagittis, eros lorem euismod ipsum, vel malesuada lorem ex sit amet elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur non sapien sed augue posuere posuere.
Etiam ac eros eu purus tincidunt blandit. Nam vestibulum a magna vulputate rutrum. Fusce tristique laoreet purus, in tincidunt turpis maximus rutrum. Fusce mi nisi, facilisis nec urna id, aliquam accumsan diam. Curabitur volutpat nulla sit amet nunc sollicitudin fringilla. Nam laoreet, leo vitae maximus sollicitudin, arcu mi tempus ipsum, vitae pulvinar mauris lectus lobortis lacus. Donec a mi quis purus efficitur sodales. Nullam varius, velit ac porttitor semper, quam justo dapibus lacus, in dictum ex diam nec odio. Nam tincidunt, purus id posuere maximus, arcu nibh vestibulum tellus, ac eleifend augue diam ac odio.

    </Typography>
    <Typography sx={{fontSize:15, fontFamily: 'Albert Sans', width:388, ml:2}}> 
    Fusce eget dictum mi, blandit aliquam neque. Mauris sed lorem eget purus ultricies finibus. Cras vitae tortor lobortis, elementum ante eu, gravida odio. Suspendisse potenti. Praesent lobortis in nisl vitae accumsan. Etiam ultrices mi nec cursus ultricies. Cras enim nulla, molestie eu fermentum eget, fermentum vitae quam. Ut a nunc tortor.
Donec tincidunt, sem sed pretium convallis, neque ipsum fringilla justo, eget tempus enim lectus nec nulla. Curabitur nec placerat lorem. Proin imperdiet ornare viverra. Nunc ultricies eget sem id feugiat. Aliquam ut ex nisl. Mauris sagittis magna metus, sit amet congue nulla ullamcorper id. Nulla facilisi. Integer facilisis consequat convallis. Etiam vel erat risus. Sed pellentesque elit ac ligula tincidunt, nec luctus eros condimentum. Sed porttitor, orci vitae porttitor tincidunt.

    </Typography>
</Box>


  
</Box>
<Box sx={{ width: 800, margin:"auto",  overflowY: "clip" }}>

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

</>
);
  
    
}