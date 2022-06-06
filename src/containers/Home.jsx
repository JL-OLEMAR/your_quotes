import { Link } from 'react-router-dom'

import { useForm, usePosts } from '../hooks'
import { PostsList, UsersList } from '../components'
import { ButtonsContainer, Container, MainButton, Form } from '../shared'

export function Home() {
  const [{ userId }, handleInputChange] = useForm({ userId: '' })
  const { posts, isLoading } = usePosts()

  const getPostsFilterByUserId = () => {
    const postsFiltered = posts.filter((post) => post.userId === Number(userId))

    return postsFiltered.length > 0 ? postsFiltered : posts
  }

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

      <PostsList isLoading={isLoading} userPosts={getPostsFilterByUserId()} />
    </Container>
  )
}
