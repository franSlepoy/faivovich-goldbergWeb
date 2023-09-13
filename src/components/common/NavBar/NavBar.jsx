import { AppBar, Button,  Toolbar, Typography, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [isIndexHovered, setIsIndexHovered] = useState(false);
    const [isBioHovered, setIsBioHovered] = useState(false);
    const [isBiblioHovered, setIsBiblioHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isTitleVisible, setIsTitleVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setIsTitleVisible(currentPosition <= scrollPosition); // Desplazándose hacia arriba
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);
    
   return (
        <>
            <AppBar position="fixed"  sx={{zIndex: 1, boxShadow: 0, bgcolor:"transparent", mt:"%"  }}>
                <Toolbar sx={{ justifyContent: "space-between", width:"100%", padding:0 }}>
                    
                    <Hidden smDown>
                        <Typography component={NavLink} 
                                    to={"/"} 
                                    onMouseEnter={() => setIsIndexHovered(true)}
                                    onMouseLeave={() => setIsIndexHovered(false)} 
                                    sx={{ 
                                         
                                         fontFamily:'Albert Sans', fontSize:"19px", fontWeight:"600", lineHeight:"normal",
                                        textDecoration: isIndexHovered ? 'underline' : 'none',
                                        }}>
                            INDEX
                        </Typography>
                     </Hidden>
                    <Hidden smDown>
                    <Typography  color="black"sx={{ml:"4%" , fontFamily: 'Albert Sans', fontSize:"19px", fontWeight:"600", lineHeight:"normal", opacity: isTitleVisible ? 1 : 0, transition: 'opacity 0.3s' }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
                    </Hidden>
                    <Hidden smUp>
                    <Typography  color="black" sx={{ fontFamily:'Albert Sans', fontSize:"19px", fontWeight:"600", lineHeight:"normal",  ml:2,mt:-3 , backgroundColor:"transparent" }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
                    </Hidden>
                    
                    
                    <Hidden smDown>
                        <Typography component={NavLink} 
                        to={"/impressum"} 
                        onMouseEnter={() => setIsBioHovered(true)}
                        onMouseLeave={() => setIsBioHovered(false)}
                        color="black" 
                        sx={{  fontSize:"19px", fontWeight:"600", lineHeight:"normal", cursor: 'pointer', padding:0,fontFamily:'Albert Sans',
                        textDecoration: isBioHovered ? 'underline' : 'none',
                        }}>
                          IMPRESSUM
                        </Typography>
                    </Hidden>
                    
                    <Button startIcon={<MenuIcon />} sx={{ display: { sm: "none", xs: "block" }, mt:-2, mr:-3 }} color="inherit" component={NavLink} to={"/menuMobile"} disableTouchRipple />
                
                </Toolbar>
            </AppBar>

            <AppBar position="fixed"  sx={{zIndex: 1, padding: 0, boxShadow: 0, backgroundColor: "transparent", top:"92%" }}>
                <Toolbar sx={{ justifyContent: "space-between", padding:0 }}>
                    <Hidden smDown>
                        <Typography component={NavLink} to={"/bibliography"} 
                        onMouseEnter={() => setIsBiblioHovered(true)}
                        onMouseLeave={() => setIsBiblioHovered(false)}
                        sx={{  fontSize:"19px", fontWeight:"600", lineHeight:"normal", p:0, fontFamily:'Albert Sans',
                        textDecoration: isBiblioHovered? "underline" : "none" }}>
                        BIBLIOGRAPHY
                        </Typography>
                    </Hidden>
                    
                    <Hidden smDown>
                        
                        <Typography  component={NavLink} to={"/contact"}  
                        onMouseEnter={() => setIsContactHovered(true)}
                        onMouseLeave={() => setIsContactHovered(false)}
                        sx={{  cursor: 'pointer', padding:0,fontFamily:'Albert Sans',  fontSize:"19px", fontWeight:"600", lineHeight:"normal",
                        textDecoration: isContactHovered? "underline" : "none",
                        }}>
                        ES / EN
                        </Typography>
                    </Hidden>
                    
                    
          
                </Toolbar>
            </AppBar>

            

        
        </>
    );
};

export default NavBar;