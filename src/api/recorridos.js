import { api } from "./api"

const RECORRIDOS_URL = `${api.server}/recorridos`

export const getRecorridos = async () => {
  try {
    const response = await fetch(RECORRIDOS_URL)
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

export const getComentariosByRecorrido = async (id) => {
  try {
    const response = await fetch(`${RECORRIDOS_URL}/${id}/comments`)
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