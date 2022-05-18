export const updatePost = async (idPost, post) => {
  const response = await window.fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}`,
    {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(post)
    }
  )
  const data = await response.json()

  return data
}
