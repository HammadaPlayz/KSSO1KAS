const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | ${client.guilds.size} Servers  | NoobBot 0.2  `,"http://twitch.tv/Mohamed192837465")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.login(process.env.BOT_TOKEN);






const Canvas = require("canvas"); //npm i canvas
const moment = require("moment") //npm i moment
// const Canvas = require("canvas-prebuilt"); // اذا كنت وندوز
// npm i canvas-prebuilt

client.on("message", message => {
 
  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'New User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };
 
 
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on('message', message => {
 
    if(message.content.startsWith('$rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});
 
client.on("message", (message) => {
  let men = message.mentions.users.first()
 
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;
if (message.content.startsWith('$credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}
 
if(message.content.startsWith("$daily")) {
  if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }
 
 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith('$credits ')) {
          if (!args[0]) {
            message.channel.send(`**$credits @name عدد**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**$credits @name عدد**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}
 
      });
 
      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })
 
    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith("$title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using Galaxy"
        if(!tit) {
            message.channel.send("**Usage: <title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok:`)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })
 
    client.on("message", message => {
  if (message.author.bot) return;
    if(!message.channel.guild) return;
if (message.content.startsWith("$profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();
 
    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;
 
      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "Galaxy User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("./hlcpro.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة
 
})
 
 
 
                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);
 
                        //ur name
                        ctx.font = 'bold 16px Arial'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 175) // احداثيات اسمك
 
                        //ur name
                        ctx.font = 'bold 16px Arial'; // حجم الخط و نوعه
                        ctx.fontSize = '40px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 151, 175) // احداثيات اسمك
 
                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري
 
                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 221, 159) // احداثيات النقاط
 
                        //Level
                        ctx.font = "bold 27px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 221, 118) // احداثيات اللفل
 
                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط
 
                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 197) // احداثيات النقاط
 
                        // REP
                        ctx.font = "bold 26px  Arial";
                        ctx.fontSize = "50px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 80,117)
 
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
 
ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 116, 82, 72, 72);
 
message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});






                  










client.on('message', message => {
     if (message.author.bot) return;
       if (message.content ===  "$help") {
           message.channel.send('**سوف يتم ارسال اوامر البوت علخاص **')
           
 
 message.author.sendMessage(`
-=-=-=-=-  :octagonal_sign:  اوامر الادميه :octagonal_sign:  -=-=-=-=-
$mutechannel | لتقفيل الشات 
$unmutechannel | لفتح الشات
$clear | يمسح الشات
$bcrole  | بورد كاست لرتبه معينه
$kick  | اعطاء العضو كيك
$ban  | اعطاء العضو بان
$mute  | اعطاء العضو ميوت
$unmute  | فك الميوت من العضو
$bc-user  | خاصيه البورد كاست لشخص واحد فقط
-=-=-=-=-  :speaking_head:   اوامر عامه :speaking_head:   -=-=-=-=-
$avatar | لرئيه صورتك
$server | لرئيه معلومات عن السيرفر
$id | لرئيه معلومات عن حسابك
$invite | لاعطائك رابط دعوه البوت
$emoje-text | يكبت الكلام مالتك بل يموجي
$punch | يعطي شخص كف
$day  | يعرض لك الوقت والتاريخ
$stim  | لصنع منبه
$members | عدد الاعضاء وحالتهم
$rep |تقييم
$daily| المصروف
$profile | بروفايل
$credit | كريدت
$ping | بنق
$angas | انجاز ماينكرفتي
-=-=-=-=-  :video_game:    اوامر الاعاب :video_game:    -=-=-=-=-
$صراحه
$كت تويت
$لو خيروك
$rps [حجر - ورقه - مقص]
$عقاب 
$مريم 
$فكك 
$عواصم
سيرفر السبورت : https://discord.gg/9bYFkab
`);
       }
});

client.on('message', msg => {
  if (msg.content === '$owner') {
    msg.reply('اونر البوت mohamed192837465#7033');
       }
});



client.on("message", message => {
      if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Pong!:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('$bcall')){
 if(!message.author.id === '452292328569307137') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});




const sql = require("sqlite");
client.on("message", async message => {
    if (message.content.startsWith(prefix + "angaz")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**اكتب محتوي الانجاز**");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
	}
});
 







