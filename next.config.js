const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['@routes'] = path.join(__dirname, 'routes.js')

    return config
  },
}
