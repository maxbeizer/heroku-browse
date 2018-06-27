const {expect, test} = require('@oclif/test')
const cli = require('heroku-cli-util')

describe('browse', () => {
  test
  .stub(cli, 'open', () => '')
  .command(['browse'])
  .it('runs browse', () => {
    expect(cli.open.called).to.equal(true)
  })
})
