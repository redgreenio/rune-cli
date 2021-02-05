require('approvals')
  .mocha()

describe('When running some tests', function () {
  it('should be able to use Approvals.', function () {
    this.verify("Hello, world!")
  })
})
