const apiUrl = process.env.REACT_APP_BACKEND_API_URL
const appId = process.env.REACT_APP_ID

const headers = {
  mode: "cors",
  credentials: "omit",
}

export const getProduct = async (id, callback) => {
  const url = `${apiUrl}/product/${id}/`

  return fetch(url, headers)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

export const getTrlList = (callback) => {
  const url = `${apiUrl}/trl/`

  return fetch(url, headers)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}

export const getConfiguration = (callback) => {
  const url = `${apiUrl}/configuration/${appId}/`

  return fetch(url, headers)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
    .catch((error) => console.log(error))
}
