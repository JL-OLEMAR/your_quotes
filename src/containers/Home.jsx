import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { PostsContext } from '../Context'
import { useForm } from '../hooks'
import { PostsList, UsersList } from '../components'
import { ButtonsContainer, Container, MainButton, Form } from '../shared'

export function Home() {
  const [{ userId }, handleInputChange] = useForm({ userId: '' })
  const { isLoadingPosts, getPostsFilterByUserId } = useContext(PostsContext)

  return (
    <Container>
      <ButtonsContainer>
        <MainButton as={Link} to='/create'>
          New Post ➕
        </MainButton>
        <Form>
          <label htmlFor='userId'>
            <UsersList handleInputChange={handleInputChange} />
          </label>
        </Form>
      </ButtonsContainer>

      <PostsList
        isLoadingPosts={isLoadingPosts}
        userPosts={getPostsFilterByUserId(userId)}
      />
    </Container>
  )
}
