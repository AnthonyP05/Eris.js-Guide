//Requiring the dependencies
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Command", "Load Status");

//Creating the Table that is displayed when the bot is ran
module.exports = client => {
    //Reads the Directories in the Commands Directory
    readdirSync("./Bot/Commands/").forEach(dir => {

        //Commands variable reads the directories files and filter (only gets) the ones ending with .js
        const commands = readdirSync(`./Bot/Commands/${dir}/`).filter(f =>
            f.endsWith(".js")
        );

        for(let file of commands) {
            //Pull gets the files
            let pull = require(`../Commands/${dir}/${file}`);
            //Creates new pull
            let command = new pull();
            //If command.name exists, Set command name in collection, as well as command, and add new row with the file variable, otherwise add x
            if(command.name) {
                client.commands.set(command.name, command);
                table.addRow(file, `✅`);
            } else {
                table.addRow(file, `❌`);
                continue;
            }

            //If Command Aliases exist and its an array, Set aliases in collection, as well as the command name
            if(command.aliases && Array.isArray(command.aliases)) {
                command.aliases.forEach(alias =>
                    client.aliases.set(alias, command.name));
            }

        }
    })
    console.log(table.toString());
}