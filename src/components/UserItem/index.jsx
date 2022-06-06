import { useSingleUser } from '../../hooks'

import { Author } from './UserItem.styles.js'

export function UserItem({ userId }) {
  const { user } = useSingleUser(userId)

  return (
    <Author>
      <i>By: {user ? user.name : 'Anonymous'}</i>
    </Author>
  )
}
