export const deletePost = async (postId) => {
  return await window.fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { method: 'DELETE' }
  )
}
