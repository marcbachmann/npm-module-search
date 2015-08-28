# npm-module-search

```javascript
var npmSearch = require('npm-module-search')
npmSearch.search('express', function (err, modules) {
  console.log('Here are 20 modules', modules)
  // modules is an array of objects like:
  // {
  //   name: 'modulename',
  //   version: '1.0.0'
  //   author: 'some author'
  //   description: 'the description'
  //   stars: 1
  // }
})


npmSearch.search('express', {limit: 50} function (err, modules) {
  console.log('Here are 50 modules', modules)
})
```
