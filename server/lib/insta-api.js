import request from 'request'
import _ from 'lodash'

export const fetchUserPosts = (username) => {
  return new Promise((resolve, reject) => {
    request(
      {
        method: 'GET',
        uri: 'http://www.instagram.com/' + username,
        proxy: 'http://127.0.0.1:18222',
        headers: {
          host: 'www.instagram.com',
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
        },
      },
      function(error, response, body) {
        if (error) {
          reject(error)
          return
        }

        if (response && response.statusCode === 404) {
          reject('没有找到这个用户!')
          return
        }

        if (response && response.statusCode === 200) {
          const dataStr = JSON.stringify(body)
          const datarep = dataStr.replace(/(\r\n)|(\n)/g, '')
          const n = datarep.match(/(window._sharedData\s?)(=\s?)(.*?);<\/script>/)[3]
          const userData = JSON.parse(n.replace(/\\/g, ''))
          const da = userData['entry_data']['ProfilePage'][0].graphql.user.edge_owner_to_timeline_media.edges
          const resData = _.map(da, (item) => ({ display_url: item.node.display_url, id: item.node.id }))
          resolve(resData)
        }
      }
    )
  })
}

// gosmoothorgohome
