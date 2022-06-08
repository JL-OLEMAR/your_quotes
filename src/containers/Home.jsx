import { Link } from 'react-router-dom'

import { useFilteredPosts, usePosts } from '../hooks'
import { PostsList, UsersList } from '../components'
import { ButtonsContainer, Container, MainButton, Form } from '../shared'

export function Home() {
  const { posts, isLoading } = usePosts()
  const { handleInputChange, getFilteredPosts } = useFilteredPosts({ posts })

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
      <PostsList isLoading={isLoading} userPosts={getFilteredPosts()} />
    </Container>
  )
}
