import axios from 'axios';
import { api } from "./api"

const RECORRIDOS_URL = `${api.server}/recorridos`

export const getRecorridos = async () => {
  try {
    const response = await fetch(RECORRIDOS_URL)
    const result = await response.json()

    if (!response.ok) {
      throw result
    }
    const data = result.map(recorrido => ({
      ...recorrido,
      esFavorito: false
    }))

    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}