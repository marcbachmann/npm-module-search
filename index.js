var request = require('request')

exports.search = function (query, options, callback) {
  if (arguments.length === 2) {
    callback = options
    options = {limit: 20}
  }

  request({
    method: 'get',
    url: 'https://www.npmjs.com/search/suggestions?q=' + query + '&size=' + options.limit || 20,
    headers: {'Content-Type': 'application/json'},
    json: true
  }, function (err, res, body) {
    if (err) return callback(err)
    callback(null, body)
  })
}
