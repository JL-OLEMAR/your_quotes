import { useNavigate } from 'react-router-dom'

import { addPost } from '../services'
import { setErrorToast, setSuccessToast } from '../utils'

import { usePosts } from './usePosts.js'

export function useCreatePost({ title, body, userId }) {
  const { posts, setPosts } = usePosts()
  const navigate = useNavigate()
  const canSubmit = [title, body, userId].every(Boolean) // if trusty, ok

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (canSubmit) {
      try {
        const newPosted = await addPost({ title, body, userId: Number(userId) })
        const restPosts = [{ ...newPosted, id: posts.length + 1 }, ...posts]

        setPosts(restPosts)
        window.localStorage.setItem('posts', JSON.stringify(restPosts))
        setSuccessToast('Post created successfully')
        navigate('/')
      } catch (error) {
        setErrorToast('Error creating post')
        console.error('Error creating post: ', error)
      }
    }
  }

  return { canSubmit, handleSubmit }
}
