const {Client, RichEmbed} = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '$';

bot.on('message', message => {
    if (message.content === "Hola Kirin"){
        message.reply('Bienvenid@, disfruta de tu aventura en Final Crisis');
    }

})

bot.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity('la Crisis Final', { type: 'WATCHING'}).catch(console.error);
});

bot.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

bot.login(process.env.BOT_TOKEN);
