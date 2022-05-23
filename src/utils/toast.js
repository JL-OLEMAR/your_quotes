import { toast } from 'react-toastify'

const toastOptions = {
  position: 'bottom-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined
}

export const setSuccessToast = (message) => {
  toast.success(message, toastOptions)
}

export const setErrorToast = (message) => {
  toast.error(message, toastOptions)
}
