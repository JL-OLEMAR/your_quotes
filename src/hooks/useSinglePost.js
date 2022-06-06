import { useEffect, useState } from 'react'

import { getPostById } from '../services'

import { usePosts } from './usePosts.js'

export function useSinglePost(postId) {
  const { posts } = usePosts()
  const postFromCache = posts.find(({ id }) => id === Number(postId))
  const [post, setPost] = useState(postFromCache)

  useEffect(() => {
    if (!post) {
      getPostById({ postId }).then(setPost)
    }
  }, [post, postId])

  return { post }
}
