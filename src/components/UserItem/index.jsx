import { useSingleUser } from '../../hooks'

import { Author } from './UserItem.styles.js'

export function UserItem({ userId }) {
  const { user } = useSingleUser({ userId })
  const name = user ? user.name : 'Anonymous'

  if (!user) return null

  return (
    <Author>
      <i>By: {name}</i>
    </Author>
  )
}
