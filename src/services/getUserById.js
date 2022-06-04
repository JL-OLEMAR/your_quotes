import { API_URL } from './settings.js'

const fromApiResponseToUserByID = (apiResponse) => {
  const { name } = apiResponse

  return { name }
}

export function getUserById({ userId }) {
  return window
    .fetch(`${API_URL}/users/${userId}`)
    .then((response) => response.json())
    .then(fromApiResponseToUserByID)
}
