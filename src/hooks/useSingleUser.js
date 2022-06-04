import { useEffect, useState } from 'react'

import { getUserById } from '../services'

import { useUsers } from './useUsers.js'

export function useSingleUser({ userId }) {
  const { users } = useUsers()
  const userFromCache = users.find((user) => user.id === Number(userId))
  const [user, setUser] = useState(() => userFromCache)

  useEffect(() => {
    if (!user) {
      getUserById({ userId }).then(setUser)
    }
  }, [user, userId])

  return { user }
}
