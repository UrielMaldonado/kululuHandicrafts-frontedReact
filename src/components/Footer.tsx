// Importando las bibliotecas y componentes necesarios desde Material-UI y React
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

// Definiendo el componente funcional Footer
export default function Footer() {
  // Retornando la estructura del componente con JSX
  return (
    // Utilizando el componente Box como contenedor principal del footer
    <Box
      component="footer"
      sx={{
        // Estableciendo el color de fondo morado/rosa
        backgroundColor: "#e91e63",
        // Estableciendo el espacio interno
        p: 6,
        // Estableciendo el color del texto blanco para todo el componente
        color: "white",
      }}
    >
      {/* Utilizando el componente Container de Material-UI con ancho máximo 'lg' */}
      <Container maxWidth="lg">
        {/* Utilizando el componente Grid para organizar el contenido en filas y columnas */}
        <Grid container spacing={5}>
          {/* Definiendo una columna para 'About Us' */}
          <Grid item xs={12} sm={4}>
            {/* Añadiendo un título */}
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            {/* Añadiendo un texto con formato body2, negrita y justificado */}
            <Typography variant="body2" fontWeight="bold" textAlign="justify">
              We are XYZ company, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          {/* Definiendo una columna para 'Contact Us' */}
          <Grid item xs={12} sm={4}>
            {/* Añadiendo un título */}
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            {/* Añadiendo texto con formato body2 y negrita */}
            <Typography variant="body2" fontWeight="bold">
              123 Main Street, Anytown, USA
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" fontWeight="bold">
              Phone: +1 234 567 8901
            </Typography>
          </Grid>
          {/* Definiendo una columna para 'Follow Us' */}
          <Grid item xs={12} sm={4}>
            {/* Añadiendo un título */}
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            {/* Añadiendo enlaces a redes sociales con iconos */}
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        {/* Añadiendo un espacio en la parte inferior */}
        <Box mt={5}>
          {/* Añadiendo texto con formato body2, negrita y centrado */}
          <Typography variant="body2" fontWeight="bold" align="center">
            {"Copyright © "}
            {/* Añadiendo un enlace a la página principal del sitio */}
            <Link color="inherit" href="https://your-website.com/">
              Your Website
            </Link>{" "}
            {/* Añadiendo el año actual */}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
