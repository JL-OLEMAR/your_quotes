import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { PostsContext } from '../../Context'
import { DeleteModal, PostAuthor } from '../../components'
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
  const { posts, setPosts } = useContext(PostsContext)
  const { postId } = useParams()

  const { id, title, body, userId } = posts.find(
    ({ id }) => id.toString() === postId
  )

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

          <Post>
            <Title>{title}</Title>
            <PostAuthor userId={userId} />
            <p>{body}</p>
          </Post>
        </section>
      </Container>

      <DeleteModal
        modal={modal}
        postIdFiltered={id}
        posts={posts}
        setModal={setModal}
        setPosts={setPosts}
      />
    </main>
  )
}
