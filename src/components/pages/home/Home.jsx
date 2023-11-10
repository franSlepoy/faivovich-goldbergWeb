import { Hidden, ImageList, ImageListItem, Typography } from '@mui/material';
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
        <Hidden smDown>
        <Typography   color="black"sx={{mt:"1.3%",textAlign:"center", fontFamily: 'Albert Sans', fontSize:"19px", fontWeight:"600", lineHeight:"normal", }}>
                        FAIVOVICH & GOLDBERG
                    </Typography>
        <Box sx={{ m: "auto", maxWidth: "65%", mb:"200px",   }}> {/* Centra y ajusta el ancho máximo */}
                <ImageList sx={{mt:"10%", overflow: 'hidden', p:"56px",      }} variant="standard" cols={4} gap={20}>
                    {IndexData.map((seccion, index) => (
                        <ImageListItem
                            key={seccion.id}
                            component={NavLink}
                            to={seccion.link}
                            style={linkStyle}
                            sx={{
                              
                                mb: 5,
                                position: "relative",
                                width: "100%", // Usa porcentajes para el ancho
                                height: "auto", // Ajusta la altura automáticamente
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
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
                                    mt:"15%",
                                   
                                    textAlign: "center",
                                    textTransform:"uppercase",
                                    fontSize: "19px",
                                    width: "100%", // Usa porcentajes para el ancho
                                    fontFamily: 'Albert Sans',
                                    zIndex: 43,
                                    ...(hoveredIndex === index && underlineStyle),
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
                                        zIndex: 100,
                                        width: "80px",
                                        height: "80px",
                                        objectFit: "contain",
                                        /* left: "50%",
                                        top: "-60px", */ // Ajusta esta posición para alinear la imagen según tu diseño
                                        /* transform: "translateX(-50%)", */
                                        transform: `translate(${cursorPosition.x - 9}px, ${cursorPosition.y + 40}px)`,
                                    }}
                                />
                            )}
                          
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Hidden>
            

          
            <Hidden smUp>
           {/*  <Typography sx={{fontFamily:'Albert Sans', fontSize:"19px", fontWeight:"600", textDecoration:"none",p:1, ml:"9px", mt:"25%"}}>INDEX</Typography> */}
            
            
            <Box sx ={{mt:"20%", width:"98%",mb:5,  display: { xs: "block", sm:"none"}}}>
                {IndexData.map((proyecto) => (
                    
                    <Typography component={NavLink} to={proyecto.link} sx={{fontFamily:'Albert Sans', fontSize:"20px", fontWeight:"400", textDecoration:"none", display:"block", textTransform:"uppercase"}} key={proyecto.id} padding={1} ml={"9px"}  >{proyecto.titulo}</Typography>
                ))}
            </Box>
            </Hidden>
           
        </>
    );
};

export default Home;