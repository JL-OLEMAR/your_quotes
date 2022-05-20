import { API_URL } from './settings.js'

export async function deletePost(postId) {
  return await window.fetch(`${API_URL}/posts/${postId}`, { method: 'DELETE' })
}
