const Discord = require('discord.js')
const config = require("../json/izzy.json")
module.exports = {
    name: "calc",
    description: "simple calculator",

    async run (client, message, args) {
      let signos = ["*","/","+","-","x","~"];

if(!args[0]) return message.channel.send('And... what do you want me to calculate?')
if(isNaN(args[0])) return message.channel.send('Numbers are only used, except for the signs, which are \`(+, *, -, /, x, ~)\`')

if(!signos.some(x => x.toLowerCase(message.content))) return message.channel.send('Debes de colocar los signos! \`(+, *, -, /, x, ~)\`')

if(!args[2]) return message.channel.send('And... the second number?')
if(isNaN(args[2])) return message.channel.send('Numbers are only used, except for the signs, which are \`(+, *, -, /, x, ~)\`')

let signo = args[1];
if(signo === 'x'){
  signo = '*'
}

if(signo === '~'){
  signo = '/'
}

try {
const resultado = eval(args[0]+signo+args[2]);

const calcula = new MessageEmbed()
.setTitle('Calculator!')
.setColor('RANDOM')
.addField("Input", '```js\n'+args[0]+' '+signo+' '+args[2]+'```')
.addField('Exit', '```js\n'+await resultado+'```')
.setFooter('Ordered by: '+message.author.tag)

return message.channel.send(calcula);

} catch (e) {
const err = new MessageEmbed()
.setDescription('Oh no! An error has occurred\n\n`'+e.message+'`')
.setColor('RANDOM')
return message.channel.send(err);
} 
    }}