import { ImageList, ImageListItem, ImageListItemBar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IndexData } from '../../../servidor/IndexData';

const Home = () => {
    const linkStyle = {
        textDecoration: 'none',
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <>
            <Box sx={{ margin: "auto", width: 1200, position: "relative", mb:30, display: { xs: "none", sm:"block"} }}>
                <ImageList sx={{ mt: 26, overflow: 'hidden', textTransform:"uppercase"  }} variant="standard" cols={5} gap={72}>
                    {IndexData.map((seccion, index) => (
                        <ImageListItem
                            key={seccion.id}
                            component={NavLink}
                            to={seccion.link}
                            style={linkStyle}
                            sx={{ color: "black", mb: 10, position: "relative" }}
                            onMouseEnter={() => setHoveredIndex(index)} // Establecer el índice cuando el cursor entra
                            onMouseLeave={() => setHoveredIndex(null)} // Restablecer el índice cuando el cursor sale
                        >
                            <Typography
                                color="black"
                                sx={{ textAlign: "center", fontSize: "19", width:180, fontFamily:'Albert Sans' }}
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
                                    top: "50%",           // Centra verticalmente la imagen en el título
                                    left: "50%",        // Centra horizontalmente la imagen en el título
                                    transform: "translate(-50%, -50%)",  // Ajusta la posición para centrar correctamente
                                    width: "100%",        // Asegura que la imagen no se corte y llene el contenedor
                                    height: "100%",       // Asegura que la imagen no se corte y llene el contenedor
                                    objectFit: "contain", // Ajusta cómo se ajusta la imagen dentro del contenedor
                                    objectPosition: "right  bottom", // Ajusta la posición de la imagen dentro del contenedor
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