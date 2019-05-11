import { fetchUserPosts } from '../lib/insta-api'

const resolvers = {
  Query: {
    posts: async (parent, { username }) => {
      const response = await fetchUserPosts(username)
      return response
    },
  },
}

export default resolvers
