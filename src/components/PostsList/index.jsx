import { PostItem } from '../PostItem'
import { Loading } from '../Loading'

export function PostsList({ userPosts, isLoading }) {
  if (isLoading) return <Loading />

  return (
    <div>
      {userPosts.map(({ id, title, body, userId }) => {
        return (
          <PostItem
            key={id}
            body={body}
            id={id}
            title={title}
            userId={userId}
          />
        )
      })}
    </div>
  )
}
