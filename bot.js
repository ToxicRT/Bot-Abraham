const Discord = require('discord.js');
const client = new Discord.Client();

//require all dependencies

client.on('ready', () => {
    console.log('Ready D:!');    
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.reply('hi mother fucker :D');
  	}
});

client.on('message', message => {
    if (message.content === 'i need help') {
    	message.reply('For what ?');
  	}
});

client.on('message', message => {
    if (message.content === 'string don't work') {
    	message.reply('dm @AbrahaMatheus#9020 he will give you a solution :D');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
