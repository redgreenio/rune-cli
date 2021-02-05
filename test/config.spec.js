require('approvals')
  .mocha()

const config = require('../lib/config.js')

describe('When getting choice list', function () {
  it('should return the default list of commit types', function () {
    this.verifyAsJSON(config.choicesList)
  })
})
