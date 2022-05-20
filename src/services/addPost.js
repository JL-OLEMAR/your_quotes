import { API_URL } from './settings.js'

const fromApriRespToAddPost = (apiResponse) => {
  const { id, title, body, userId } = apiResponse

  return { id, title, body, userId }
}

export function addPost(post) {
  return window
    .fetch(`${API_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    })
    .then((response) => response.json())
    .then(fromApriRespToAddPost)
}
