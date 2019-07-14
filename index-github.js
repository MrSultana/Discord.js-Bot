const Discord = require('discord.js');
const bot = new Discord.Client();
// Bot token
const token = '';
// Prefix constant
const PREFIX = '*';
// Version variable
var version = '0.1'
// Author constant
const author = 'Sultana'

bot.on('ready', () =>{
    console.log('Bot is online!')
})
// Main code for sending messages to channel
bot.on('message', message=>{ 
    
    let arg = message.content.substring(PREFIX.length).split(" ") // Code for setting the prefix

    switch(arg[0]){
        case 'ping':
            message.channel.send('pong!');
            break;
        case 'website':
            message.channel.send('https://jojo.fandom.com/wiki/Main_Page');
            break;
        case 'info':
            if(arg[1] === 'version'){
                message.channel.send('Bot Version - ' + version)
            }else if(arg[1] === 'author'){
                message.channel.send(author)
            }
            else{
                message.channel.send('Invalid Argument')
            }
            break;
        case 'clear': // Code for clearing messages
            if(!arg[1]) return message.reply('Error, please define a second argument')
            message.channel.bulkDelete(arg[1]);
            break;
        case 'embed': // Code for embeds
            const embed = new Discord.RichEmbed()
            .setColor(0x8d1e1e)
            .setTitle('User Information')
            .addField('Player Name', message.author.username, true)
            .addField('Bot Version', version, true)
            .addField('Current Server', message.guild.name)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Bot made by sultana')
            message.channel.send(embed);
            break;
    
        }
    }
)

// Logs in the bot using its token
bot.login(token);
