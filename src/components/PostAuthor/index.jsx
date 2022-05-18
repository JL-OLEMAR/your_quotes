import { useContext } from 'react'

import { PostsContext } from '../../Context'

import { Author } from './PostAuthor.styles.js'

export function PostAuthor({ userId }) {
  const { users } = useContext(PostsContext)
  const author = users.find(({ id }) => id === userId)

  return (
    <Author>
      <i>By: {author?.name ? author.name : 'Unknown'}</i>
    </Author>
  )
}
