import { API_URL } from './settings.js'

const fromApiResponseToUserByID = (apiResponse) => {
  const { name } = apiResponse

  return { name }
}

export function getUserById(id) {
  return window
    .fetch(`${API_URL}/users/${id}`)
    .then((response) => response.json())
    .then(fromApiResponseToUserByID)
}
