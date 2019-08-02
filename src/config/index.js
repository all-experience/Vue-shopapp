// 更改env的值即可更改环境
var env = 'dev'
var buildEnv = (function () {
  switch(env) {
    case 'dev':
      return require('../config/dev.js')
    case 'sandbox':
      return require('../config/sandbox.js')
    case 'pre':
      return require('../config/pre.js')
    case 'prod':
      return require('../config/prod.js')
    default:
      return require('../config/prod.js')
  }
})()
module.exports = buildEnv
