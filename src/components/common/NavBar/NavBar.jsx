import { AppBar, Button, Drawer, Toolbar, Typography, Hidden, List, ListItem, ListItemText, Collapse } from '@mui/material';
import React, { useState } from 'react';
import NavListDrawer from './NavListDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [infoMenuOpen, setInfoMenuOpen] = useState(false);

    // Función para manejar el clic en "INFO"
    const handleInfoClick = () => {
        setInfoMenuOpen(!infoMenuOpen);
    };

    return (
        <>
            <AppBar position="fixed"  sx={{zIndex: 1, padding: 0, boxShadow: 0, backgroundColor: '#EFEFEF'  }}>
                <Toolbar sx={{ justifyContent: "space-between", padding:0 }}>
                    <Hidden smDown>
                        <Typography component={NavLink} to={"/index"} variant="h7" color="black" sx={{ mt: -2, ml: 0}}>
                            INDEX
                        </Typography>
                    </Hidden>
                    <Typography variant="h7" color="black" sx={{ mt: -2 }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
                    <Hidden smDown>
                        <Typography onClick={handleInfoClick} variant="h7" color="black" sx={{ mt: -2, cursor: 'pointer', padding:0,textDecoration: 'underline'}}>
                            INFO
                        </Typography>
                    </Hidden>
                    <Button startIcon={<MenuIcon />} sx={{ display: { sm: "none", xs: "block" }, marginLeft: 'auto', marginRight: '5px', fontSize: '2.5rem' }} color="inherit" onClick={() => setOpen(true)} />
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor={'right'}
                onClose={() => setOpen(false)}
            >
                <NavListDrawer />
            </Drawer>

            {/* Submenú de INFO */}
            <Collapse in={infoMenuOpen} sx={{ position: 'fixed', right: 26, zIndex: 3, mt: -21 }}>
                <List sx={{ backgroundColor: '#EFEFEF' }}>
                    <ListItem button sx={{ textAlign: 'right', color: 'black', mt:0, padding:0, textDecoration: 'underline' }}>
                        <ListItemText primary="EN—ES" />
                    </ListItem>
                    <ListItem component={NavLink} to={"/biography"} button sx={{ textAlign: 'right', color: 'black',mt:0, padding:0, textDecoration: 'underline' }}>
                        <ListItemText primary="BIOGRAPHY" />
                    </ListItem>
                    <ListItem button component={NavLink} to={"/bibliography"} sx={{ textAlign: 'right', color: 'black', mt:0, padding:0, textDecoration: 'underline' }}>
                        <ListItemText primary="BIBLIOGRAPHY" />
                    </ListItem>
                    <ListItem button component={NavLink} to={"/contacto"}  sx={{ textAlign: 'right', color: 'black', mt:0, padding:0, textDecoration: 'underline' }}>
                        <ListItemText primary="CONTACT" />
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
};

export default NavBar;