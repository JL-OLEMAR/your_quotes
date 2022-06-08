import { Link } from 'react-router-dom'

import { useFilteredPosts, usePosts } from '../../hooks'
import { PostsList, UsersList } from '../../components'
import {
  Button,
  ButtonsContainer,
  Container,
  Form,
  MainButton,
  Title
} from '../../shared'

import { ButtonsContainerPages, PostsContainer } from './Home.styles.js'

export function Home() {
  const { posts, isLoading } = usePosts()
  const {
    handleInputChange,
    getFilteredPosts,
    prevPage,
    nextPage,
    disabledPrevButton,
    disabledNextButton
  } = useFilteredPosts({ posts })

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

      <PostsContainer>
        <Title>Posts 📃</Title>
        <PostsList isLoading={isLoading} userPosts={getFilteredPosts()} />
      </PostsContainer>

      <ButtonsContainerPages>
        <Button disabled={disabledPrevButton()} onClick={prevPage}>
          {'< Previous'}
        </Button>
        <Button disabled={disabledNextButton()} onClick={nextPage}>
          {'Next >'}
        </Button>
      </ButtonsContainerPages>
    </Container>
  )
}
