import { API_URL } from './settings.js'

const fromApiResponseToUserByID = (apiResponse) => {
  const { id, name } = apiResponse

  return { id, name }
}

export function getUserById({ userId }) {
  return window
    .fetch(`${API_URL}/users/${userId}`)
    .then((response) => response.json())
    .then(fromApiResponseToUserByID)
}
