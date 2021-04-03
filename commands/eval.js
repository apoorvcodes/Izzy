const Discord = require('discord.js')
const config = require("../json/izzy.json")
module.exports = {
    name: "eval",
    description: "evals your code",

    async run (client, message, args) {

      if(message.author.id !== config.ownerID) return;
      try {
        const code = args.join(" ");
        let evaled = eval(code);
  
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
  
        message.channel.send((evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${(err)}\n\`\`\``);
      }
    

     
    }
}