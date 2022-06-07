import { useNavigate } from 'react-router-dom'

import { updatePost } from '../services'
import { setErrorToast, setSuccessToast } from '../utils'

import { usePosts } from './usePosts.js'
import { usePostsFilteredById } from './usePostsFilteredById.js'

export function useEditPost({ post, title, body }) {
  const { setPosts } = usePosts()
  const { postsFiltered } = usePostsFilteredById(post.id)
  const navigate = useNavigate()
  const canSubmit = [title, body].every(Boolean) // if trusty, ok to submit

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (canSubmit) {
      try {
        const editedPost = await updatePost(post.id, { ...post, title, body })
        const restPosts = [editedPost, ...postsFiltered]

        setPosts(restPosts)
        window.localStorage.setItem('posts', JSON.stringify(restPosts))
        setSuccessToast('Post updated successfully')
        navigate(`/posts/${post.id}`)
      } catch (err) {
        setErrorToast('Failed to edit the post')
        console.error('Failed to edit the post: ', err)
      }
    }
  }

  return { canSubmit, handleSubmit }
}
