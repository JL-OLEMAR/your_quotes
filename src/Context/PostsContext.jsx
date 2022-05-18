import { createContext, useEffect, useState } from 'react'

import { getPosts, getUsers } from '../services'

// Context
export const PostsContext = createContext({})

// Provider Component
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [setPosts])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [setUsers])

  return (
    <PostsContext.Provider value={{ posts, setPosts, users }}>
      {children}
    </PostsContext.Provider>
  )
}
