import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type New {
    id: Int
    title: String
    banner: String
  }
  type Query {
    news: [New]
    new(id: Int!): New
  }
`

export default typeDefs
