// Require the dependencies
const Eris = require("eris");

// Require the config.js file, and define our Client
const config = require("./Config/config");
const client = new Eris(`${config.token}`);

// Creating 2 Collections where we store our commands & aliases in
// Collections are stored on the client object so we can access them inside command files
client.commands = new Eris.Collection(undefined, undefined);
client.aliases = new Eris.Collection(undefined, undefined);

//Command Handler for the commands that can/will be made
["command"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

//Client ready event initialized
client.on(`ready`, () => {

    //Getting Member Count to display in status
    const reducer = (acc, guilds) => acc + guilds.memberCount;

    //Interval set to update Status to current # of members the bot can see every 10 seconds.
    setInterval(() => {

        //Editing bot status to display the amount of members the bot can see
        client.editStatus(`online`, { name: `${client.guilds.reduce(reducer, 0)} members`, type: 3 });

    }, 10000);

    //Logs when there's a successful connection
    console.log(`[Client]: Successfully connected to Discord gateway`)

})

//Client Message event initialized
client.on(`messageCreate`, async msg => {

    //If another bot tries to use this bot, nothing will happen
    if(msg.author.bot) return;
    
    //If a user/member does not use the bot's prefix, don't do anything
    if(!msg.content.startsWith(config.prefix)) return;

    //Argument (args) is the message content that comes after a command, in the form of an array.
    const args = msg.content.slice(config.prefix.length).trim().split(/[^\S\n]+/g);
    //Command (cmd) is self explanatory, the name of the command
    const cmd = args.shift().toLowerCase();

    //If only prefix is used, do nothing. Basically if no command, do nothing.
    if(cmd.length === 0) return;
    //Gets the commands from the Collection we initialized above
    let command = client.commands.get(cmd);
    //If the command isn't found, look for its alias!
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    //If the command IS found, run with these parameters
    if(command) {
        command.run(client, msg, args);
    }

})

//Handles Errors more appropriately when adding things to the bot
process.on('unhandledRejection', error => console.error('Error:', error))

//Connect to Discord, .then() is optional
client.connect().then(() => { });