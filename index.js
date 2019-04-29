var Crawler = require("crawler");

var c = new Crawler({
  maxConnections: 10,
  // This will be called for each crawled page
  callback: function(error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      // $ is Cheerio by default
      //a lean implementation of core jQuery designed specifically for the server
      // console.log($);
      // debugger;
      const $s = $(".works li img");
      z = $s
        .map((index, item) => {
          const title = $(item).attr("alt");
          const imgSrc = $(item).attr("data-src");

          return {
            title,
            imgSrc
          };
        })
        .get();
      // console.log(z);
    }
    done();
  }
});

// Queue just one URL, with default callback
c.queue({
  uri: "http://artand.cn/works",
  headers: {},
  userAgent:
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36"
});
