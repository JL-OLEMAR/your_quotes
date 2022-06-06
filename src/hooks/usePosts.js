import { useEffect, useContext, useState } from 'react'

import { getPosts } from '../services'
import { PostsContext } from '../Context'

export function usePosts() {
  const [isLoading, setIsLoading] = useState(false)
  const { posts, setPosts } = useContext(PostsContext)

  useEffect(() => {
    if (posts.length === 0) {
      setIsLoading(true)

      getPosts().then((post) => {
        setPosts(post)
        setIsLoading(false)
        window.localStorage.setItem('posts', JSON.stringify(post))
      })
    } else {
      setPosts(posts)
    }
  }, [posts, setPosts])

  return { posts, setPosts, isLoading }
}
