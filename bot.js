const {Client, RichEmbed} = require('discord.js');
const client = new Discord.Client();

const PREFIX = '$';

client.on('message', message => {
    if (message.content === "Hola Kirin"){
        message.reply('Bienvenid@, disfruta de tu aventura en Final Crisis');
    }

})

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity('la Crisis Final', { type: 'WATCHING'}).catch(console.error);
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);
