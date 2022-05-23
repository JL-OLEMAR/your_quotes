import { useHistory } from 'react-router-dom'

import { deletePost } from '../../services'
import { DeleteButton, CancelButton } from '../../shared'
import { setErrorToast, setSuccessToast } from '../../utils'

import { ModalContainer, Modal } from './DeleteModal.styles.js'

export function DeleteModal({
  getPostsFilterByPostId,
  modal,
  postId,
  setModal,
  setPosts
}) {
  const history = useHistory()

  const handleConfirmDelete = async () => {
    try {
      await deletePost(postId)
      const postsFiltered = getPostsFilterByPostId(postId)

      setPosts([...postsFiltered])
      setSuccessToast('Post deleted successfully')
      history.push('/')
    } catch (error) {
      setErrorToast('Failed to delete the post')
      console.error('Failed to delete the post: ', error)
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
