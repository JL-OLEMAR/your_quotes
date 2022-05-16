import { createContext, useEffect, useState } from 'react'

import { getPosts, getUsers } from '../services'

// Context
export const QuotesContext = createContext({})

// Provider Component
export const QuotesProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [setPosts])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [setUsers])

  return (
    <QuotesContext.Provider value={{ posts, setPosts, users }}>
      {children}
    </QuotesContext.Provider>
  )
}
