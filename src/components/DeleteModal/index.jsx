import { useDeletePost } from '../../hooks'
import { DeleteButton, CancelButton } from '../../shared'

import { ModalContainer, Modal } from './DeleteModal.styles.js'

export function DeleteModal({ modal, postId, setModal }) {
  const { handleConfirmDelete } = useDeletePost({ postId })

  const handleCancelDelete = () => {
    setModal(!modal)
  }

  return (
    <ModalContainer isShowing={modal}>
      <Modal>
        <h3>Are you sure you wanna delete this post?</h3>
        <span>This action is irreversible</span>
        <div>
          <CancelButton type='button' onClick={handleCancelDelete}>
            No, my bad 😅
          </CancelButton>
          <DeleteButton type='button' onClick={handleConfirmDelete}>
            Yes, delete this post 🗑
          </DeleteButton>
        </div>
      </Modal>
    </ModalContainer>
  )
}
