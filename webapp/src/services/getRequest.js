import axios from "axios"

const apiUrl = process.env.REACT_APP_BACKEND_API_URL
const appId = process.env.REACT_APP_ID

export const getProduct = async (id) => {
  try {
    const result = await axios.get(`${apiUrl}/product/${id}/`)
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getProductList = async () => {
  try {
    const result = await axios.get(`${apiUrl}/trl/`)
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getConfiguration = async () => {
  try {
    const url = `${apiUrl}/configuration/${appId}`

    const result = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCredentials: false,
    })
    return Promise.resolve(result.data)
  } catch (error) {
    return Promise.reject(error)
  }
}
