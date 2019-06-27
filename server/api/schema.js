import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Post {
    display_url: String
    id: String
  }

  type Query {
    posts(username: String!): [Post]
  }
`

export default typeDefs
