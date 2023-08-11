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
            <AppBar position="fixed"  sx={{ padding: -3, boxShadow: 0, backgroundColor: 'rgb(217, 217, 217)'  }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    <Hidden smDown>
                        <Typography component={NavLink} to={"/index"} variant="h7" color="black" sx={{ mt: -2, ml: 0, textDecoration:"none" }}>
                            INDEX
                        </Typography>
                    </Hidden>
                    <Typography variant="h7" color="black" sx={{ mt: -2 }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
                    <Hidden smDown>
                        <Typography onClick={handleInfoClick} variant="h7" color="black" sx={{ mt: -2, cursor: 'pointer' }}>
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
            <Collapse in={infoMenuOpen} sx={{ position: 'absolute', right: 12, zIndex: 1, mt: 6 }}>
                <List sx={{ backgroundColor: 'rgb(217, 217, 217)' }}>
                    <ListItem button sx={{ textAlign: 'right', color: 'black' }}>
                        <ListItemText primary="EN—ES" />
                    </ListItem>
                    <ListItem button sx={{ textAlign: 'right', color: 'black' }}>
                        <ListItemText primary="BIOGRAPHY" />
                    </ListItem>
                    <ListItem button sx={{ textAlign: 'right', color: 'black' }}>
                        <ListItemText primary="BIBLIOGRAPHY" />
                    </ListItem>
                    <ListItem button sx={{ textAlign: 'right', color: 'black' }}>
                        <ListItemText primary="CONTACT" />
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
};

export default NavBar;