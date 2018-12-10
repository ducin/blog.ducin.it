const fs = require('fs')
const sm = require('sitemap')

const sitemap = sm.createSitemap ({
  hostname: 'http://blog.ducin.it',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: [
    { url: '/',  changefreq: 'monthly', priority: 0.8 },
    // { url: '/page-1/',  changefreq: 'daily', priority: 0.3 },
    // { url: '/page-2/',  changefreq: 'monthly',  priority: 0.7 },
    // { url: '/page-3/'},    // changefreq: 'weekly',  priority: 0.5
    // { url: '/page-4/',   img: "http://urlTest.com" }
  ]
})

fs.writeFileSync("docs/sitemap.xml", sitemap.toString())
