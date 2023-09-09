import axios from 'axios';
import { api } from "./api"
import AsyncStorage from '@react-native-async-storage/async-storage';

const SIGNUP_URL = `${api.server}/signup`
const SIGNIN_URL = `${api.server}/signin`
const USER_URL = (userId) => `${api.server}/usuarios/${userId}`;

export const signUp = async (data) => {
  try {
    const response = await fetch(SIGNUP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, rol: 'cliente' })
    })
    const result = await response.json()
    if (!response.ok) {
      throw result
    }
    return result
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const login = async (data) => {
  try {
    const response = await axios.post(SIGNIN_URL, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.token) {
      await AsyncStorage.setItem('token', response.data.token.token);
      await AsyncStorage.setItem('userId', response.data.user.id.toString());

      // Recuperar el token y el ID del usuario y verificar
      const storedToken = await AsyncStorage.getItem('token');
      const storedUserId = await AsyncStorage.getItem('userId');

      console.log('Token almacenado en AsyncStorage:', storedToken);
      console.log('ID de usuario almacenado en AsyncStorage:', storedUserId);

      return response.data;
    } else {
      console.error('Token no encontrado en la respuesta.');
      throw new Error('Token no encontrado en la respuesta.');
    }
  } catch (error) {
    throw error;
  }
};

//codigo nuevo
export const getUserInfo = async (userId) => {
  try {
    // Obtener el token y el userId de AsyncStorage
    const token = await AsyncStorage.getItem('token');
    const storedUserId = await AsyncStorage.getItem('userId');

    // Verificar si se encontró el token y el userId
    if (!token || !userId) {
      throw new Error('Token o userId no encontrados en AsyncStorage');
    }

    const response = await axios.get(`${USER_URL(storedUserId)}`, { // Usar la función USER_URL con el userId almacenado
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    console.log('Respuesta del backend:', response.data); // Agregar este console.log para ver la respuesta del backend

    if (response.status !== 200) {
      throw new Error('No se pudo obtener la información del usuario');
    }

    return response.data;
  } catch (error) {
    console.error('Error al obtener información del usuario:', error);
    throw error;
  }
};


// Nueva función para actualizar la información del usuario
export const updateUserInfo = async (userId, formData, token) => {
  try {
    // Realizar la solicitud PUT para actualizar la información del usuario
    const response = await axios.put(USER_URL(userId), formData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    // Verificar si la solicitud fue exitosa
    if (response.status !== 204) {
      throw new Error('No se pudo actualizar la información del usuario');
    }

    // Devolver los datos actualizados del usuario
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la información del usuario:', error);
    throw error;
  }
};