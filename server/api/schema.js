import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type New {
    id: Int
    title: String
    banner: String
  }

  type Post {
    display_url: String
    id: String
  }

  type Query {
    news: [New]
    new(id: Int!): New
    posts(username: String!): [Post]
  }
`

export default typeDefs
