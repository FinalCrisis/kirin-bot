const {Client, RichEmbed} = require('discord.js');
const bot = new Client();

const token = 'NzA1NDI4NDQwNTY3Nzc1MzEy.XqsVVw.J5lh9A4McV18W9XP0IovHp-iQNA';

//Delimitador
const PREFIX = '$';

var version = '1.0.1';
var dinero = '50 euros';

bot.on('ready', () =>{
    console.log('Kirin esta listo y atento para el servicio');
    bot.user.setActivity('la Crisis Final', { type: 'WATCHING'}).catch(console.error);
})

//Respuesta a la persona que escribe
bot.on('message', msg=>{
    if(msg.content === "Hola Kirin"){
        msg.reply('Bienvenid@, disfruta de tu aventura en Final Crisis');
    }

})

//Respuesta en el canal
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
        message.channel.sendMessage('pong');
            break;
        case 'website':
            message.channel.sendMessage('final crisis');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage(version);
            }else{
                message.channel.sendMessage('Necesito mas parámetros');
            }
        break;
        case 'clear':
        if(!args[1]) return message.reply('Error, segundo argumento')
        message.channel.bulkDelete(args[1]);
        break;
    }
})

//Para usar la misma linea en los embed poner , true al final.
bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case '2din':
            const embed = new Discord.RichEmbed()
            .setTitle('Dinero')
            .addField('Jugador', message.author.username)
            .addField('Deudas del jugador')
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre')
            message.channel.sendEmbed(embed);
        break;
    }
})

//Comando dinero
bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'dinero':
            if(!message.member.roles.find(r => r.name === "patata")) return message.channel.send('No puedes acceder a esa información, no seas travieso')
            const embed = new Discord.RichEmbed()
            .setTitle('Dinero')
            .addField(dinero, message.author.username)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre')
            message.channel.sendEmbed(embed);
        break;
    }
})
//Comando ayuda
bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ayuda':
            const Embed =new RichEmbed()
            .setTitle("Ayuda")
            .setColor(0xFF0000)
            .setDescription("Por favor, aguarda un segundo, estamos avisando al master para contactar contigo")

            message.author.send(Embed)
            message.username
        break;
    }
})

//Reply Carballo
bot.on('message', msg=>{
    if(msg.content === "carballo" || msg.content === "Carballo" || msg.content === "carba"){
        msg.reply('Vaya soplagaitas es ese tal Carballo');
    }

})

//Reply Dani
bot.on('message', msg=>{
    if(msg.content === "dani" || msg.content === "Dani" || msg.content === "Daniel"){
        msg.reply('Ese medico guapoooooo! <3');
    }

})

//Reply Mengueche
bot.on('message', msg=>{
    if(msg.content === "sebas" || msg.content === "Sebas" || msg.content === "mengueche"){
        msg.reply('Ave!! O todopoderoso y magnánimo creador');
    }

})

//Reply Belleza
bot.on('message', msg=>{
    if(msg.content === "Quien es el mas guapo de todo discord?" || msg.content === "Quién es el mas guapo de todo discord?" || msg.content === "Quien es la mas guapa de todo discord?"){
        msg.reply('Eres tu bellezón ;)');
    }

})

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case "combate":
            const patata = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("Comandos de combate")
            .setDescription("Introduce los parámetros de combate")

            if(!args[1]){
                message.channel.send(patata);

            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send(msgArgs).then(messageReaction => {
                message.channel.sendMessage('Atacar | Habilidades | Objetos | Huir');
                messageReaction.react("⚔️");
                messageReaction.react("📖");
                messageReaction.react("🛠");
                messageReaction.react("🏃‍♂️");
            })
        break;
    }
});

client.login(process.env.BOT_TOKEN);
bot.login(token);
