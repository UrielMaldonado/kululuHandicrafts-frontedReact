// src/pages/Joyeria.tsx
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchJoyeriaArtesanal } from '../services/joyeriaService';

interface JoyeriaItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

function Joyeria() {
  const [joyeriaData, setJoyeriaData] = useState<JoyeriaItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchJoyeriaArtesanal();
      setJoyeriaData(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: 90 }}>
      <Typography variant='h4' gutterBottom style={{ textAlign: 'center', fontWeight: 'bold', fontStyle: 'italic' }}>
        Joyeria Artesanal
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: 20 }}>
        {joyeriaData.map((joyeria) => (
          <Card key={joyeria.id} sx={{ maxWidth: 300, width: '100%', margin: 2 }}>
            <CardActionArea>
              <CardMedia component="img" height="240" image={joyeria.imagen} alt={joyeria.nombre} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {joyeria.nombre}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {joyeria.descripcion}
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

export default Joyeria;
