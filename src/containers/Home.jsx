import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { PostsContext } from '../Context'
import { useForm } from '../hooks'
import { PostsList } from '../components'
import { ButtonsContainer, Container, MainButton, Form } from '../shared'

export function Home() {
  const [{ userId }, handleInputChange] = useForm({ userId: '' })
  const { users, isLoadingPosts, getPostsFilterByUserId } =
    useContext(PostsContext)
  const userPosts = getPostsFilterByUserId(userId)

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

      <PostsList isLoadingPosts={isLoadingPosts} userPosts={userPosts} />
    </Container>
  )
}
