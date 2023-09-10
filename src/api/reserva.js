import { api } from "./api";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

const RESERVAS_URL = `${api.server}/reservas`;

export const createReserva = async (data) => {
    try {
        // Obtener el token de AsyncStorage
        const token = await AsyncStorage.getItem('token');

        if (!token) {
            throw new Error('Token no encontrado en AsyncStorage');
        }

        const response = await axios.post(RESERVAS_URL, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`, // Agrega el token al encabezado
            },
        });

        if (response.status !== 201) {
            throw new Error('No se pudo crear la reserva');
        }

        return response.data;
    } catch (error) {
        console.error('Error al crear la reserva:', error);
        throw error;
    }
};
