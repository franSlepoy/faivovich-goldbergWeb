import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';



export default function NavListDrawer() {
  return (
    
      <Box sx={{ width: '100%', maxWidth: 200, bgcolor: "#EFEFEF", }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to={"/index"} >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: '16px' }} sx={{ml:-7, }} primary="INDEX"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders" >
        <List>
          <ListItem disablePadding >
            <ListItemButton component={NavLink} to={"/biography"} >
            <ListItemText primaryTypographyProps={{ fontSize: '16px' }} primary="BIOGRAPHY"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to={"/bibliography"} >
            <ListItemText primaryTypographyProps={{ fontSize: '16px' }} primary="BIBLIOGRAPHY"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to={"/contacto"} >
            <ListItemText primaryTypographyProps={{ fontSize: '16px' }}  primary="CONTACTO"  />
            </ListItemButton>
          </ListItem>
          
          
        </List>
      </nav>
    </Box>
    
    
  );
}