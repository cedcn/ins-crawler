import request from 'request'
import _ from 'lodash'
const cheerio = require('cheerio')

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
          try {
            let $ = cheerio.load(body)

            let datas = '',
              jsFilesUrl = ''

            //这里需要先获取shareData中的一些信息备用
            $('script').each(function(indexInArray, valueOfElement) {
              let htmlStr = $('script')
                .eq(indexInArray)
                .html()
              if (htmlStr.indexOf('window._sharedData') == 0) {
                datas = $('script')
                  .eq(indexInArray)
                  .html()
                datas = datas.substring(20).replace(/\;/g, '')
              }
              // let src = $('script')
              //   .eq(indexInArray)
              //   .prop('src')
              // if (src && src.indexOf('ProfilePageContainer')) {
              //   jsFiles = 'https://www.instagram.com' + src
              // }
            })

            // let userData = $('body > script:nth-child(2)').html()

            // userData = userData.substring(0, userData.length - 1).replace('window._sharedData = ', '')
            let jsonData = JSON.parse(datas)

            const da = jsonData['entry_data']['ProfilePage'][0].graphql.user.edge_owner_to_timeline_media.edges
            const resData = _.map(da, (item) => ({ display_url: item.node.display_url, id: item.node.id }))
            console.log(resData)

            resolve(resData)
          } catch (error) {
            reject(error)
          }
        }
      }
    )
  })
}

// gosmoothorgohome
