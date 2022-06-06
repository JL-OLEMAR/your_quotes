import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { useSinglePost } from '../../hooks'
import { DeleteModal, UserItem } from '../../components'
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
  const { post } = useSinglePost(postId)

  const handleDeletePost = async () => {
    setModal(!modal)
  }

  return (
    <main>
      <Container>
        <section>
          <ButtonsContainer>
            <MainButton as={Link} to={`/edit/${post.id}`}>
              Edit Post ✍
            </MainButton>

            <DeleteButton type='button' onClick={handleDeletePost}>
              Delete Post 🗑
            </DeleteButton>
          </ButtonsContainer>

          <Post>
            <Title>{post.title}</Title>
            <UserItem userId={post.userId} />
            <p>{post.body}</p>
          </Post>
        </section>
      </Container>

      <DeleteModal modal={modal} postId={postId} setModal={setModal} />
    </main>
  )
}
