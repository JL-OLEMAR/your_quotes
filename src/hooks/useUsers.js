import { useEffect, useContext } from 'react'

import { getUsers } from '../services'
import { PostsContext } from '../Context'

export function useUsers() {
  const { users, setUsers } = useContext(PostsContext)

  useEffect(() => {
    if (users.length === 0) {
      getUsers().then((user) => {
        setUsers(user)
        window.localStorage.setItem('users', JSON.stringify(user))
      })
    } else {
      setUsers(users)
    }
  }, [users, setUsers])

  return { users }
}
