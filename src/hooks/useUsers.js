import { useEffect, useContext, useState } from 'react'

import { getUsers } from '../services'
import { PostsContext } from '../Context'

export function useUsers() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false)
  const { users, setUsers } = useContext(PostsContext)

  useEffect(() => {
    if (users.length === 0) {
      setIsLoadingUsers(true)
      getUsers().then((user) => {
        setUsers(user)
        setIsLoadingUsers(false)
        window.localStorage.setItem('users', JSON.stringify(user))
      })
    } else {
      setUsers(users)
    }
  }, [users, setUsers])

  return { users, isLoadingUsers }
}
