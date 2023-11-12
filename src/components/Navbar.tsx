// Importing the necessary Material-UI and React libraries and components
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';

// Defining the pages available in the navigation bar
const pages = ['Home', 'Ropa', 'Accesorios', 'Joyeria', 'About'];

// Definiendo el componente funcional ResponsiveAppBar
export default function ResponsiveAppBar({ onPageChange }: { onPageChange: (page: string) => void }) {
  // Función para manejar el cambio de página y cargar el componente correspondiente
  const handlePageChange = (page: string) => {
    onPageChange(page);
  };

  // Retornando la estructura del componente con JSX
  return (
    // Utilizando el componente AppBar de Material-UI con posición estática
    <AppBar position="fixed" sx={{ background: '#ffffff', color: 'black' }}>
      {/* Utilizando el componente Container de Material-UI con ancho máximo 'xl' */}
      <Container maxWidth="xl">
        {/* Utilizando el componente Toolbar de Material-UI con gutters desactivados */}
        <Toolbar disableGutters>
          {/* Utilizando el componente AdbIcon de Material-UI con estilos específicos */}
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* Utilizando el componente Typography de Material-UI para el logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          {/* Utilizando el componente Box de Material-UI con flex y espacio entre elementos */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
            {/* Sección de botones de categorías (izquierda) */}
            <Box sx={{ display: 'flex' }}>
              {/* Mapeando las páginas y creando botones para cada una */}
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'black', display: 'block', textDecoration: 'none' }}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}
            </Box>
            {/* Sección de botones de login y register (derecha) */}
            <Box sx={{ display: 'flex' }}>
              {/* Botón de login */}
              <Button
                key="login"
                sx={{ my: 2, color: 'black', display: 'block' }}
                onClick={() => onPageChange('Login')}
              >
                Log in
              </Button>
              {/* Botón de registro */}
              <Button
                key="register"
                sx={{ my: 2, color: 'black', display: 'block', textDecoration: 'none' }}
                onClick={() => onPageChange('SignUp')}
              >
                SignUp
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