client.on('message', message => {
     if(message.content.startsWith(prefix + "bc-user")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("Noobbot", `تبي من يجيه الرساله؟ ${message.author.tag}?`)
            .setFooter(`NoobBot`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("Noobbot", `تبي الرساله وش؟ ${user.tag}?`)
        return message.channel.send({embed});
    }
    embed.addField("NoobBot", `تم بنجاح${user.tag}!`)
        .setFooter(`Noob Bot :>`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("جاتك رساله", `**${reason}**`)
        .setFooter(`من ${message.author.tag}.`);
    user.send({embed: embed1});
}
});

































      client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
💚 online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
❤  dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
💛  idle:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
💠   membersCount:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
💡 bots: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      }); 















client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


















client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`Kicked!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});




































const ms = require("ms");
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'stim')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send("يجب كتابه الفتره الزمنيه");
}
if(args[0] <= 0){
  return message.channel.send("يجب كتابه الفتره الزمنيه");
}
message.channel.send(":white_check_mark: تم " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`الوقت انتها, ${ms(ms(Timer), {long: true})}` + message.author.toString())
}, ms(Timer));
} 
})













client.on('message', message => {   
if (message.author.boss) return;
var prefix = "$";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}









if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});























client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "bcrole")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنه رتبه معينه");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرسالة :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});











client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | منور يا خرافي' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`في احد خرج :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`نتمنا انك استمتعت قبل الخروج من السيرفر :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== NoobBot ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    }) 
	
	
	
	
	
	
	
	
	
	

	
	
	
	
	
	
	

	

client.on('message', message => {

if (message.content.startsWith(prefix + 'فكك')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fakk.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكيك الجمله **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("فكك  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**قم بتفكيك الجمله : ${item.type}**`) // ${item.type} = السؤال

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: *لم يقم احد بكتابه الكلمه مفككه صحيح**`);
            console.log(`[Typing] Error: No one type the word.`);
          })
        })
    })
}
});













			



	



const fs = require('fs')
	
client.on('message', message => {
if (message.content.startsWith(prefix + 'عواصم')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./3wasem.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لتوجد عاصمة **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | NoobBot", 'https://cdn.discordapp.com/avatars/439427357175185408/3eb163b7656922ebc9e90653d50231f1.png?size=2048')
    .setDescription(`**قم بكتابة عاصمة : ${item.type}**`) // ${item.type} = السؤال

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`);
        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لم يقم أحد بكتابة العاصمة بالوقت المناسب**`);
            console.log(`[Typing] Error: No one type the word.`);
          })
        })
    })
}
});
	
	
















	
	
	
	
	
	
	
	













client.on('message',  (message) => {
        if(message.content.startsWith('$punch')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} عطاك كففف ${user.username}! 👊`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});




















client.on('message', msg => {
  if (msg.content === '$invite') {
    msg.reply('https://discordapp.com/oauth2/authorize?client_id=460491129062948874&permissions=2080374975&scope=bot');
       }
});






client.on("message", message => {
  var prefix = "$";

          var args = message.content.substring(prefix.length).split(" ");
          if (message.content.startsWith(prefix + "clear")) {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
      var msg;
      msg = parseInt();
    
    message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
    message.channel.sendMessage("", {embed: {
      title: "Done | تــم",
      color: 0x06DF00,
      description: "تم مسح الرسائل بنجاح",
      footer: {
        text: "NoobBot"
      }
    }}).then(msg => {msg.delete(3000)});
                        }

   
});





client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'day')) {
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
}
}); 











