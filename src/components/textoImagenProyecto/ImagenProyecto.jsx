import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { DecomisoImagenesData } from '../../servidor/DecomisoImagenesData';



export default function ImagenProyecto() {
    const linkStyle = {
        textDecoration: 'none',
        
      };
  return (
       
        <Box sx={{ margin:"auto",width: 400 }} >
      <ImageList  variant="standard" cols={1} gap={8}>
        {DecomisoImagenesData.map((imagen) => (
          <ImageListItem key={imagen.id}  style={linkStyle} sx={{color:"black", mt:3}}>
            <img 
              src={`${imagen.imagen}?w=248&fit=crop&auto=format`}
              srcSet={`${imagen.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={imagen.titulo}
              
            />
            
          <ImageListItemBar  sx={{ backgroundColor:"transparent", textTransform:"uppercase"}}  position="bottom"  /> 
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
       
        

    
      
    
    
  );
}