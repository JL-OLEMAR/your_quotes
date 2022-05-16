import { useContext } from 'react'

import { QuotesContext } from '../../Context'

import { Author } from './PostAuthor.styles.js'

export function PostAuthor({ userId }) {
  const { users } = useContext(QuotesContext)
  const author = users.find(({ id }) => id === userId)

  return (
    <Author>
      <i>By: {author?.name ? author.name : 'Unknown'}</i>
    </Author>
  )
}
