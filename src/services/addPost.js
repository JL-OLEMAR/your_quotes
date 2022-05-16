export const addPost = async (post) => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }
  )
  const data = await response.json()

  return data
}
