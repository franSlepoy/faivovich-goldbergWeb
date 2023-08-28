import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IndexData } from '../../../servidor/IndexData';

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: -0, y: 0 });
    const linkStyle = {
        textDecoration: 'none',
    };
    const underlineStyle = {
        textDecoration: 'underline',
    };
    

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <Box sx={{  ml:14, width: "90%", position: "relative", mb:40, display: { xs: "none", sm:"block"} }}>
                <ImageList sx={{ mt: 26, mb:30, overflow: 'hidden', textTransform:"uppercase"  }} variant="standard" cols={5} gap={0}>
                    {IndexData.map((seccion, index) => (
                        <ImageListItem
                            key={seccion.id}
                            component={NavLink}
                            to={seccion.link}
                            style={linkStyle}
                            sx={{ color: "black", mb: 10, position: "relative" }}
                            onMouseEnter={() => setHoveredIndex(index)} // Establecer el índice cuando el cursor entra
                            onMouseLeave={() => setHoveredIndex(null)} // Restablecer el índice cuando el cursor sale
                            onMouseMove={(e) => {
                                const boundingRect = e.currentTarget.getBoundingClientRect();
                                const offsetX = e.clientX - boundingRect.left;
                                const offsetY = e.clientY - boundingRect.top;
                                setCursorPosition({ x: offsetX, y: offsetY });
                            }}
                        >
                            <Typography
                                color="black"
                                sx={{
                                    textAlign: "center",
                                    fontSize: "19",
                                    width: 180,
                                    fontFamily: 'Albert Sans',
                                    zIndex:3,
                                    ...(hoveredIndex === index && underlineStyle), // Agrega el estilo si el cursor está sobre el título
                                }}
                            >
                                {seccion.titulo}
                            </Typography>
                            {hoveredIndex === index && (
                                <img
                                src={`${seccion.imagen}?w=248&fit=crop&auto=format`}
                                srcSet={`${seccion.imagen}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={seccion.titulo}
                                style={{
                                    position: "absolute",
                                    zIndex:2,      
                                     
                                    width: "100%",        
                                    height:"100%" ,      
                                    objectFit: "contain", 
                                    objectPosition: "center center", 
                                    transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
                                }}
                            />
                            )}
                            <ImageListItemBar sx={{ backgroundColor: "transparent" }} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Box sx ={{mt:8, display: { xs: "block", sm:"none"}}}>
                {IndexData.map((proyecto) => (
                    <Typography component={NavLink} to={proyecto.link} sx={{fontFamily:'Albert Sans', textDecoration:"none", display:"block"}} key={proyecto.id} mt={3} >{proyecto.titulo}</Typography>
                ))}
            </Box>
        </>
    );
};

export default Home;