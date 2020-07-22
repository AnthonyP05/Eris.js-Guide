//Requiring the dependencies
const { readdirSync } = require("fs");
const ascii = require("ascii-table");
const table = new ascii().setHeading("Command", "Load Status");

//Creating the Table that is displayed when the bot is ran
module.exports = client => {
    //Reads the Directories and Files in the Commands Directory
    readdirSync("./Bot/Commands/").forEach(dir => {
        const commands = readdirSync(`./Bot/Commands/${dir}/`).filter(f =>
            f.endsWith(".js")
        );

        for(let file of commands) {
            let pull = require(`../Commands/${dir}/${file}`);
            let command = new pull();
            if(command.name) {
                client.commands.set(command.name, command);
                table.addRow(file, `✅`);
            } else {
                table.addRow(file, `❌`);
                continue;
            }

            if(command.aliases && Array.isArray(command.aliases)) {
                command.aliases.forEach(alias =>
                    client.aliases.set(alias, command.name));
            }

        }
    })
    console.log(table.toString());
}