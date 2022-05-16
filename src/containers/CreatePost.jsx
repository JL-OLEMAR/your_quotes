import { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { QuotesContext } from '../Context/QuotesContext.jsx'
import { useForm } from '../hooks'
import { addPost } from '../services'
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
  const [formValues, handleInputChange] = useForm(INITIAL_STATE)
  const { posts, setPosts, users } = useContext(QuotesContext)
  const { title, body, userId } = formValues
  const history = useHistory()

  const canSubmit = [title, body, userId].every(Boolean)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (canSubmit) {
      try {
        const newPosts = await addPost({ title, body, userId: Number(userId) })

        posts.unshift(newPosts)
        setPosts(posts)
        history.push('/')
      } catch (error) {
        console.error(error)
      }
    }
  }

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
            <select
              required
              id='userId'
              name='userId'
              type='select'
              onChange={handleInputChange}
            >
              <option value=''>Select an user</option>
              {users.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor='body'>
            <FieldTitle>Quote:</FieldTitle>
            <textarea
              required
              id='body'
              name='body'
              placeholder='Quote...'
              type='text'
              value={body}
              onChange={handleInputChange}
            />
          </label>

          <div>
            <Button disabled={!canSubmit} type='submit'>
              Create Post ✅
            </Button>
            <CancelButton as={Link} to='/'>
              Cancel 🚫
            </CancelButton>
          </div>
        </Form>
      </Container>
    </main>
  )
}
