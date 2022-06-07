import { useNavigate } from 'react-router-dom'

import { deletePost } from '../services'
import { setErrorToast, setSuccessToast } from '../utils'

import { usePostsFilteredById } from './usePostsFilteredById.js'
import { usePosts } from './usePosts.js'

export function useDeletePost({ postId }) {
  const navigate = useNavigate()
  const { postsFiltered } = usePostsFilteredById(postId)
  const { setPosts } = usePosts()

  const handleConfirmDelete = async () => {
    try {
      await deletePost(postId)
      const restPosts = [...postsFiltered]

      setPosts(restPosts)
      window.localStorage.setItem('posts', JSON.stringify(restPosts))
      setSuccessToast('Post deleted successfully')
      navigate('/')
    } catch (error) {
      setErrorToast('Failed to delete the post')
    }
  }

  return { handleConfirmDelete }
}
