//This bot is created by Yversio
//If you have any further questions
//Please contact me on discord
//Discord name: уνєяѕισ#9596 || Discord server: https://discord.gg/bqn466C
 
const Discord = require('discord.js');
const Token = 'xxxxx'; // change the xxxxx to your client token so you can use the bot
const Client = new Discord.Client();
const footer = "Yversio's Verification";
 
const prefix = "-"; // I did the - but you can do whatever you like to use
 
 
Client.on("ready", () => {
    console.log(`Verification Bot is loaded!`); // So you can see your bot is turned on
    Client.user.setActivity("Verify with -verify") // Game activity
}); 
 
Client.on("guildMemberAdd", member => {
    var nonverified = member.guild.roles.find(role => role.name === 'NonV');
    member.addRole(nonverified); // This makes it so it gives them the 'NonV' rank when they join the discord
});
 
Client.on(`message`, function(message) {
    if (message.channel.name === "verify") { // The channel where they need to verify
        if (message.content === "-verify") { // The command to verify
            const verifyRole = message.guild.roles.find(role => role.name === 'Verified'); // The rank they get when they verify
            var role = message.guild.roles.find(role => role.name === 'NonV'); // This removes the 'NonV' rank
            message.member.addRole(verifyRole);
            message.member.removeRole(role);
            message.author.send({ embed: {
                color: 0xfd0000,
                title: 'Verify bot',
                description:  `You have been Verified `,
                footer: {
                    text: 'Verification bot' // This makes it so the player gets a DM that they succesfully verified on the server.
                },
                timestamp: new Date()
            }})
            message.delete(50 * 1000) // Deletes the correct message. It's using ms instead of seconds. So that's why 50 * 1000
        } else message.delete() // Deletes the fake / incorrect messages
   
    };
});
 
Client.on(`message`, (message) => {
    let  cont = message.content.slice(prefix.length).split("")
    let args = cont.slice(1);
    if (!message.content.startsWith(prefix) || message.author.bot) return;
  
    if  (message.content.toLowerCase().startsWith(prefix + `verify`)) { 
        if (message.channel.name === "verify") {
            return;
        }
        else{
            message.delete();
            const embed = new Discord.RichEmbed()
            .setColor(0xfd0000)
            .setTitle(`Verify bot`)
            .setDescription('You cannot be verified again')
            .setFooter(footer)
            return message.author.send( {embed: embed});
        }
    }
 

 
});
 
Client.login(Token)
