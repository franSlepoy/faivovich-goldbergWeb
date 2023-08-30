import { Box, Hidden, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Contacto = () => {
  const [isMailHovered, setIsMailHovered] = useState(false);
  const [isBarroHovered, setIsBarroHovered] = useState(false);
  
  return (
    <>
    <Hidden smDown>
    <Box >
    <Box margin={"auto"} width={600} sx={{display: { xs: "none", sm:"block"}}}  >
      <Typography sx={{mt: 20,mb:8,textAlign:"center", fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
    <Box mb={2}>
    <a
    href="mailto:mail@faivovichgoldberg.com"
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => setIsMailHovered(true)}
    onMouseLeave={() => setIsMailHovered(false)}
    style={{
        textDecoration: isMailHovered ? 'underline' : 'none',
        pointerEvents: 'auto',
        display: 'block', 
        textAlign: "center",
        mt: 3,
        fontSize: 18,
        fontFamily: "Albert Sans",
        
    }}
>
    mail@faivovichgoldberg.com
</a>
   </Box>
    
    <a
    href="https://www.barro.cc/es"
    target="_blank"
    rel="noopener noreferrer"
    onMouseEnter={() => setIsBarroHovered(true)}
    onMouseLeave={() => setIsBarroHovered(false)}
    style={{
        textDecoration: isBarroHovered ? "underline" : "none",
        pointerEvents: 'auto',
        display: 'block', // Ensure the link takes full width
        textAlign: "center",
        mt: 3,
        fontSize: 18,
        fontFamily: "Albert Sans",
    }}
>
    BARRO ARTE CONTEMPORANEO
</a>
      <Typography sx={{ mb: 15, textAlign:"center",fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG +54 11 4978 3759</Typography>
     </Box>

     <Box  sx={{display: { xs: "block", sm:"none"} }}>
       <Typography sx={{mt: 26,mb:8,textAlign:"center", fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
       <Typography sx={{ textAlign:"center",mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>mail@faivovichgoldberg.com </Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{ textAlign:"center",mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>BARRO ARTE CONTEMPORANEO </Typography>
       </Link>
       <Typography sx={{ mb: 15, textAlign:"center",fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG +54 11 4978 3759</Typography>
     </Box>
     </Box>
    </Hidden>

    <Hidden smUp>
    <Typography sx={{mt: 12, fontSize:33, fontFamily:"Albert Sans",}} variant='h3'>CONTACTO</Typography>
       <Typography sx={{ mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>mail@faivovichgoldberg.com </Typography>
       <Link to={"https://www.barro.cc/es"} target={"_blank"}>
       <Typography  sx={{ mt:3, fontSize:18, fontFamily:"Albert Sans",}} variant='h5'>BARRO ARTE CONTEMPORANEO </Typography>
       </Link>
       <Typography sx={{fontSize:13, fontFamily:"Albert Sans",}} variant='h5'>BUENOS AIRES, ARG +54 11 4978 3759</Typography>
    </Hidden>
    
     </>

  )
}

export default Contacto