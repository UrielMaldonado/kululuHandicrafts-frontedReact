// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchRopaArtesanal } from '../services/ropaService';

interface RopaItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

function Ropa() {
  const [ropaData, setRopaData] = useState<RopaItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRopaArtesanal();
      setRopaData(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop:70 }}>
      {ropaData.map((ropa) => (
        <Card key={ropa.id} sx={{ maxWidth: 300, width: '100%', margin: 2 }}>
          <CardActionArea>
            <CardMedia component="img" height="240" image={ropa.imagen} alt={ropa.nombre} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {ropa.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {ropa.descripcion}
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
  );
}

export default Ropa;
