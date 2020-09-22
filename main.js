const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '*';

client.once('ready', () => {
    console.log('Lane Is Online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    }
});


client.on('message', message=>{

    let args = message.content.slice(prefix.length).split(' ');

    switch(args[0]){
        case 'gi':
            const embed = new Discord.MessageEmbed()
            .setTitle('General Information')
            .addField('Developer Info', 'This bot was made as a bot that includes bot suggestions. you guys request a command or embed and we might add it to this bot. there will be 2 other bots with different perks like this. these 3 bot will form the bot group "cats". Thank you for reading this and enjoy!')
            message.channel.send(embed);
        break;
    }

})


client.login(process.env.BOT_TOKEN)
