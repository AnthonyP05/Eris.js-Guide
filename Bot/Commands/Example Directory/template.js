//Getting Utils in order to aid in the creation of the commands
const ut = require("../../Config/utils");
const { prefix } = require("../../Config/config");

class Template {
    constructor() {
        this.name = ""; //Name of the Command
        this.aliases = [""]; //Any Command Aliases
        this.description = ""; //Description of the command to be displayed in the help command
        this.usage = [`**${prefix}**`]; //The Usage of the command to be displayed in the help command
        this.category = "Example Directory"; //Which category the command is in
    }

    async run(client, msg, args) {

        //Insert what you want the Bot to do here (code)

        //Example send message to channel code
        //Another way of doing so: await msg.channel.createMessage("Hi");
        await client.createMessage(msg.channel.id, `Hi`)

    }
}

module.exports = Template;
//The Module Exports must be the same name you have the class defined as