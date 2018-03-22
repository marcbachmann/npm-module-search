var assert = require('assert')
var npmSearch = require('./')

npmSearch.search('test', function (err, modules) {
  assert(err == null, 'Error is null')
  assert(Array.isArray(modules), 'Expect search to return an array')

  var module = modules[0]
  assert(typeof module.name === 'string', 'Expect name to be defined')
  assert(typeof module.version === 'string', 'Expect version to be defined')
  assert(typeof module.author === 'object', 'Expect author to be an object')
  assert(typeof module.description === 'string', 'Expect description to be a string')
})

npmSearch.search('test', {limit: 26}, function (err, modules) {
  assert(Array.isArray(modules), 'Expect search to return an array')
  assert(modules.length === 26, 'Expect exact limit count')
})

process.on('exit', function () { console.log('Executed all tests') })
