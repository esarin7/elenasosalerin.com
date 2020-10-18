const util = require('util');
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('css');
    eleventyConfig.addPassthroughCopy('img');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addPassthroughCopy('favicon');

    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj);
    })

// 404 page
eleventyConfig.setBrowserSyncConfig({
  callbacks: {
    ready: function(err, browserSync) {
      const content_404 = fs.readFileSync('_site/404.html');

      browserSync.addMiddleware("*", (req, res) => {
        // Provides the 404 content without redirect.
        res.write(content_404);
        res.end();
      });
    },
  },
  ui: false,
  ghostMode: false
});

};

// Date formatting //
const moment = require('moment');
moment.locale('en');

module.exports = function (eleventyConfig) {

  eleventyConfig.addFilter('dateIso', date => {
    return moment(date).toISOString();
  });
  
  eleventyConfig.addFilter('dateReadable', date => {
    return moment(date).utc().format('LL'); // E.g. May 31, 2019
  });
};



