import { createContext, useEffect, useState } from 'react'

import { getPosts, getUsers } from '../services'

// Context
export const PostsContext = createContext([])

// Provider Component
export const PostsProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  useEffect(() => {
    setIsLoading(true)

    getPosts().then((post) => {
      setPosts(post)
      setIsLoading(false)
    })
  }, [])

  // Get a user where user.id === userId return { user }
  const getUserById = (userId) => {
    return users.find(({ id }) => id === Number(userId))
  }

  // Get a post where post.id === postId return { post }
  const getPostById = (postId) => {
    return posts.find(({ id }) => id === Number(postId))
  }

  // Get posts if (post.userId === id) return [postsFiltered] else [posts]
  const getPostsFilterByUserId = (id) => {
    const postsFiltered = posts.filter(({ userId }) => userId === Number(id))

    return postsFiltered.length > 0 ? postsFiltered : posts
  }

  // Get all posts where post.id !== userId return posts[...]
  const getPostsFilterByPostId = (postId) => {
    return posts.filter(({ id }) => id !== Number(postId))
  }

  return (
    <PostsContext.Provider
      value={{
        users,
        posts,
        isLoading,
        setPosts,
        getUserById,
        getPostById,
        getPostsFilterByUserId,
        getPostsFilterByPostId
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
