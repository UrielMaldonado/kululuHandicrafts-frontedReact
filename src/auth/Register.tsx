// Importando los componentes y estilos necesarios de Material-UI
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

// Creando un tema predeterminado utilizando la función createTheme de MUI
const defaultTheme = createTheme();

// Componente funcional para la página de registro
export default function SignUp() {
  // Función para manejar la presentación del formulario
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Extrayendo los datos del formulario utilizando FormData
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    // Aplicando el tema predeterminado al componente
    <ThemeProvider theme={defaultTheme}>
      {/* Contenedor principal para la página de registro */}
      <Container component="main" maxWidth="md" sx={{ mt: 12, mb: 5 }}>
        {/* Restableciendo algunos estilos predeterminados con CssBaseline */}
        <CssBaseline />
        {/* Utilizando Grid para el diseño */}
        <Grid container spacing={2}>
          {/* Tarjeta azul con imagen */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: 'blue',
                height: '100%',
              }}
            >
              {/* Imagen dentro de la tarjeta */}
              <CardMedia
                component="img"
                alt="Imagen de tarjeta azul"
                height="100%"
                sx={{ borderTopLeftRadius: 4, borderBottomLeftRadius: 4, objectFit: 'cover' }}
                image="https://th.bing.com/th/id/R.54beceba83b3114a986b230c783c32f8?rik=KUznbeXyypazDw&riu=http%3a%2f%2fwww.redcapitalmx.com%2fwp-content%2fuploads%2f2017%2f02%2fartesan%c3%adas-2.jpg&ehk=7xoVHWwlgqbDbaZHjaCs%2bpmgoCbPI%2bgmSJNP5n9EHXQ%3d&risl=&pid=ImgRaw&r=0"
              />
            </Card>
          </Grid>

          {/* Tarjeta con formulario de registro */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                backgroundColor: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {/* Contenido de la tarjeta con el formulario de registro */}
              <CardContent>
                {/* Avatar y título */}
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Registro
                </Typography>
                {/* Formulario de registro */}
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  {/* Utilizando una cuadrícula para organizar los campos del formulario */}
                  <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                    <Grid item xs={12} sm={6}>
                      {/* Campo de entrada para el nombre */}
                      <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Nombre"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      {/* Campo de entrada para el apellido */}
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Apellido"
                        name="lastName"
                        autoComplete="family-name"
                      />
                    </Grid>
                    {/* Campo de entrada para la dirección de correo electrónico */}
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Dirección de correo electrónico"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    {/* Campo de entrada para la contraseña */}
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Contraseña"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    {/* Casilla de verificación para recibir correos electrónicos adicionales */}
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="Deseo recibir inspiración, promociones de marketing y actualizaciones por correo electrónico."
                      />
                    </Grid>
                  </Grid>
                  {/* Botón de registro */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Registrarse
                  </Button>
                  {/* Enlace para iniciar sesión si ya tienes una cuenta */}
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        ¿Ya tienes una cuenta? Inicia sesión
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
