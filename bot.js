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
    if (message.content === 'string dont work') {
    	message.reply('dm @abrahamatheus for a solution');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
