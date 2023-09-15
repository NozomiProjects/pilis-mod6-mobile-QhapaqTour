import axios from 'axios';
import { api } from "./api"
import AsyncStorage from '@react-native-async-storage/async-storage';

const SIGNUP_URL = `${api.server}/signup`
const SIGNIN_URL = `${api.server}/signin`
const USERS_URL = `${api.server}/usuarios`;

// export const signUp = async (data) => {
//   try {
//     const response = await fetch(SIGNUP_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ ...data, rol: 'CLIENTE' })
//     })
//     const result = await response.json()
//     if (!response.ok) {
//       throw result
//     }
//     return result
//   } catch (error) {
//     throw error
//   }
// }

export const signUp = async (data) => {
  try {
    const response = await axios.post(SIGNUP_URL, { ...data, rol: 'CLIENTE' }, {
      headers: {
        'Content-Type': 'application/json'
      },
    })

    return response
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw new Error('No se recibió respuesta del servidor.');
    } else {
      throw new Error("Hubo un error en la autenticación. Por favor, intenta nuevamente.")    
    }
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
      await AsyncStorage.setItem('token', JSON.stringify(response.data.token));
      await AsyncStorage.setItem('user', JSON.stringify(response.data.user));

      return response.data;
    } else {
      console.error('Token no encontrado en la respuesta.');
      throw new Error('Token no encontrado en la respuesta.');
    }
  } catch (error) {
      if (error.response) {
        throw error.response.data;
      } else if (error.request) {
        throw new Error('No se recibió respuesta del servidor.');
      } else {
        throw new Error("Hubo un error en la autenticación. Por favor, intenta nuevamente.")    
      }
  }
};

export const getUserInfo = async (userId, token) => {
  try {
    const response = await axios.get(`${USERS_URL}/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    // console.log('Respuesta del backend:', response.data);

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
    const response = await axios.put(`${USERS_URL}/${userId}`, formData, {
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
