// src/services/joyeriaService.ts
const API_URL = 'http://localhost:3000'; // Reemplaza con la URL real de tu API

export const fetchJoyeriaArtesanal = async () => {
  try {
    const response = await fetch(`${API_URL}/joyeria-artesanal`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos de joyería:', error);
    return [];
  }
};
