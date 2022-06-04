import { UserItem } from '../UserItem'

import { Post, PostTitle } from './PostItem.styles.js'

export function PostItem({ body, id, title, userId }) {
  return (
    <Post>
      <PostTitle to={`/posts/${id}`}>
        <h3>{title}</h3>
      </PostTitle>
      <p>{body}</p>
      <UserItem userId={userId} />
    </Post>
  )
}