client.on('message', message => {

    if (message.content === "$mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//Mohamed192837465
if (message.content === "$unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});
























































































  client.on('message', message => {
    if (message.content.startsWith(prefix + "خواطر")) {
                 if(!message.channel.guild) return message.reply('** This command only for servers**');
   var embed = new Discord.RichEmbed()
   .setColor('RANDOM')
 
    .setThumbnail(message.author.avatarURL) 
  .addField('NoobBot' ,
   `${secreT[Math.floor(Math.random() * secreT.length)]}`)
   message.channel.sendEmbed(embed);
   console.log('[id] Send By: ' + message.author.username)
     }
 });












  
const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
	var prefix = "$"
if (message.content.startsWith(prefix + "كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});

const secreT = [
"**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
"**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
"**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
"**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
"**ان تعالج ألمك بنفسك تلك هى القوة**.", 
"**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
"**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
"**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
"**المناقشات العقيمة لا تنجب افكارا**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
"**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]

















const zead = [
     '*** انا اسمي مريم ***',
     '*** مرحباَ ماهو اسمك ؟ ***',
     `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
     '*** هل تود مساعدتي ؟ ***',
     '*** لماذا هل انت قاسي القلب ؟ ***',
     '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** هل تود مساعدتي ؟ ***',
     '*** واو اشكرك انك شخصاَ رائع ! ***',
     '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
     '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
     '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
     '*** هيا اذاَ ***',
     '*** اود ان اسئلك سؤال ونحن في الطريق ***',
     '*** هل تراني فتاة لطيفة ام مخيفة ***',
     '*** اشكرك !  ***',
     '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
     '*** هل انت جاهز ؟ ***',
     '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
     '*** هل تود ان تراهم الان ***',
  '*** انا لست الحوت الازرق كما يدعون ***',
     '*** انا لست كاذبة صدقني***',
     '*** لماذا ارى في عينيك الخوف ؟ ***',
     '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
     '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
     '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
     '*** لماذا لم تدخل الغرفة ؟ ***',
     '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
     '*** لن تخرج حتى اعود لك بعد قليل ***',
     '*** المفتاح معك ! اكتب .مريم  ***',
     '*** مفتاح احمر , هل حصلت عليه ؟ ***',
     '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
     '*** مفتاح اسود . هل حصلت عليه ؟ ***',
     '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
     '*** لقد عادت من جديد الى المنزل ***',
     '*** لا تصدر اي صوت ! ***',
     '*** مريم : لقد عدت ***',
     '*** مريم : يا ايها المخادع اين انت ***',
     '*** مريم : اعلم انك هنا في المنزل ***',
     '*** مريم : ماذا تريد ان تسمع ***',
     '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
     '*** احد ما خرج من المنزل ***',
     '*** انتظر الجزء الثاني ساعدنا وانشر السيرفر  ***'
  ]
   client.on('message', message => {
	   	var prefix = "$"
   if (message.content.startsWith(prefix + 'مريم')) {
    var mariam= new Discord.RichEmbed()
    .setTitle("NoobBot")
    .setColor('RANDOM')
    .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
    .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
     message.channel.sendEmbed(mariam);
     message.react("??")
    }
  });











  const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
	  	var prefix = "$"
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("NoobBot")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });
  

 
  


  const kingmas = [
    '*** منشن الجميع وقل انا اكرهكم. ***',
 '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
    '***     تصل على الوالده  و تقول لها  احب وحده.***',
    '*** تتصل ع��ى شرطي تقول له عندكم مطافي.***',
    '*** صور اي شيء يطلبه منك الاعبين.***',
    '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
    '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
    '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
    '***  تروح عند شخص تقول له احبك. ***',
    '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
    '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
    '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
    '*** ذي المرة لك لا تعيدها.***',
    '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
    '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
    '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
    '***سو مشهد تمثيلي عن مصرية بتولد.***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
    '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
    '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
    '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
 ]
  client.on('message', message => {
	  	var prefix = "$"
  if (message.content.startsWith(prefix + 'حكم')) {
   var mariam= new Discord.RichEmbed()
   .setTitle("NoobBot")
   .setColor('RANDOM')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });



















const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  |  التقيت الناس مع وجوهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  |  أنا ��خص ضعيف عندما؟',
            'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
            'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
            'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
            'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
            'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
            'صراحه  |  أشجع شيء حلو في حياتك؟',
            'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
            'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
            'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  |  نظرة و يفسد الصداقة؟',
            'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
            'صراحه  |  شخص معك بالحلوه والمُره؟',
            'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص ��م ترى ذلك ضعف؟',
            'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
            'صراحه  |  وش تتمنى الناس تعرف عليك؟',
            'صراحه  |  ابيع المجرة عشان؟',
            'صراحه  |  أحيانا احس ان الناس ، كمل؟',
            'صراحه  |  مع مين ودك تنام اليوم؟',
            'صراحه  |  صدفة العمر الحلوة هي اني؟',
            'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
            'صراحه  |  صفة تحبها في نفسك؟',
            'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه  |  ‏تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
            'صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  |  هل تعتقد ان حظك سيئ؟',
            'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
            'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
            'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
            '‏صراحه | هل تحب عائلتك ام تكرههم؟',
            '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
            '‏صراحه  |  هل خجلت من نفسك من قبل؟',
            '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
            '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
            '‏صراحه  |  هل تعرضت إلى موقف مُ��رج جعلك تكره صاحبهُ؟',
             '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
            '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
            '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
            'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
            '‏صراحه  |  ما هو عمرك الحقيقي؟',
            '‏صراحه  |  ما اكثر شي ندمن عليه؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
       ]
          client.on('message', message => {
			  	var prefix = "$"
        if (message.content.startsWith(prefix + 'صراحه')) {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
         var client= new Discord.RichEmbed()
         .setTitle("NoobBot")
         .setColor('RANDOM')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });
       
       
       const Za7f = [
           "**صورة وجهك او رجلك او خشمك او يدك**.",
           "**اصدر اي صوت يطلبه منك الاعبين**.",
           "**سكر خ��مك و قول كلمة من اختيار الاعبين الي معك**.",
           "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**صور اي شيء يطلبه منك الاعبين**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
           "**سو مشهد تمثيلي عن مصرية بتولد**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
           "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
           "**اتصل على امك و قول لها انك تحبها :heart:**.",
           "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
           "**قل لواحد ماتعرفه عطني كف**.",
           "**منشن الجميع وقل انا اكرهكم**.",
           "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
           "**روح المطبخ و اكسر صحن او كوب**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**قول لاي بنت موجود في الروم كلمة حلوه**.",
           "**تكلم باللغة الانجليزية الين يجي دورك م��ة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
           "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
           "**قول قصيدة **.",
           "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**اول واحد تشوفه عطه كف**.",
           "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
           "**تاخذ عقابين**.",
           "**قول اسم امك افتخر بأسم امك**.",
           "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
           "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
           "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
           "**تتصل على الوالده  و تقول لها خطفت شخص**.",
           "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
           "**����تصل على الوالده  و تقول لها  احب وحده**.",
             "**تتصل على شرطي تقول له عندكم مطافي**.",
             "**خلاص سامحتك**.",
             "** تصيح في الشارع انا  مجنوون**.",
             "** تروح عند شخص تقول له احبك**.",
         
       ]




    


    client.on('message', message => {
			var prefix = "$"
      if (message.content.startsWith(prefix + "عقاب")) {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL) 
    .addField('NoobBot' ,
     `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
     message.channel.sendEmbed(embed);
     console.log('[38ab] Send By: ' + message.author.username)
       }
   });
   
   

   var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
       client.on('message', message => {
           var args = message.content.split(" ").slice(1);
       if(message.content.startsWith(prefix + 'لو خيروك')) {
		   	var prefix = "$"
            var cat = new Discord.RichEmbed()
   .setImage(rebel[Math.floor(Math.random() * rebel.length)])
   message.channel.sendEmbed(cat);
       }
   });
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   





   
   
   
   
   
   
   






const den = [
      'على من يطلق المصدود ؟',
      'من النبي الذي كان يسمى بشرى',
      'من ادخل الخوارزمي في الإسلام ؟',
      'ما اسم القوم الذين لقوا سيدنا إسماعيل ووالدته عند بئر زمزم ؟ ',
      'من الذي عدلت شهادته شهادة الرجلين ؟',
      'ماذا تسمى الميته التي تقع من مكان مرتفع ؟',
      'ما هما الآيتان اللتان أعطيا النبي صلى الله عليه وسلم وهما من كنوز العرش ؟ ',
      ' من آخر من توفى من الصحابة ؟ ',
      'من الملقب بذي النورين ؟ ',
      'ما الفرق بين سندس وإستبرق ؟',
      'ما المقصود بذي الرحم الكاشح ؟',
      'كم عدة المرأة المتوفى زوجها ؟',
      'كم عدة المرأة المطلقة ؟ ',
      'فيمن قال رسول الله صلى الله عليه وسلم ( لقد رفعوا إلي في الجنة ) ؟',
      'متى تم بناء مسجد الرسول صلى الله عليه وسلم ؟',
      'متى شرع الآذان ؟ ',
      'متى كانت غزوة الأبوء او غزوة ودان ؟ ',
      'ما اسم خازن الجنة ؟ ',
      'متى كانت غزوة بدر الأولى ؟ ',
      'متى تم تحويل القبلة ؟ ',
      'متى شرع رمضان ؟',
      ' ما اسم خازن النار ؟ ',
      'ما السورتان المسماتان بالزهراوين ؟',
      'من هم المؤذنون الذين كانوا يؤذنون في عهد الرسول صلى الله عليه وسلم ؟ ',
      'متى كانت غزوة بني النضير ؟ ',
      'ما المكان الذي اتخذه الرسول صلى الله عليه سلم مركزاً سرياً للدعوة في مكة المكرمة ؟ ',
      'متى كانت غزوة ذات الرقاع ؟ ',
      'من أول من دون الفقه ؟',
      'من الملقب بذي النور ؟ ',
      'متى كانت غزوة الخندق أو الأحزاب ؟ ',
      'فيمن أنزلت الهمزة ؟ ',
      'متى كانت غزوة ذي قرد ؟ ',
      'من سمى الجمعة الجمعة ؟ ',
      ' متى كانت غزوة خيبر ؟ ',
      'من الذي قبل أمير المؤمنين رأسه وقال : حقاً على المؤمنين أن يقبلوا رأسه ؟ ',
      ]
      client.on('message', message => {
		  	var prefix = "$"
          if (message.content.startsWith(prefix + 'دين')) {
              if (!message.channel.guild) return message.reply('** هاذا الأمر فقط للسيرفرات **');
              var client = new Discord.RichEmbed()
                  .setTitle("NoobBot")
                  .setColor('RANDOM')
                  .setDescription(`${den[Math.floor(Math.random() *den.length)]}`)
                  .setImage("https://cdn.discordapp.com/attachments/439827614044258306/441487283888324609/unknown.png")
                  .setTimestamp()
      
              message.channel.sendEmbed(client);
              message.react("??")
          }
      });

  
  
  
  
  
  

   
   
   
   

   
   
   
      var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
       client.on('message', message => {
           var args = message.content.split(" ").slice(1);
       if(message.content.startsWith(prefix + 'لو خيروك')) {
            var cat = new Discord.RichEmbed()
   .setImage(rebel[Math.floor(Math.random() * rebel.length)])
   message.channel.sendEmbed(cat);
       }
   });
   
   
   
   
   
   
   
   
   
client.on('message' , async (message) => {
       if(message.content.startsWith(`$rps حجر`)) {
              
 let responses = [
        'انا اخترت ورقة وانا فزت',
        'انا اخترت مقص وانا خسرت',
        'انا اخترت حجر وهو تعادل',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});






client.on('message' , async (message) => {
       if(message.content.startsWith(`$rps مقص`)) {
              
 let responses = [
        'انا اخترت ورقة وانا خسرت',
        'انا اخترت مقص وهو تعادل',
        'انا اخترت حجر وانا فزت',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});












client.on('message' , async (message) => {
       if(message.content.startsWith(`$rps ورقة`)) {
              
 let responses = [
        'انا اخترت ورقة وهاذا تعادل',
        'انا اخترت حجر وانا خسرت ',
        'انا اخترت مقص وانا فزت',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});







	
	
	
	
	
	
	
	

	
	
	
client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});












  client.on('message', message => {
    var prefix = "$"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter('Legend Brmoon Bot.')
message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});












client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
         if(message.content.startsWith(prefix + "emoje")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('يجب كتابه كلمه');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  client.on('message' , async (message) => {
		  var prefix = "$"
 if (message.content.startsWith(prefix + 'servers')) {
    // Lets define our array of guilds
    const guildArray = client.guilds.map((guild) => {
    return `${guild.name} : ${guild.id}`
    })
  
    // And send it
    message.channel.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
  }
});
