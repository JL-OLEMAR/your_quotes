import { Link } from 'react-router-dom'
import { useContext } from 'react'

import { useForm } from '../hooks'
import { PostsList } from '../components'
import { ButtonsContainer, Container, MainButton, Form } from '../shared'
import { QuotesContext } from '../Context/QuotesContext.jsx'

export function Home() {
  const { posts, users } = useContext(QuotesContext)
  const [{ userId }, handleInputChange] = useForm({ userId: '' })
  const userPosts = posts.filter((post) => post.userId === Number(userId))

  return (
    <Container>
      <ButtonsContainer>
        <MainButton as={Link} to='/create'>
          New Post ➕
        </MainButton>
        <Form>
          <label htmlFor='userId'>
            <select
              required
              id='userId'
              name='userId'
              onChange={handleInputChange}
            >
              <option value=''>Filter by user</option>
              {users.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </label>
        </Form>
      </ButtonsContainer>

      <PostsList userPosts={userPosts} />
    </Container>
  )
}
