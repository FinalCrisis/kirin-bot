const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
const Discord = require("discord.js");

const token = 'NzA1NDI4NDQwNTY3Nzc1MzEy.XqxifQ.Hxh7DaY6jlhkegQskxDlojgpUlE';

//DELIMITADOR====================================
const PREFIX = '$';

//VARIABLES GENERALES============================
var version = '1.0.1';
var dinero = '50 euros';

//VARIABLES ROLES================================
var rolDani = 'D';
var rolCarba = 'C';
var rolLucia = 'L';
var rolPablo = 'P';
var rolOscar = 'O';
var rolCamilo = 'Ca';
var rolBrais = 'B';
var rolSebas = 'S'























//VARIABLES ECONOMÍA ============================
var capitalDani = 180;
var capitalCarba = 80;
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
bot.on('message', message => {
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case 'dinero':
            const dinDani = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalDani, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinCarba = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalCarba, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinLucia = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalLucia, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinPablo = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalPablo, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinOscar = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalOscar, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinCamilo = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalCamilo, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinBrais = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalBrais, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            const dinSeb = new Discord.RichEmbed()
            .setTitle('DINERO')
            .addField('**JUGADOR**', "<@" + message.author.id + ">")
            .addField('**Cantidad**', capitalSebas, true)
            .addField('**Moneda**', 'Rublos', true)
            .addField('Juego', message.guild.name)
            .setColor(0xfdd450)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Intenta ahorrar siempre, consejo de Kirin', bot.user.displayAvatarURL)

            if(message.member.roles.find(r => r.name === rolDani))
            message.channel.sendEmbed(dinDani);
            if(message.member.roles.find(r => r.name === rolCarba))
            message.channel.sendEmbed(dinCarba);
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

bot.login(token);
