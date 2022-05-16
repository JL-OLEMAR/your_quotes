import { PostAuthor } from '../PostAuthor'

import { Post, PostTitle } from './PostItem.styles'

export function PostItem({ body, id, title, user }) {
  return (
    <Post>
      <PostTitle to={`/posts/${id}`}>
        <h3>{title}</h3>
      </PostTitle>
      <p>{body}</p>
      <PostAuthor userId={user} />
    </Post>
  )
}
