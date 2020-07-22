//A few useful functions I felt like including into the Guide
module.exports = {
    //Field Function reduces the amount of effort needed to create an embed field
    field: function(name, value, inline) {
        return {
            name: name,
            value: value,
            inline: inline
        }
    },
    //MyColor Function returns the color of the bots highest role
    myColor: function(channel) {

        //Using the channel that you provide when you call the function and include its appropriate parameters (msg.channel), it grabs the Bot member from the current Guild
        let member = channel.guild.members.get(channel.client.user.id);
        //Using the Member variable, it maps the roles the Bot has and gets the top role's position
        let highestRole = Math.max(...member.roles.map(role => member.guild.roles.get(role).position));
            highestRole = member.guild.roles.find(role => role.position === highestRole);

        //If highestRole.color is defined, return it, otherwise return the default color
        if(highestRole.color) return highestRole.color
        else return `11329486`
    },
    //ResolveMember Function returns the member that it finds based on the arguments you give it
    //Should be used like: resolveMember(msg.channel, args.join(" ")) if u want it to get the member based on what you provide as a argument
    //Ex: Your arguments may be: Ant, the bot will return the member Antoni#2128
    resolveMember: function(channel, content) {
        let member;
        let members = channel.guild.members;

        if (members.has(content)) member = members.get(content);
        if (
            members.find(m =>
                m.user.username.toLowerCase().includes(content.toLowerCase())
            )
        )
            member = members.find(m =>
                m.user.username.toLowerCase().includes(content.toLowerCase())
            );
        if (
            members.find(m =>
                m.user.username.toLowerCase().includes(content.toLowerCase())
            )
        )
            member = members.find(m =>
                m.user.username.toLowerCase().includes(content.toLowerCase())
            );
        if (
            members.find(m =>
                m.username.toLowerCase().includes(content.toLowerCase())
            )
        )
            member = members.find(m =>
                m.username.toLowerCase().includes(content.toLowerCase())
            );
        return member;
    },
    //Owner Permissions (Include your Discord ID here) for other purposes that include non public commands for a public bot
    //Multiple Owners can be included in the Files
    permissions: {
        owner: [""]
    }
}