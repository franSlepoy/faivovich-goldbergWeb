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
    
      <Box sx={{  width: 200,  height:"100%", bgcolor: "rgba(239, 239, 239)" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to={"/index"} >
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primaryTypographyProps={{ fontSize: '16px' }} sx={{ml:-4 }} primary="INDEX"/>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders" >
        <List>
          <ListItem disablePadding >
            <ListItemButton component={NavLink} to={"/biography"} >
            <ListItemText primaryTypographyProps={{ fontSize: '16px' }} primary="BIOGRAPHY" sx={{ml:3 }}  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to={"/bibliography"} >
            <ListItemText primaryTypographyProps={{ fontSize: '16px' }} primary="BIBLIOGRAPHY" sx={{ml:3 }}  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to={"/contacto"} >
            <ListItemText primaryTypographyProps={{ fontSize: '16px' }}  primary="CONTACTO" sx={{ml:3 }}  />
            </ListItemButton>
          </ListItem>
          
          
        </List>
      </nav>
    </Box>
    
    
  );
}