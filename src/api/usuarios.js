import { api } from "./api"

const SIGNUP_URL = `${api.server}/signup`

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