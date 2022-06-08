import { useState } from 'react'

export function useFilteredPosts({ posts }) {
  const [userId, setUserId] = useState('')
  const [currentPage, setCurrentPage] = useState(0)

  const handleInputChange = ({ target }) => {
    setCurrentPage(0)
    setUserId(target.value)
  }

  const getPostsById = (userId) => {
    return posts.filter((post) => post.userId === Number(userId))
  }

  const plusPages = currentPage + 8
  const lessPages = currentPage - 8

  const getFilteredPosts = () => {
    if (userId === '') return posts.slice(currentPage, plusPages)

    return getPostsById(userId).slice(currentPage, plusPages)
  }

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

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(lessPages)
    }
  }

  return { handleInputChange, prevPage, nextPage, getFilteredPosts }
}
