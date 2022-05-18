import { Link, useHistory, useParams } from 'react-router-dom'
import { useContext } from 'react'

import { updatePost } from '../services'
import { PostsContext } from '../Context'
import { useForm } from '../hooks'
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
  const history = useHistory()
  const { posts, setPosts } = useContext(PostsContext)
  const postFilter = posts.find(({ id }) => id === Number(postId))

  const [{ title, body }, handleInputChange] = useForm({
    title: postFilter.title,
    body: postFilter.body
  })

  const canSubmit = [title, body].every(Boolean) // if trusty, ok to submit

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (canSubmit) {
      try {
        const editedPost = await updatePost(postFilter.id, {
          ...postFilter,
          title,
          body
        })

        const postsWithoutEdit = posts.filter(({ id }) => id !== postFilter.id)

        setPosts([editedPost, ...postsWithoutEdit])
        history.push(`/posts/${postId}`)
      } catch (err) {
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
