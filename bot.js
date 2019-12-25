const Discord = require('discord.js');
const client = new Discord.Client();

//require all dependencies

client.on('ready', () => {
    console.log('¡Listo para usar!');    
});

client.on('message', message => {
    if (message.content === 'Hello') {
    	message.reply('Hi:D'); // Respondera al mensaje
  	}
});

client.on('message', message => {
    if (message.content === 'Help') {
    	message.reply('Command in progress.');
  	}
});

client.on('message', message => {
    if (message.content === 'string dont work') {
    	message.reply('Send dm @abrahamatheus for a solution');
  	}
});

// Con esto se iniciara sesion al bot 
client.login(process.env.BOT_TOKEN);
