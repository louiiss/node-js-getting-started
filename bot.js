const Discord = require('discord.js');
const client = new Discord.Client();

const prefix ="-"//:3 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`?????? ?? ??????? ? ????? ????.`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('+[-----------------------------------------------------------------]+')
  console.log(`[Start] ${new Date()}`);
  console.log('+[-----------------------------------------------------------------]+')
  console.log('')
  console.log('+[------------------------------------]+');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('+[------------------------------------]+')
  console.log('')
  console.log('+[------------]+')
  console.log(' Bot Is Online')
  console.log('+[------------]+')
  console.log('')
  console.log('')
});

 client.on("message", async message => {

if(!message.member.hasPermission("ADMINISTRATOR")) {
  if(/(?:https?:\/)?discord(?:app.com\/invite|.gg)/gi.test(message.content)) {
      message.delete();
      let inviteEmbed = new Discord.RichEmbed()

      .setDescription("__**Auto Suppression**__")
      .addField("> Envoyé par :", `<@${message.author.id}> avec l'ID ${message.author.id}`)
      .addField("> Suppression dans :", message.channel)
      .addField(`> Raison :`, `Envoie une invitation discord : ${message.content}`)
      .setColor(violet);

      let incidentchannel = message.guild.channels.find(`name`, "log");
      if(!incidentchannel) return message.channel.send(":no_entry: Je n'est pas trouvé le channel 'logs' !");
      return incidentchannel.send(inviteEmbed);
  }
}
});

const adminprefix = "#";
const devs = ['311441134717108224', '311441134717108224'];
 

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'ply')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
  if (message.content === (adminprefix + "Percie")) {
  message.guild.leave();        
} else  
if (message.content.startsWith(adminprefix + 'wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else 
if (message.content.startsWith(adminprefix + 'ls')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
} else     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : Done :>`)
return message.reply("**You Can't Change Your Name ,Only After Two Hours :>**");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : ?? ???? ???? ?????`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
}
  if(message.content === adminprefix + "restart") {
    if (!devs.includes(message.author.id)) return;
        message.channel.send(`:warning:? **Bot restarting by ${message.author.username}**`);
      console.log("\n\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(`?? Bot restarting... ??`);
      console.log("===============================================\n\n");
      client.destroy();
      child_process.fork(__dirname + "/bot.js");
      console.log(`Bot Successfully Restarted`);
  }

});







client.login(process.env.MzExNDQxMTM0NzE3MTA4MjI0.DtXkdQ.wXwWjKdNQURqsGaKctFl3Tc-MxA);
