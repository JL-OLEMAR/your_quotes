import { PostItem } from '../PostItem'
import { Title } from '../../shared'

import { Posts } from './PostsList.styles.js'

export function PostsList({ userPosts }) {
  return (
    <Posts>
      <Title>Posts 📃</Title>
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
    </Posts>
  )
}
