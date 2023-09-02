import axios from 'axios';
import { api } from "./api"

const SIGNUP_URL = `${api.server}/signup`
const SIGNIN_URL = `${api.server}/signin`

export const signUp = async (data) => {
  try {
    const response = await fetch(SIGNUP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...data, rol: 'cliente'})
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

    return response.data;
  } catch (error) {
    console.error(error);
    console.error('Error during login request:', error);
    throw error;
  }
};