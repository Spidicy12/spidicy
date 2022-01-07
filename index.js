const Discord = require('discord.js')
const bot = new Discord.Client();
const fs = require("fs")
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log("bot is activated")

    fs.readdir('./commands', (err, files) => {
        if (err) return console.log(err);
        let jsfile = files.filter (f => {f.split(".").pop() == 'js'})

        if (jsfile.length == 0) {return console.log("could not find any commands in this file!")}

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`)
            bot.commands.set(props.help.name, props)
        })
    })
     
bot.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    let prefix = 'c!'
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    if (cmd == 'hello') {
        let member = message.mentions.members.first();
        if(member) { message.channel.send('gooday mate');} else {
            message.channel.send(`sup ${member.user.tag}`);
        }  

    if (cmd == 'shrek') {
        let member = message.mentions.members.first();
        if(member) {message.channel.send('https://www.imdb.com/title/tt0126029/mediaindex/?ref_=tt_mv_close');} else {
            message.channel.send(`yo whats going on ${member.user}`);
        }

    if (cmd == 'urdumb') {
        let member = message.mentions.members.first();
        if(member) {message.channel.send('wow bet you think your the funniest man alive huh');}   
    }

    if (cmd == 'rickroll'){
        let member = message.mentions.members.first();
        if(member) {message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');}
    }

    if (cmd == ''){
        let member = message.mentions.members.first();
        if(member) {message.channel.send('WWWWHHHHHHAAATTTT');}
    }

    }

    
})
})
bot.login('OTAyNzY1NzYwODgyMDQ0OTM4.YXjMIQ.3XHbAOwr-40Yjpv9g38i5MKFaqY')