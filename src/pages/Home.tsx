import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { fetchJoyeriaArtesanal } from '../services/joyeriaService';
import { fetchRopaArtesanal } from '../services/ropaService';
import { fetchAccesoriosArtesanales } from '../services/accesoriosService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
interface JoyeriaItem {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}
interface RopaItem {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}
interface AccesorioItem {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

function Home() {
    const [joyeriaData, setJoyeriaData] = useState<JoyeriaItem[]>([]);
    const [ropaData, setRopaData] = useState<RopaItem[]>([]);
    const [accesorioData, setAccesorioData] = useState<AccesorioItem[]>([]);
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        const fetchData = async () => {
            const dataRopa = await fetchRopaArtesanal();
            const dataJoyeria = await fetchJoyeriaArtesanal();
            const dataAccesorios = await fetchAccesoriosArtesanales();

            setRopaData(dataRopa);
            setJoyeriaData(dataJoyeria);
            setAccesorioData(dataAccesorios);
        };

        fetchData();
    }, []);

    const handleLoadMore = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
    };

    return (
        <>
            <div style={{ marginTop: 90 }}>
            <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
                    Ropa
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {ropaData.slice(0, visibleCards).map((ropa) => (
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
            </div>

            <div style={{ marginTop: 20 }}>
            <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
                    Joyería
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {joyeriaData.slice(0, visibleCards).map((joyeria) => (
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

            <div style={{ marginTop: 20 }}>
            <Typography variant="h3" gutterBottom style={{ textAlign: 'center' }}>
                    Accesorios
                </Typography>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {accesorioData.slice(0, visibleCards).map((accesorio) => (
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
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                <Button variant="contained" color="primary" onClick={handleLoadMore}>
                    Cargar más
                </Button>
            </div>
        </>
    );
}

export default Home;
