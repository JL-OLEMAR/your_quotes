export const addPost = async ({ title, body, userId }) => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      body: JSON.stringify({ title, body, userId }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }
  )
  const data = await response.json()

  return data
}
