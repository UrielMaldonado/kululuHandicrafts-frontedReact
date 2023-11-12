// src/services/ropaService.ts
const API_URL = 'http://localhost:3000'; // Reemplaza con la URL real de tu API

export const fetchRopaArtesanal = async () => {
  try {
    const response = await fetch(`${API_URL}/ropa-artesanal`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return [];
  }
};
