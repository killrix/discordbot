const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {console.log(`Logged in as ${client.user.tag}!`);});
client.on('guildMemberAdd', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if (!channel) return;
	channel.send(`Welcome to the club ${member}!`);
});

client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find(ch => ch.name === 'general');
	if (!channel) return;
	channel.send(`It's very sad to say good bye ${member}.`);
});
client.login(auth.token);