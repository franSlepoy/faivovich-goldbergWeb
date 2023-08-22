import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Contacto = () => {
    
  return (
    <>
    <Box margin={"auto"} width={600} sx={{display: { xs: "none", sm:"block"}}}  >
      <Typography sx={{mt: 20,mb:8,textAlign:"center", fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
      <Typography sx={{ textAlign:"center",mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>mail@faivovichgoldberg.com </Typography>
      <Link to={"https://www.barro.cc/es"} target={"_blank"}>
      <Typography  sx={{ textAlign:"center",mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>BARRO ARTE CONTEMPORANEO </Typography>
      </Link>
      <Typography sx={{ mb: 15, textAlign:"center",fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG +54 11 4978 3759</Typography>
     </Box>

     <Box sx={{display: { xs: "block", sm:"none"} }}>
       <Typography sx={{mt: 26,mb:8,textAlign:"center", fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
       <Typography sx={{ textAlign:"center",mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>mail@faivovichgoldberg.com </Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{ textAlign:"center",mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>BARRO ARTE CONTEMPORANEO </Typography>
       </Link>
       <Typography sx={{ mb: 15, textAlign:"center",fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG +54 11 4978 3759</Typography>
     </Box>
     </>

  )
}

export default Contacto