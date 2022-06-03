import { createContext, useEffect, useState } from 'react'

import { getPosts, getUsers } from '../services'

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
  const [isLoadingPosts, setIsLoadingPosts] = useState(false)

  useEffect(() => {
    if (users.length === 0) {
      getUsers().then((user) => {
        setUsers(user)
        window.localStorage.setItem('users', JSON.stringify(user))
      })
    } else {
      setUsers(users)
    }
  }, [users])

  useEffect(() => {
    if (posts.length === 0) {
      setIsLoadingPosts(true)

      getPosts().then((post) => {
        setPosts(post)
        setIsLoadingPosts(false)
        window.localStorage.setItem('posts', JSON.stringify(post))
      })
    } else {
      setPosts(posts)
    }
  }, [posts])

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
        isLoadingPosts,
        setUsers,
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
