import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./api";

const SIGNUP_URL = `${api.server}/signup`;
const SIGNIN_URL = `${api.server}/signin`;
const USERS_URL = `${api.server}/usuarios`;

export const signUp = async (data) => {
  try {
    const body = { ...data, rol: "CLIENTE" };
    const response = await axios.post(SIGNUP_URL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor.");
    } else {
      throw new Error(
        "Hubo un error en la autenticación. Por favor, intenta nuevamente."
      );
    }
  }
};

export const login = async (body) => {
  try {
    const response = await axios.post(SIGNIN_URL, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.token) {
      await AsyncStorage.setItem("token", JSON.stringify(response.data.token));
      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));

      return response.data;
    } else {
      console.error("Token no encontrado en la respuesta.");
      throw new Error("Token no encontrado en la respuesta.");
    }
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor.");
    } else {
      throw new Error(
        "Hubo un error en la autenticación. Por favor, intenta nuevamente."
      );
    }
  }
};

export const getUserInfo = async (userId, token) => {
  try {
    const response = await axios.get(`${USERS_URL}/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("No se pudo obtener la información del usuario");
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor.");
    } else {
      throw new Error("Error al obtener información del usuario");
    }
  }
};

export const updateUserInfo = async (userId, body, token) => {
  try {
    const response = await axios.put(`${USERS_URL}/${userId}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    // Verificar si la solicitud fue exitosa
    if (response.status !== 204) {
      throw new Error("No se pudo actualizar la información del usuario");
    }

    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor.");
    } else {
      throw new Error("Error al actualizar la información del usuario");
    }
  }
};
