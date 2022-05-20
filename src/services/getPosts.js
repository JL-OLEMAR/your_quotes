import { API_URL } from './settings.js'

const fromApiResponseToPosts = (apiResponse) => {
  if (Array.isArray(apiResponse))
    return apiResponse.map(({ id, title, body, userId }) => {
      return { id, title, body, userId }
    })

  return []
}

export function getPosts() {
  return window
    .fetch(`${API_URL}/posts`)
    .then((response) => response.json())
    .then(fromApiResponseToPosts)
}
