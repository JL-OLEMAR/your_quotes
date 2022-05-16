export const getUsers = async () => {
  const response = await window.fetch(
    'https://jsonplaceholder.typicode.com/users'
  )
  const data = await response.json()

  return data
}
