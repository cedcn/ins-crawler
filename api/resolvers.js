import models from '../models'

const resolvers = {
  Query: {
    news: () => {
      const data = models.New.findAll({
        attributes: ['id', 'title', 'banner'],
      })
      return data
    },
    new: (root, { id }) => {
      const data = models.New.findAll({
        attributes: ['title', 'banner'],
      })

      return data.filter((character) => {
        return (character.id = id)
      })[0]
    },
  },
}

export default resolvers
