const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
const Discord = require("discord.js");


//DELIMITADOR====================================
const PREFIX = 'invocar ';

//VARIABLES GENERALES============================
var version = '1.1.2';
var prueba = 10;

//VARIABLES ROLES================================
var rolDani   = 'D';
var rolAdrian = 'A';
var rolLucia  = 'L';
var rolPablo  = 'P';
var rolOscar  = 'O';
var rolCamilo = 'C';
var rolBrais  = 'B';
var rolSebas  = 'S';
























//VARIABLES ECONOMÍA ============================
var capitalDani = 180;
var capitalAdrian = 80;
var capitalLucia = 520;
var capitalPablo = 10;
var capitalOscar = 14;
var capitalCamilo = 115;
var capitalBrais = 120;
var capitalSebas = 390;
//===============================================

bot.on('ready', () =>{
    console.log('Kirin esta listo y atento para el servicio');
    bot.user.setActivity('la Crisis Final', { type: 'WATCHING'}).catch(console.error);
})

//Respuesta a la persona que escribe
//bot.on('message', msg=>{
//    if(msg.content === "Hola Kirin"){
//        msg.reply('Bienvenid@, disfruta de tu aventura en Final Crisis');
//    }
//
//})

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
bot.on('message', message => {
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'dinero':
            const dinDani = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalDani, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinAdrian = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalAdrian, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinLucia = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalLucia, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinPablo = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalPablo, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinOscar = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalOscar, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinCamilo = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalCamilo, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinBrais = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalBrais, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinSeb = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalSebas, true)
            .addField('**Divisa**', 'moneda', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            if(message.member.roles.find(r => r.name === rolDani))
            message.channel.sendEmbed(dinDani);
            if(message.member.roles.find(r => r.name === rolAdrian))
            message.channel.sendEmbed(dinAdrian);
            if(message.member.roles.find(r => r.name === rolLucia))
            message.channel.sendEmbed(dinLucia);
            if(message.member.roles.find(r => r.name === rolPablo))
            message.channel.sendEmbed(dinPablo);
            if(message.member.roles.find(r => r.name === rolOscar))
            message.channel.sendEmbed(dinOscar);
            if(message.member.roles.find(r => r.name === rolCamilo))
            message.channel.sendEmbed(dinCamilo);
            if(message.member.roles.find(r => r.name === rolBrais))
            message.channel.sendEmbed(dinBrais);
            if(message.member.roles.find(r => r.name === rolSebas))
            message.channel.sendEmbed(dinSeb);
        break;
    }
})

