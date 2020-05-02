const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '$';

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity('la Crisis Final', { type: 'WATCHING'}).catch(console.error);
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

//Hola

client.login(process.env.BOT_TOKEN);
