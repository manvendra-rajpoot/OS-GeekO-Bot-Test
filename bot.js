const Discord = require('discord.js');
require ('dotenv').config();

const client = new Discord.Client({
    //for action before logged in
    partials: ['MESSAGE'],
});

const BOT_PREFIX = '!', MOD_ME_COMMAND = 'mod-me';
const url = 'https://codecau.se/yt';

function modUser(member){
    member.roles.add('784299354982580244'); 
}

client.on('ready', () => {
    console.log('Your Bot is ready to go (ON FIRE)!');
});

client.on('message', (msg)=> {
    if (msg.content === 'ping') {
        // msg.reply('PONG!');
        msg.channel.send("Welcome to OS Hub!");
    }

    if (msg.content == 'i love os'){
        msg.react("❤️");
    }

    if (msg.content === 'help'){
        msg.react("💁🏻");
        msg.channel.send(`For Getting Started with $OPEN SOURCE$ visit ${url}`);
    }

    if (msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member);
    }
});

client.on('messageDelete', (msg)=> {
    msg.channel.send('You deleted the message');
});

client.login(process.env.BOT_TOKEN);