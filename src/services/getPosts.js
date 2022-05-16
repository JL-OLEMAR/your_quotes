export const getPosts = async () => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/posts'
  )
  const data = await response.json()

  return data
}
