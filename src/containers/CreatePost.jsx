import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { addPost } from '../services'
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
import { setErrorToast, setSuccessToast } from '../utils'

const INITIAL_STATE = {
  title: '',
  body: '',
  userId: ''
}

export function CreatePost() {
  const [{ title, body, userId }, handleInputChange] = useForm(INITIAL_STATE)
  const { users, posts, setPosts } = useContext(PostsContext)
  const navigate = useNavigate()
  const canSubmit = [title, body, userId].every(Boolean) // if trusty, ok

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (canSubmit) {
      try {
        const newPost = await addPost({ title, body, userId: Number(userId) })

        setPosts([{ ...newPost, id: posts.length + 1 }, ...posts])
        setSuccessToast('Post created successfully')
        navigate('/')
      } catch (error) {
        setErrorToast('Error creating post')
        console.error('Error creating post: ', error)
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
