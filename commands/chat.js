
const { chatBot } = require('reconlx') 




const Discord = require('discord.js')

module.exports = {
    name: "zy",
    description: "test command",

    async run (client, message, args) {

      chatBot(message, args.join(" "))
    }
}













//   