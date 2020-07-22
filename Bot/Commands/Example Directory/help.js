const Eris = require("eris");
const { prefix } = require("../../Config/config");
const ut = require("../../Config/utils");
const fs = require("fs");

class Help {
    constructor() {
        this.name = "help";
        this.aliases = ["ayuda"];
        this.description = "A command designed for helping others :)";
        this.usage = [`**${prefix}help [command]**`];
        this.category = "Example Directory";
    }

    async run(client, msg, args) {

        //The member who sent the message's username
        let user = msg.member.username;
        //The member who sent the message avatar url (which is required in most cases to display the users avatar in embeds or such
        let av = msg.member.avatarURL;

        //Normal Command List
        //If the Member does not include any args, do this
        if (!args[0]) {

            //The structure of an Embed! An Embed is an Object
            //For more information on Embed Structure, you can visit https://discord.com/developers/docs/resources/channel
            let onHelp = {
                embed: {
                    author: { name: `${user}`, icon_url: av },

                    //Color is utilizing our myColor util located in the utils.js file. The parameters msg.channel is required in order for it to function properly

                    color: ut.myColor(msg.channel),
                    title: `${user} - Command List`,
                    description: `For detailed information on a command, use "${prefix}help <command>".`,
                    fields: [],
                }
            };

            //Reading the Directories in the Commands Directory
            let dirs = fs.readdirSync("./Bot/Commands/");
            //onHelp.embed.fields Shorted
            let embedFields = onHelp.embed.fields;

            //Filter isn't necessarily required but should be included if you don't want certain users to have access to view those commands
            //This filter is not allowing people to view the Directory in the Commands Directory labeled Owner
            //Although there is none currently, if there were to be, Owner directory and its contents would not be displayed
            dirs.filter(dir => dir !== "Owner")
                .forEach(dir => {
                    //Reads all the files that end with .js and joins them into a string removing the .js extensions
                    let files = fs.readdirSync(`./Bot/Commands/${dir}/`)
                        .filter(f => f.endsWith(".js"))
                        .map(f => f.replace(".js", ""))
                        .join(", ")

                    //Since fields is an array, we push the Directory and files to the array
                    embedFields.push(ut.field(`${dir}`, `${files}`));
                });

            //Sends embed to channel
            return client.createMessage(msg.channel.id, onHelp);
        } else {

            let onHelp = {
                embed: {
                    author: {name: `${user}`, icon_url: av},
                    color: ut.myColor(msg.channel),
                    description: `For detailed information on a command, use "${prefix}help <command>".`,
                    fields: [],
                }
            };

            //Gets the command and aliases from the collections in index.js
            const cmd = client.commands.get(args[0].toLowerCase()) || client.commands.get(client.aliases.get(args[0].toLowerCase()));

            //If the command is in category Owner, send this embed
            if (cmd.category === "Owner") {

                let onDenied = {
                    embed: {
                        color: 10223616,
                        fields: [ut.field(`Invalid Argument`, `Command, **${args[0].toLowerCase()}** does not exist!`)]
                    }
                };

                return client.createMessage(msg.channel.id, onDenied);
            }

            let embed = onHelp.embed;

            //Title of the Embed is the Commands Category - Command Name
            embed.title = `[${cmd.category}] - ${cmd.name[0].toUpperCase() + cmd.name.slice(1)}`

            //If there is no Command Aliases (cmd.aliases.length <= 0), display Aliases, None. If there is, display the aliases
            cmd.aliases.length <= 0 || cmd.aliases[0].length <= 0 ? embed.fields.push(ut.field(`Aliases`, `None`, true)) : embed.fields.push(ut.field(`Aliases`, `${cmd.aliases.join(", ")}`, true));

            //Displays the Information, and Usage of the Commands provided in the command class constructor
            embed.fields.push(ut.field(`Information`, `${cmd.description}`, true));
            embed.fields.push(ut.field(`Usage`, `${cmd.usage.join("\n")}`, true));

            //My Discord Server for more Support.
            embed.fields.push(ut.field(`More Help`, `[Support](https://discord.gg/suhG2Rx "Alpha: Discord")`, true));

            return client.createMessage(msg.channel.id, onHelp);

        }
    }
}

module.exports = Help;