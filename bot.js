const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.reply('hi mother fuckers :D');
  	}
});

client.on('message', message => {
    if (message.content === 'i need help') {
    	message.reply('For what ?');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
