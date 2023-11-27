import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Hidden,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const { t, i18n } = useTranslation();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: 1, boxShadow: 0, bgcolor: "transparent", width: "100%" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Hidden smDown>
            <Typography
              component={NavLink}
              to={"/"}
              onMouseEnter={() => setIsIndexHovered(true)}
              onMouseLeave={() => setIsIndexHovered(false)}
              sx={{
                width: "34%",
                fontFamily: "Albert Sans",
                fontSize: "19px",
                fontWeight: "600",
                lineHeight: "normal",
                textDecoration: isIndexHovered ? "underline" : "none",
              }}
            >
              INDEX
            </Typography>
          </Hidden>

          <Hidden smDown>
            <Typography
              color="black"
              sx={{
                textAlign: "center",
                fontFamily: "Albert Sans",
                fontSize: "19px",
                fontWeight: "600",
                lineHeight: "normal",
                opacity: isTitleVisible ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              FAIVOVICH & GOLDBERG
            </Typography>
          </Hidden>

          <Hidden smDown>
            <Typography
              component={NavLink}
              to={"/impressum"}
              onMouseEnter={() => setIsBioHovered(true)}
              onMouseLeave={() => setIsBioHovered(false)}
              color="black"
              sx={{
                width: "34%",
                textAlign: "end",
                fontSize: "19px",
                fontWeight: "600",
                lineHeight: "normal",
                cursor: "pointer",
                padding: 0,
                fontFamily: "Albert Sans",
                textDecoration: isBioHovered ? "underline" : "none",
              }}
            >
              IMPRESSUM
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>

      <AppBar
        position="fixed"
        sx={{
          zIndex: 1,
          padding: 0,
          boxShadow: 0,
          backgroundColor: "transparent",
          top: "92%",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", padding: 0 }}>
          <Hidden smDown>
            <Typography
              component={NavLink}
              to={"/bibliography"}
              onMouseEnter={() => setIsBiblioHovered(true)}
              onMouseLeave={() => setIsBiblioHovered(false)}
              sx={{
                fontSize: "19px",
                fontWeight: "600",
                lineHeight: "normal",
                p: 0,
                fontFamily: "Albert Sans",
                textDecoration: isBiblioHovered ? "underline" : "none",
              }}
            >
              BIBLIOGRAPHY
            </Typography>
          </Hidden>

          <Hidden smDown>
            <Typography
              component="button" // Usamos un botón en lugar de Typography
              onClick={() => {
                const newLanguage = i18n.language === "es" ? "en" : "es"; // Cambia entre 'es' y 'en'
                i18n.changeLanguage(newLanguage); // Cambia el idioma
              }}
              onMouseEnter={() => setIsContactHovered(true)}
              onMouseLeave={() => setIsContactHovered(false)}
              sx={{
                border: "none",
                bgcolor: "transparent",
                cursor: "pointer",
                padding: 0,
                fontFamily: "Albert Sans",
                fontSize: "19px",
                fontWeight: "600",
                lineHeight: "normal",
                textDecoration: isContactHovered ? "underline" : "none",
              }}
            >
              ES / EN
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>

      <Hidden smUp>
        <AppBar
          position="fixed"
          sx={{
            zIndex: 1,
            boxShadow: 0,
            bgcolor: "transparent",
            width: "100%",
          }}
        >
          <Toolbar>
            <Box
              width={"100%"}
              display={"flex"}
              sx={{ justifyContent: "space-between", bgcolor: "transparent" }}
            >
              <Typography
                color="black"
                sx={{
                  textAlign: "start",
                  fontFamily: "Albert Sans",
                  fontSize: "19px",
                  fontWeight: "500",
                  lineHeight: "normal",
                  mt: 1,
                }}
              >
                FAIVOVICH & GOLDBERG
              </Typography>
              <Button
                startIcon={<MenuIcon />}
                sx={{ display: { sm: "none", xs: "block" }, textAlign: "end" }}
                color="inherit"
                component={NavLink}
                to={"/menuMobile"}
                disableTouchRipple
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Hidden>
    </>
  );
};

export default NavBar;
