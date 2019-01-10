const { Command, flags } = require('@oclif/command')

class SayMyNameCommand extends Command {
    async run() {
        const { flags } = this.parse(SayMyNameCommand)
        const name = flags.name || 'world'
        this.log(`hello ${name}`)
    }
}

SayMyNameCommand.description = `Describe the command here
...
Extra documentation goes here
`

SayMyNameCommand.flags = {
    name: flags.string({ char: 'n', description: 'name to print' }),
}

module.exports = SayMyNameCommand
