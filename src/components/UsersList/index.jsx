import { useUsers } from '../../hooks'

export function UsersList({ handleInputChange }) {
  const { users } = useUsers()

  return (
    <select
      required
      id='userId'
      name='userId'
      type='select'
      onChange={handleInputChange}
    >
      <option value=''>Select an user</option>
      {users.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  )
}
