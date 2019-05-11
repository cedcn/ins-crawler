const path = require('path')

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(less|css)$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
        {
          loader: 'less-loader',
          options: {
            paths: [path.resolve(__dirname, 'node_modules')],
            javascriptEnabled: true,
          },
        },
      ],
    })

    config.resolve.alias['@components'] = path.join(__dirname, 'components')
    config.resolve.alias['@utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['@routes'] = path.join(__dirname, 'routes.js')

    return config
  },
}
