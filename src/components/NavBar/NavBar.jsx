
import { AppBar, Button, Drawer, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavListDrawer from './NavListDrawer'
import MenuIcon from '@mui/icons-material/Menu';




const NavBar = () => {
    const [open, setOpen]= useState(false)
    const linkStyle = {
      textDecoration: 'none',
      
    };
    

  return (
    <>
       
      <AppBar position="fixed"  color="inherit" sx={{padding:1}} >
     
       <Toolbar>
       <Typography style={linkStyle}    sx={{ml:2, mt:1,}} variant="h5" color={"black"} mt={3} ml={5}>Faivovich & Goldberg</Typography>
       <Button startIcon={<MenuIcon/>}  sx={{ marginLeft: 'auto', marginRight: '5px', fontSize: '2.5rem' }} color="inherit" onClick={()=> setOpen(true)
    
        }/>
       </Toolbar>
       
        
        
      </AppBar>
      
      <Drawer 
      open={open}
      anchor={'right'}
      onClose={()=> setOpen(false)}
      >
      <NavListDrawer/> 
      </Drawer>
     
    
    </>
  )
}

export default NavBar