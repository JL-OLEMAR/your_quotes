import { usePosts } from './usePosts.js'

export function usePostsFilteredById(postId) {
  const { posts } = usePosts()
  const postsFiltered = posts.filter(({ id }) => id !== Number(postId))

  return { postsFiltered }
}
