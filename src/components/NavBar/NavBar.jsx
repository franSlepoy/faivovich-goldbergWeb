import { AppBar, Button, Drawer, Toolbar, Typography, Hidden, List, ListItem, ListItemText, Collapse } from '@mui/material';
import React, { useState } from 'react';
import NavListDrawer from './NavListDrawer';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [infoMenuOpen, setInfoMenuOpen] = useState(false); // Estado para controlar el submenú
    const linkStyle = {
        textDecoration: 'none',
       
    };

    // Función para manejar el clic en "INFO"
    const handleInfoClick = () => {
        setInfoMenuOpen(!infoMenuOpen);
    };

    return (
        <>
            <AppBar position="fixed" color="inherit" sx={{ padding: -3, boxShadow: 0 }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Hidden smDown>
                        <Typography style={linkStyle} sx={{ mt: -2, ml: 0 }} variant="h7" color={"black"} mt={3} ml={5} component={NavLink} to={"/index"}>INDEX</Typography>
                    </Hidden>
                    <Typography style={linkStyle} sx={{ mt: -2 }} variant="h7" color={"black"} mt={3} ml={5}>FAIVOVICH & GOLDBERG</Typography>
                    <Hidden smDown>
                        <Typography style={{ ...linkStyle, cursor: 'pointer' }} sx={{ mt: -2 }} variant="h7" color={"black"} mt={3} ml={5} onClick={handleInfoClick}>INFO</Typography>
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
            <Collapse in={infoMenuOpen} sx={{ position: 'absolute', right: 12, zIndex: 1, mt:-14 }}>
                <List>
                    <ListItem button sx={{ textAlign: 'right' }}>
                        <ListItemText primary="EN—ES" />
                    </ListItem>
                    <ListItem button sx={{ textAlign: 'right' }}>
                        <ListItemText  primary="BIOGRAPHY" />
                    </ListItem>
                    <ListItem button sx={{ textAlign: 'right' }}>
                        <ListItemText primary="BIBLIOGRAPHY" />
                    </ListItem>
                    <ListItem button sx={{ textAlign: 'right' }}>
                        <ListItemText primary="CONTACT" />
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
};

export default NavBar;