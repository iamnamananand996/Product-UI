import axios from "axios"

const apiUrl = process.env.REACT_APP_BACKEND_API_URL

export const updateProduct = (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }

  const requestBody = {
    data: data,
  }

  try {
    const result = axios.put(`${apiUrl}/product/${id}/`, requestBody, config)
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
