import { API_URL } from './settings.js'

const fromApiRespToUpdatePost = (apiResponse) => {
  const { id, title, body, userId } = apiResponse

  return { id, title, body, userId }
}

export function updatePost(idPost, post) {
  return window
    .fetch(`${API_URL}/posts/${idPost}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(post)
    })
    .then((response) => response.json())
    .then(fromApiRespToUpdatePost)
}
