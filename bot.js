const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['321960094101143552'];


client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.sggggggggggggggggggggg')) {
client.user.setActivity(argresult, {type:'Playing'});
    message.channel.send(` تم تغير البلاينق ألى **${argresult} \** `)
} else 
if (message.content.startsWith('!D')) {
  client.user.setGame(argresult, "https://www.twitch.tv/meercy");
   message.channel.send(` تم تغير الستريمنق ألى **${argresult} \** `)
} else
if (message.content.startsWith('.sggggggggggggggggggggg')) {
   client.user.setActivity(argresult, {type:'Listening'});
    message.channel.send(` تم تغير اللسننق ألى **${argresult} \** `)
} else
if (message.content.startsWith('.sggggggggggggggggggggg')) {
   client.user.setActivity(argresult, {type:'Watching'});
    message.channel.send(` تم تغير الواتشنق ألى **${argresult} \** `)
}
});

client.login(process.env.B);
