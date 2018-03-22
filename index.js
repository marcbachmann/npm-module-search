var findInBatches = require('find-in-batches')
var request = require('request')
var cheerio = require('cheerio')

exports.search = function (query, options, callback) {
  if (arguments.length === 2) {
    callback = options
    options = {}
  }

  query = (query || '').trim()
  if (!query) return callback(null, [])

  var opts = { batchSize: 20, maximum: 20 }
  if (options.limit) opts.maximum = options.limit

  var modules = []
  findInBatches(opts, function find (options, callback) {
    search(query, options, callback)
  }, function each (m, done) {
    modules.push(m)
    done()
  }, function (err) {
    if (err) return callback(err)
    callback(null, modules)
  })
}

function search (query, options, callback) {
    var page = options.page - 1 || 0
    return request({
        method: 'get',
        url: 'https://www.npmjs.com/search?page=' + page + '&q=' + query
    }, function(err, res, body) {
        if (err) return callback(err)
        var $ = cheerio.load(body)
        var modules = []
        $('.package-list-item__capsule___3_4Eo').each(function() {
            modules.push({
                name: $(this).find('.package-list-item__title___sqwj8').text(),
                version: $(this).find('.package-list-item__version___1u3fc').text(),
                author: $(this).find('.package-list-item__publisherName___3I3K2').text(),
                description: $(this).find('.package-list-item__description___1nEpN').text()
            })
        })
        callback(null, modules)
    })
}
