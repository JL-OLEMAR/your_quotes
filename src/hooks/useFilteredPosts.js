import { useCallback, useState } from 'react'

export function useFilteredPosts({ posts }) {
  const [userId, setUserId] = useState('')
  const [currentPage, setCurrentPage] = useState(0)

  const handleInputChange = ({ target }) => {
    setCurrentPage(0)
    setUserId(target.value)
  }

  const getPostsById = useCallback(
    (userId) => {
      return posts.filter((post) => post.userId === Number(userId))
    },
    [posts]
  )

  const getFilteredPosts = () => {
    if (userId === '') return posts.slice(currentPage, plusPages)

    return getPostsById(userId).slice(currentPage, plusPages)
  }

  const lessPages = currentPage - 8
  const plusPages = currentPage + 8

  // Previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(lessPages)
    }
  }

  // Next page
  const nextPage = () => {
    if (userId !== '' && getPostsById(userId).length > plusPages) {
      setCurrentPage(plusPages)
    }

    if (userId === '') {
      if (posts.length > plusPages) {
        setCurrentPage(plusPages)
      }
    }
  }

  // Button disable if there are no more previous pages
  const disabledPrevButton = () => {
    if (userId === '') return currentPage === 0

    return currentPage === 0
  }

  // Button disable if there are no more next pages
  const disabledNextButton = () => {
    if (userId !== '' && getPostsById(userId).length <= plusPages) return true
    if (userId === '') {
      if (posts.length <= plusPages) return true
    }

    return false
  }

  return {
    handleInputChange,
    getFilteredPosts,
    prevPage,
    nextPage,
    disabledPrevButton,
    disabledNextButton
  }
}
