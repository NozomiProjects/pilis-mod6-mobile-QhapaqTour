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

export const getComentariosByRecorrido = async (idRecorrido) => {
  try {
    const response = await fetch(`${RECORRIDOS_URL}/${idRecorrido}/comments`)
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

export const createComentario = async (idRecorrido, data, token) => {
  try {
    const response = await fetch(`${RECORRIDOS_URL}/${idRecorrido}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data)
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