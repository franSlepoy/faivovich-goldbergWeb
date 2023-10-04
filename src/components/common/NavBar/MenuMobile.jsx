
import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuMobile = () => {
  return (
    <>
    <Box  mt={8} ml={2} sx={{display:"flex", flexDirection:"column"}}>
      <Typography sx={{fontFamily:'Albert Sans', fontWeight:"500", textDecoration:"none"}} component={NavLink} to={"/"}>
        INDEX
      </Typography>
      <Typography sx={{fontSize:"20px",fontFamily:'Albert Sans', mt: 2, textDecoration:"none"}} component={NavLink} to={"/impressum"}>
       IMPRESSUM
      </Typography>
      <Typography sx={{fontSize:"20px",fontFamily:'Albert Sans', mt:2, textDecoration:"none"}} component={NavLink} to={"/bibliography"}>
        BIBLIOGRAPHY
      </Typography>
      <Typography sx={{fontSize:"20px",fontFamily:'Albert Sans', mt:2, textDecoration:"none"}}>
        ENG / ESP
      </Typography>
    </Box>
    </>
  )
}

export default MenuMobile
