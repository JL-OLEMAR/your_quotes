import { Link, useHistory, useParams } from 'react-router-dom'
import { useContext } from 'react'

import { updatePost } from '../services'
import { PostsContext } from '../Context'
import { useForm } from '../hooks'
import { setErrorToast, setSuccessToast } from '../utils'
import {
  Button,
  CancelButton,
  Container,
  FieldTitle,
  Form,
  Title
} from '../shared'

export function EditPost() {
  const { postId } = useParams()
  const { setPosts, getPostById, getPostsFilterByPostId } =
    useContext(PostsContext)
  const post = getPostById(postId)
  const history = useHistory()

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
        const postsFiltered = getPostsFilterByPostId(post.id)

        setPosts([editedPost, ...postsFiltered])
        setSuccessToast('Post updated successfully')
        history.push(`/posts/${postId}`)
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
