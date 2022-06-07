import { Link } from 'react-router-dom'

import { UsersList } from '../components'
import { useCreatePost, useForm } from '../hooks'
import {
  Button,
  CancelButton,
  Container,
  FieldTitle,
  Form,
  Title
} from '../shared'

const INITIAL_STATE = {
  title: '',
  body: '',
  userId: ''
}

export function CreatePost() {
  const [{ title, body, userId }, handleInputChange] = useForm(INITIAL_STATE)
  const { canSubmit, handleSubmit } = useCreatePost({ title, body, userId })

  return (
    <main>
      <Container>
        <Title>New Post ➕</Title>
        <Form onSubmit={handleSubmit}>
          <label htmlFor='title'>
            <FieldTitle>Title:</FieldTitle>
            <input
              required
              id='title'
              name='title'
              placeholder='Title...'
              type='text'
              value={title}
              onChange={handleInputChange}
            />
          </label>

          <label htmlFor='userId'>
            <FieldTitle>Author:</FieldTitle>
            <UsersList handleInputChange={handleInputChange} />
          </label>

          <label htmlFor='body'>
            <FieldTitle>Post:</FieldTitle>
            <textarea
              required
              id='body'
              name='body'
              placeholder='Type your post here...'
              type='text'
              value={body}
              onChange={handleInputChange}
            />
          </label>

          <div>
            <CancelButton as={Link} to='/' type='button'>
              Cancel 🚫
            </CancelButton>
            <Button disabled={!canSubmit} type='submit'>
              Create Post ✅
            </Button>
          </div>
        </Form>
      </Container>
    </main>
  )
}
