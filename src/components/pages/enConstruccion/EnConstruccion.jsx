import { Box, Typography } from '@mui/material'
import React from 'react'
import EngineeringIcon from '@mui/icons-material/Engineering';

const EnConstruccion = () => {
  return (
    <Box    width={"100%"}
    height={"100vh"} /* Se cambia el valor de height para cubrir toda la pantalla */
    position="absolute" /* Se agrega la propiedad position */
    top={0} /* Se establece top en 0 para que empiece desde la parte superior */
    sx={{ backgroundColor: 'white', zIndex: 1 }} >
      <Typography sx={{ mt:15,textAlign: "center", fontSize: "5em", fontFamily: 'Albert Sans',}} >
      <EngineeringIcon sx={{fontSize:140}}/>
        EN CONSTRUCCIÓN 
      </Typography>
     
    </Box>
  )
}

export default EnConstruccion
