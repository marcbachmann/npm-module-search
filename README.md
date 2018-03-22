# npm-module-search

```javascript
var npmSearch = require('npm-module-search')
npmSearch.search('express', function (err, modules) {
  console.log('Here are 20 modules', modules)
  // modules is an array of objects like:
  // {
  //   name: "npm-module-search",
  //   scope: "unscoped",
  //   version: "2.0.0",
  //   description: "A module to search for npm modules",
  //   keywords: [
  //    "This property may be inexisting if no keywords are set for this package"
  //   ]
  //   date: "2017-07-05T01:05:45.455Z",
  //   links: {
  //       npm: "https://www.npmjs.com/package/npm-module-search",
  //       homepage: "https://github.com/marcbachmann/npm-module-search#readme",
  //       repository: "https://github.com/marcbachmann/npm-module-search",
  //	   bugs: "https://github.com/marcbachmann/npm-module-search/issues"
  //   },
  //   author: {
  //	    name: "Marc Bachmann",
  //	    email: "This may be inexisting if the author email is not in the package.json file",
  //        username: "This may be inexisting as well"
  //   },
  //   publisher: {
  //	    username": "marcbachmann",
  //	    email: "marc.brookman@gmail.com"
  //   },
  //   maintainers: [
  //	    {
  //	        username: "marcbachmann",
  //		email: "marc.brookman@gmail.com"
  //	    }
  //	]
  // }
})


npmSearch.search('express', {limit: 50}, function (err, modules) {
  console.log('Here are 50 modules', modules)
})
```
