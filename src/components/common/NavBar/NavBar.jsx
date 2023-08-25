import { AppBar, Button,  Toolbar, Typography, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [isIndexHovered, setIsIndexHovered] = useState(false);
    const [isBioHovered, setIsBioHovered] = useState(false);
    const [isBiblioHovered, setIsBiblioHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    
   return (
        <>
            <AppBar position="fixed"  sx={{zIndex: 1, padding: 0, boxShadow: 0, bgcolor:"transparent" }}>
                <Toolbar sx={{ justifyContent: "space-between", padding:0 }}>
                    
                    <Hidden smDown>
                        <Typography component={NavLink} 
                                    to={"/index"} 
                                    onMouseEnter={() => setIsIndexHovered(true)}
                                    onMouseLeave={() => setIsIndexHovered(false)} 
                                    sx={{ 
                                        mt: -2, ml: 0, fontFamily:'Albert Sans',
                                        textDecoration: isIndexHovered ? 'underline' : 'none',
                                        }}>
                            INDEX
                        </Typography>
                     </Hidden>
                    
                    <Typography  color="black" sx={{ mt: -2, fontFamily:'Albert Sans' }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
                    
                    <Hidden smDown>
                        <Typography component={NavLink} 
                        to={"/biography"} 
                        onMouseEnter={() => setIsBioHovered(true)}
                        onMouseLeave={() => setIsBioHovered(false)}
                        color="black" 
                        sx={{ mt: -2, cursor: 'pointer', padding:0,fontFamily:'Albert Sans',
                        textDecoration: isBioHovered ? 'underline' : 'none',
                        }}>
                            BIOGRAPHY
                        </Typography>
                    </Hidden>
                    
                    <Button startIcon={<MenuIcon />} sx={{ display: { sm: "none", xs: "block" }, marginLeft: 'auto', marginRight: '5px', fontSize: '2.5rem' }} color="inherit" onClick={() => setOpen(true)} />
                </Toolbar>
            </AppBar>

            <AppBar position="fixed"  sx={{zIndex: 1, padding: 0, boxShadow: 0, backgroundColor: "transparent", mt:88 }}>
                <Toolbar sx={{ justifyContent: "space-between", padding:0 }}>
                    <Hidden smDown>
                        <Typography component={NavLink} to={"/bibliography"} 
                        onMouseEnter={() => setIsBiblioHovered(true)}
                        onMouseLeave={() => setIsBiblioHovered(false)}
                        sx={{  ml: 0, fontFamily:'Albert Sans',
                        textDecoration: isBiblioHovered? "underline" : "none" }}>
                        BIBLIOGRAPHY
                        </Typography>
                    </Hidden>
                    
                    <Hidden smDown>
                        <Typography  component={NavLink} to={"/contacto"}  
                        onMouseEnter={() => setIsContactHovered(true)}
                        onMouseLeave={() => setIsContactHovered(false)}
                        sx={{ mt: -2, cursor: 'pointer', padding:0,fontFamily:'Albert Sans',
                        textDecoration: isContactHovered? "underline" : "none",
                        }}>
                         CONTACT
                        </Typography>
                    </Hidden>
                    
                    
                    <Hidden smUp>
    {/* Usar un IconButton con el icono del menú hamburguesa */}
    <NavLink to="/contacto" style={{ marginLeft: 'auto', marginRight: '5px', padding: 0 }}>
        <IconButton sx={{ fontSize: '2.5rem', color: 'black' }}>
            <MenuIcon />
        </IconButton>
    </NavLink>
    </Hidden>
                </Toolbar>
            </AppBar>

            

        
        </>
    );
};

export default NavBar;