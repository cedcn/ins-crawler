import path from 'path'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import morgan from 'morgan'
import next from 'next'
import resolvers from './api/resolvers'
import typeDefs from './api/schema'

const routes = require('../routes')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const nextHandler = routes.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  server.use('/static', express.static(path.join(__dirname, '/static')))
  server.use(morgan('combined'))

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
      settings: {
        'editor.theme': 'light',
      },
    },
  })
  apolloServer.applyMiddleware({ app: server })

  server.use(nextHandler)
  server.listen({ port: 4000 }, () => {
    console.log(`🚀 Server Ready at http://localhost:4000`)
    console.log(`🚀 Graphql Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
  })
})
