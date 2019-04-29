import express from 'express'
import path from 'path'
import { ApolloServer } from 'apollo-server-express'
import models from './models'
import artand from './collects/artand'
import typeDefs from './api/schema'
import resolvers from './api/resolvers'

const app = express()
app.use('/static', express.static(path.join(__dirname, '/static')))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
  },
})

models.New.destroy({ where: {}, truncate: true })
artand()
server.applyMiddleware({ app })
models.sequelize.sync().then(function() {
  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`))
})
