import Crawler from 'crawler'
import models from '../models'

export default () => {
  const c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: function(error, res, done) {
      if (error) {
        console.log(error)
      } else {
        var $ = res.$
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        // debugger;
        // const $s = $('.works li img')
        // const z = $s
        //   .map((index, item) => {
        //     const title = $(item).attr('alt')
        //     const imgSrc = $(item).attr('data-src')

        //     models.New.create({
        //       title: title,
        //       banner: imgSrc,
        //     })
        //   })
        //   .get()
      }
      done()
    },
  })

  // Queue just one URL, with default callback
  c.queue({
    uri: 'https://www.instagram.com/gosmoothorgohome/',
    headers: {},
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36',
  })
}
