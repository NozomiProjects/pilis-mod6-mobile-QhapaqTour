import { api } from "./api"

const RESERVAS_URL = `${api.server}/reservas`

export const createReserva = async (data, token) => {
    try {
      const response = await fetch(RESERVAS_URL, {
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