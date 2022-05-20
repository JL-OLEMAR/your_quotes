import { API_URL } from './settings.js'

const fromApiResponseToUsers = (apiResponse) => {
  if (Array.isArray(apiResponse))
    return apiResponse.map(({ id, name }) => {
      return { id, name }
    })

  return []
}

export function getUsers() {
  return window
    .fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then(fromApiResponseToUsers)
}
