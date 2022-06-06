import { createContext, useState } from 'react'

// Context
export const PostsContext = createContext([])

// Provider Component
export const PostsProvider = ({ children }) => {
  const [users, setUsers] = useState(
    () => JSON.parse(window.localStorage.getItem('users')) || []
  )
  const [posts, setPosts] = useState(
    () => JSON.parse(window.localStorage.getItem('posts')) || []
  )

  return (
    <PostsContext.Provider value={{ users, setUsers, posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
