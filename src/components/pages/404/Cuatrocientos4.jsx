import { Box, Typography } from '@mui/material';
import React from 'react';

const Cuatrocientos4 = () => {
  return (
    <Box
      width={"100%"}
      height={"100vh"} /* Se cambia el valor de height para cubrir toda la pantalla */
      position="absolute" /* Se agrega la propiedad position */
      top={0} /* Se establece top en 0 para que empiece desde la parte superior */
      sx={{ backgroundColor: 'white', zIndex: 1 }} /* Se agrega un color de fondo para el componente */
    >
      <Typography sx={{ fontSize: "333px", textAlign: "center" }} >
        404
      </Typography>
    </Box>

  );
};

export default Cuatrocientos4;
