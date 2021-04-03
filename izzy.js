const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./json/izzy.json")
const { readdirSync } = require('fs');

const { join } = require('path');
const fetch = require("node-fetch");
client.commands= new Discord.Collection();
const { chatBot } = require('reconlx') 
const prefix = 'iz';
//You can change the prefix if you like. It doesn't have to be !


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('Izzy is Ready!');
    client.user.setStatus(`idle`)
});


let stats = {
    serverID: '799287582873747517',
    total: "827772960068075531",
    member: "827773314964914217",
    bots: "827772960068075531"
}



client.on('guildMemberAdd', member => {
    
})

client.on('guildMemberRemove', member => {


})

client.on("message", async message => {


    if(message.author.bot) return;
    if(message.channel.type === 'dm'){
      client.users.cache.get(config.ownerID).send(`${message.author.username}: ${message.content}`);
        

    }

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})



client.login(config.token)