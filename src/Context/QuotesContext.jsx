import { createContext, useEffect, useState } from 'react'

import { getPosts, getUsers } from '../services'

export const QuotesContext = createContext({})

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
    <QuotesContext.Provider value={{ posts, users, setPosts, setUsers }}>
      {children}
    </QuotesContext.Provider>
  )
}
