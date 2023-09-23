import { api } from "./api";
import axios from "axios";

const RESERVAS_URL = `${api.server}/reservas`; //peticion para crear una reserva
const RESERVA_URL = `${api.server}/reserva`; // consulta de reservas por token

export const createReserva = async (data, token) => {
  try {
    const response = await axios.post(RESERVAS_URL, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
        "Hubo un error durante a peticion. Por favor, intenta nuevamente."
      );
    }
  }
};

export const myReservas = async (token) => {
  try {
    const response = await axios.get(RESERVA_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("No se pudo obtener la cantidad de reservas");
    }

    return response.data;
  } catch (error) {
    console.error("Error al obtener la cantidad de reservas:", error);
    throw error;
  }
};

export const cancelReserva = async (reservaId) => {
  try {
    const response = await axios.delete(`${RESERVAS_URL}/${reservaId}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status !== 204) {
      throw new Error("No se pudo cancelar la reserva");
    }

    return response.data;
  } catch (error) {
    console.error("Error al cancelar la reserva:", error);
    throw error;
  }
};
