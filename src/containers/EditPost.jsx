import { Link, useNavigate, useParams } from 'react-router-dom'

import { updatePost } from '../services'
import {
  useForm,
  usePosts,
  usePostsFilteredById,
  useSinglePost
} from '../hooks'
import {
  Button,
  CancelButton,
  Container,
  FieldTitle,
  Form,
  Title
} from '../shared'
import { setErrorToast, setSuccessToast } from '../utils'

export function EditPost() {
  const { setPosts } = usePosts()
  const { postId } = useParams()
  const { post } = useSinglePost(postId)
  const { postsFiltered } = usePostsFilteredById(postId)
  const navigate = useNavigate()

  const [{ title, body }, handleInputChange] = useForm({
    title: post.title,
    body: post.body
  })

  const canSubmit = [title, body].every(Boolean) // if trusty, ok to submit

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (canSubmit) {
      try {
        const editedPost = await updatePost(postId, {
          ...post,
          title,
          body
        })
        const restPosts = [editedPost, ...postsFiltered]

        setPosts(restPosts)
        window.localStorage.setItem('posts', JSON.stringify(restPosts))
        setSuccessToast('Post updated successfully')
        navigate(`/posts/${postId}`)
      } catch (err) {
        setErrorToast('Failed to edit the post')
        console.error('Failed to edit the post: ', err)
      }
    }
  }

  return (
    <main>
      <Container>
        <Title>Edit Post ✍</Title>
        <Form onSubmit={handleSubmit}>
          <label htmlFor='title'>
            <FieldTitle>Title: </FieldTitle>
            <input
              required
              id='title'
              name='title'
              type='text'
              value={title}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor='body'>
            <FieldTitle>Body: </FieldTitle>
            <textarea
              required
              id='body'
              name='body'
              type='text'
              value={body}
              onChange={handleInputChange}
            />
          </label>

          <div>
            <CancelButton as={Link} to={`/posts/${postId}`} type='button'>
              Cancel 🚫
            </CancelButton>
            <Button disabled={!canSubmit} type='submit'>
              Save Post ✅
            </Button>
          </div>
        </Form>
      </Container>
    </main>
  )
}
