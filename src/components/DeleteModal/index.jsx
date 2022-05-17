import { useHistory } from 'react-router-dom'

import { deletePost } from '../../services'
import { DeleteButton, CancelButton } from '../../shared'

import { ModalContainer, Modal } from './DeleteModal.styles.js'

export function DeleteModal({
  modal,
  setModal,
  postIdFiltered,
  posts,
  setPosts
}) {
  const history = useHistory()

  const handleConfirmDelete = async () => {
    try {
      await deletePost(postIdFiltered)
      const removedPost = posts.filter(({ id }) => id !== postIdFiltered)

      setPosts([...removedPost])

      history.push('/')
    } catch (error) {
      console.log(error)
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
