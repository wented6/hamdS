const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['321960094101143552'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('!D')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(` < **${argresult} \** `)
} else


client.login(process.env.B);
