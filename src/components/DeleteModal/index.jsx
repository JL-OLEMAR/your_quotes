import { useNavigate } from 'react-router-dom'

import { deletePost } from '../../services'
import { usePosts, usePostsFilteredById } from '../../hooks'
import { DeleteButton, CancelButton } from '../../shared'
import { setErrorToast, setSuccessToast } from '../../utils'

import { ModalContainer, Modal } from './DeleteModal.styles.js'

export function DeleteModal({ modal, postId, setModal }) {
  const { setPosts } = usePosts()
  const { postsFiltered } = usePostsFilteredById(postId)
  const navigate = useNavigate()

  const handleConfirmDelete = async () => {
    try {
      await deletePost(postId)
      const restPosts = [...postsFiltered]

      setPosts(restPosts)
      window.localStorage.setItem('posts', JSON.stringify(restPosts))
      setSuccessToast('Post deleted successfully')
      navigate('/')
    } catch (error) {
      setErrorToast('Failed to delete the post')
    }
  }

  const handleCancelDelete = () => {
    setModal(!modal)
  }

  return (
    <ModalContainer isShowing={modal}>
      <Modal>
        <h3>Are you sure you wanna delete this post?</h3>
        <span>This action is irreversible</span>
        <div>
          <DeleteButton type='button' onClick={handleConfirmDelete}>
            Yes, delete this post 🗑
          </DeleteButton>
          <CancelButton type='button' onClick={handleCancelDelete}>
            No, my bad 😅
          </CancelButton>
        </div>
      </Modal>
    </ModalContainer>
  )
}