//Respuestas varias
bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case ('carballo' || 'pepe'):
            message.channel.sendMessage('Yo a ese soplagaitas no le invoco ni con un palo... místico/mágico');
            message.channel.sendMessage('https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946');
            break;
        case 'carba':
            message.channel.sendMessage('Yo a ese soplagaitas no le invoco ni con un palo... místico/mágico');
            message.channel.sendMessage('https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946');
            break;
        case 'adrian':
            message.channel.sendMessage('Yo a ese soplagaitas no le invoco ni con un palo... místico/mágico');
            message.channel.sendMessage('https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946');
            break;
        case 'Adrian':
            message.channel.sendMessage('Yo a ese soplagaitas no le invoco ni con un palo... místico/mágico');
            message.channel.sendMessage('https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946');
            break;
        case 'Carballound':
            message.channel.sendMessage('Yo a ese soplagaitas no le invoco ni con un palo... místico/mágico');
            message.channel.sendMessage('https://tenor.com/view/inauguration-cnn2017-donald-trump-finger-wag-no-gif-7576946');
            break;
        case 'dani':
            message.channel.sendMessage('A ese ya le llamaré si me hernio respondiendo vuestros comandos, hijos de puta');
            message.channel.sendMessage('https://tenor.com/view/transport-transfer-code80-ems-ambulance-gif-15120846');
            break;
        case 'daniel':
            message.channel.sendMessage('A ese ya le llamaré si me hernio respondiendo vuestros comandos, hijos de puta');
            message.channel.sendMessage('https://tenor.com/view/transport-transfer-code80-ems-ambulance-gif-15120846');
            break;
        case 'Dani':
            message.channel.sendMessage('A ese ya le llamaré si me hernio respondiendo vuestros comandos, hijos de puta');
            message.channel.sendMessage('https://tenor.com/view/transport-transfer-code80-ems-ambulance-gif-15120846');
            break;
        case 'Daniel':
            message.channel.sendMessage('A ese ya le llamaré si me hernio respondiendo vuestros comandos, hijos de puta');
            message.channel.sendMessage('https://tenor.com/view/transport-transfer-code80-ems-ambulance-gif-15120846');
            break;
        case 'brais':
            message.channel.sendMessage('Yo con troskistas no me relaciono, gracias');
            message.channel.sendMessage('https://tenor.com/view/trotsky-gif-7577575');
            break;
        case 'Brais':
            message.channel.sendMessage('Yo con troskistas no me relaciono, gracias');
            message.channel.sendMessage('https://tenor.com/view/trotsky-gif-7577575');
            break;
        case 'pablo':
            message.channel.sendMessage('A ese ya le llamaré si acabo teniendo problemas legales respondiendo vuestros comandos, hijos de puta');
            message.channel.sendMessage('https://tenor.com/view/not-guilty-guilty-judge-joe-brown-judge-joe-brown-gif-5319316');
            break;
        case 'Pablo':
            message.channel.sendMessage('A ese ya le llamaré si acabo teniendo problemas legales respondiendo vuestros comandos, hijos de puta');
            message.channel.sendMessage('https://tenor.com/view/not-guilty-guilty-judge-joe-brown-judge-joe-brown-gif-5319316');
            break;
        case 'camilo':
            message.channel.sendMessage('https://tenor.com/view/cigala-cortarollos-club-platino-gif-11755976');
            break;
        case 'Camilo':
            message.channel.sendMessage('https://tenor.com/view/cigala-cortarollos-club-platino-gif-11755976');
            break;
        case 'lucia':
            message.channel.sendMessage('Voluntad incrementada +1000 por tener que aguantar al revienta-bazos de Adrian');
            message.channel.sendMessage('https://tenor.com/view/pulp-fiction-uma-thurman-smoking-lighting-cigar-gif-12079397');
            break;
        case 'Lucia':
            message.channel.sendMessage('Voluntad incrementada +1000 por tener que aguantar al revienta-bazos de Adrian');
            message.channel.sendMessage('https://tenor.com/view/pulp-fiction-uma-thurman-smoking-lighting-cigar-gif-12079397');
            break;
        case 'Lucía':
            message.channel.sendMessage('Voluntad incrementada +1000 por tener que aguantar al revienta-bazos de Adrian');
            message.channel.sendMessage('https://tenor.com/view/pulp-fiction-uma-thurman-smoking-lighting-cigar-gif-12079397');
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

bot.on('message', message =>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'mengueche':
            const Embed =new RichEmbed()
            .setTitle("EH TU")
            .setColor(0xFF0000)
            .setDescription("Por favor, respeta el nombre de mi creador, no lo menciones a la ligera")

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

//Reply Carballo
bot.on('message', msg=>{
    if(msg.content === "buenos dias kirin" || msg.content === "buenos días kirin" || msg.content === "bu"){
        msg.reply('Buenos días a ti también! :kissing_heart:');
    }

})

//ADIOS KIRIN
bot.on('message', msg=>{
    if(msg.content === "Adios kirin" || msg.content === "Adios Kirin" || msg.content === "Adios Kirin!" || 
    msg.content === "Adiós kirin" || msg.content === "Adiós Kirin" || msg.content === "Adiós Kirin!" || 
    msg.content === "adios kirin" || msg.content === "adios Kirin" || msg.content === "adios Kirin!" || 
    msg.content === "adiós kirin" || msg.content === "adiós Kirin" || msg.content === "adiós Kirin!"){
        msg.reply('Hasta luego! Espero verte conectado pronto :raising_hand:');
    }

})

//HOLA KIRIN
bot.on('message', msg=>{
    if(msg.content === "Hola kirin" || msg.content === "Hola Kirin" || msg.content === "Hola Kirin!" || 
    msg.content === "hola kirin" || msg.content === "hola Kirin" || msg.content === "hola Kirin!"){
        msg.reply('Hola! Espero que estés bien :relaxed:');
    }

})

//CONSOLA CHAT
let y = process.openStdin()
y.addListener("data", res => {
    let x = res.toString().trim().split(/ +/g)
    bot.channels.get("704418748047818884").send(x.join(" "));
})

//BIEN Y TU

bot.login(token);
