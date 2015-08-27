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
  var page = options.page || 1
  return request({
    method: 'get',
    url: 'https://www.npmjs.com/search?page=' + page + '&q=' + query
  }, function (err, res, body) {
    if (err) return callback(err)
    var $ = cheerio.load(body)
    var modules = []
    $('.package-details').each(function () {
      modules.push({
        name: $(this).find('.name').text(),
        version: $(this).find('.version').text(),
        author: $(this).find('.author').text(),
        description: $(this).find('.description').text(),
        stars: parseInt($(this).find('.stars').text(), 10)
      })
    })
    callback(null, modules)
  })
}
