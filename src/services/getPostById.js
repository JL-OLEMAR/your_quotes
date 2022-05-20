import { API_URL } from './settings.js'

const fromApiResponseToPostByID = (apiResponse) => {
  const { id, title, body, userId } = apiResponse

  return { id, title, body, userId }
}

export function getPostById({ id }) {
  return window
    .fetch(`${API_URL}/posts/${id}`)
    .then((response) => response.json())
    .then(fromApiResponseToPostByID)
}
