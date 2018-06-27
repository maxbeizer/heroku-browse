const {Command} = require('@oclif/command')
const cli = require('heroku-cli-util')

class BrowseCommand extends Command {
  async run() {
    cli.open('https://dashboard.heroku.com')
  }
}

BrowseCommand.description = 'Open the Heroku Dashboard from the CLI'

module.exports = BrowseCommand
