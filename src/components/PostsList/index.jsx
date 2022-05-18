import { useContext } from 'react'

import { PostsContext } from '../../Context'
import { PostItem } from '../PostItem'
import { Title } from '../../shared'

import { Posts } from './PostsList.styles'

export function PostsList({ userPosts }) {
  const { posts } = useContext(PostsContext)
  const render = userPosts && userPosts.length > 0 ? userPosts : posts

  return (
    <Posts>
      <Title>Posts 📃</Title>
      <div>
        {render.map(({ id, title, body, userId }) => {
          return (
            <PostItem
              key={id}
              body={body}
              id={id}
              title={title}
              user={userId}
            />
          )
        })}
      </div>
    </Posts>
  )
}
