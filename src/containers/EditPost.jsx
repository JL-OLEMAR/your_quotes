import { Link, useParams } from 'react-router-dom'

import { useEditPost, useForm, useSinglePost } from '../hooks'
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
  const { post } = useSinglePost(postId)
  const [{ title, body }, handleInputChange] = useForm({
    title: post.title,
    body: post.body
  })

  const { canSubmit, handleSubmit } = useEditPost({ post, title, body })

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
            <CancelButton as={Link} to={`/posts/${post.id}`} type='button'>
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
