import { useContext } from 'react'

import { PostsContext } from '../../Context'

import { Author } from './PostAuthor.styles.js'

export function PostAuthor({ userId }) {
  const { getUserById } = useContext(PostsContext)
  const author = getUserById(userId)

  return (
    <Author>
      <i>By: {author ? author.name : 'Anonymous'}</i>
    </Author>
  )
}
