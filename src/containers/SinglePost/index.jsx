import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PostsContext } from '../../Context'
import { DeleteModal, Loading, PostAuthor } from '../../components'
import {
  ButtonsContainer,
  Container,
  DeleteButton,
  MainButton,
  Title
} from '../../shared'

import { Post } from './SinglePost.styles.js'

export function SinglePost() {
  const [modal, setModal] = useState(false)
  const { postId } = useParams()
  const { setPosts, getPostById, getPostsFilterByPostId, isLoading } =
    useContext(PostsContext)
  const { id, title, body, userId } = getPostById(postId)

  const handleDeletePost = async () => {
    setModal(!modal)
  }

  return (
    <main>
      <Container>
        <section>
          <ButtonsContainer>
            <MainButton as={Link} to={`/edit/${id}`}>
              Edit Post ✍
            </MainButton>

            <DeleteButton type='button' onClick={handleDeletePost}>
              Delete Post 🗑
            </DeleteButton>
          </ButtonsContainer>

          {isLoading ? (
            <Loading />
          ) : (
            <Post>
              <Title>{title}</Title>
              <PostAuthor userId={userId} />
              <p>{body}</p>
            </Post>
          )}
        </section>
      </Container>

      <DeleteModal
        getPostsFilterByPostId={getPostsFilterByPostId}
        modal={modal}
        postId={id}
        setModal={setModal}
        setPosts={setPosts}
      />
    </main>
  )
}
