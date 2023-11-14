// src/pages/Accesorios.tsx
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchAccesoriosArtesanales } from '../services/accesoriosService';

interface AccesorioItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

function Accesorios() {
  const [accesorioData, setAccesorioData] = useState<AccesorioItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAccesoriosArtesanales();
      setAccesorioData(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: 90 }}>
      <Typography variant='h4' gutterBottom style={{ textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic' }}>
        Accesorios Artesanales
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
        {accesorioData.map((accesorio) => (
          <Card key={accesorio.id} sx={{ maxWidth: 300, width: '100%', margin: 2 }}>
            <CardActionArea>
              <CardMedia component="img" height="240" image={accesorio.imagen} alt={accesorio.nombre} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {accesorio.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {accesorio.descripcion}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Compartir
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Accesorios;
