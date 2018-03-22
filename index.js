var request = require('request')

exports.search = function(query, options, callback) {
    if (arguments.length === 2) {
        callback = options
        options = {
            limit: 20
        }
    }

    request({
        method: 'get',
        url: 'https://www.npmjs.com/search/suggestions?q=' + query + '&size=' + options.limit,
        headers: { 'Content-Type': 'application/json' }
    }, function(err, res, body) {
        if (err) return callback(err)
        var modules = body;
        callback(null, JSON.parse(modules))
    })
}