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
            <AppBar position="fixed"  sx={{zIndex: 1, padding:1, ml:1, mt:0, boxShadow: 0, bgcolor:"transparent"  }}>
                <Toolbar sx={{ justifyContent: "space-between", width:"100%", padding:0 }}>
                    
                    <Hidden smDown>
                        <Typography component={NavLink} 
                                    to={"/index"} 
                                    onMouseEnter={() => setIsIndexHovered(true)}
                                    onMouseLeave={() => setIsIndexHovered(false)} 
                                    sx={{ 
                                        mt: 0, ml: 0, fontFamily:'Albert Sans',
                                        textDecoration: isIndexHovered ? 'underline' : 'none',
                                        }}>
                            INDEX
                        </Typography>
                     </Hidden>
                    <Hidden smDown>
                    <Typography  color="black" sx={{ ml:-3,  fontFamily:'Albert Sans' }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
                    </Hidden>
                    <Hidden smUp>
                    <Typography  color="black" sx={{ fontFamily:'Albert Sans' }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
                    </Hidden>
                    
                    
                    <Hidden smDown>
                        <Typography component={NavLink} 
                        to={"/biography"} 
                        onMouseEnter={() => setIsBioHovered(true)}
                        onMouseLeave={() => setIsBioHovered(false)}
                        color="black" 
                        sx={{ mt: -2, cursor: 'pointer', padding:0,fontFamily:'Albert Sans',
                        textDecoration: isBioHovered ? 'underline' : 'none',
                        }}>
                            BIO
                        </Typography>
                    </Hidden>
                    
                    <Button startIcon={<MenuIcon />} sx={{ display: { sm: "none", xs: "block" }, mt:-1 }} color="inherit" component={NavLink} to={"/menuMobile"} disableTouchRipple />
                
                </Toolbar>
            </AppBar>

            <AppBar position="fixed"  sx={{zIndex: 1, padding: 0, boxShadow: 0, backgroundColor: "transparent", mt:88 }}>
                <Toolbar sx={{ justifyContent: "space-between", padding:0 }}>
                    <Hidden smDown>
                        <Typography component={NavLink} to={"/bibliography"} 
                        onMouseEnter={() => setIsBiblioHovered(true)}
                        onMouseLeave={() => setIsBiblioHovered(false)}
                        sx={{ fontFamily:'Albert Sans',
                        textDecoration: isBiblioHovered? "underline" : "none" }}>
                        BIBLIO
                        </Typography>
                    </Hidden>
                    
                    <Hidden smDown>
                        <Typography  component={NavLink} to={"/contact"}  
                        onMouseEnter={() => setIsContactHovered(true)}
                        onMouseLeave={() => setIsContactHovered(false)}
                        sx={{ cursor: 'pointer', padding:0,fontFamily:'Albert Sans',
                        textDecoration: isContactHovered? "underline" : "none",
                        }}>
                         CONTACT
                        </Typography>
                    </Hidden>
                    
                    
          
                </Toolbar>
            </AppBar>

            

        
        </>
    );
};

export default NavBar;