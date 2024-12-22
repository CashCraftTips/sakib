module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : 𝐒𝐀𝐊𝐈𝐁
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐒 𝐀 𝐊 𝐈 𝐁 ツ
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐥𝐥𝐚𝐩𝐚𝐫𝐚, 𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡.
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐔𝐥𝐥𝐚𝐩𝐚𝐫𝐚, 𝐒𝐢𝐫𝐚𝐣𝐠𝐚𝐧𝐣, 𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡.
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 𝟏𝟖+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : 𝐭𝐨𝐫𝐛𝐚𝐩𝐬𝐚𝐤𝐢𝐛𝐛𝐫𝐨@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩   : +𝟖𝟖𝟎𝟏𝟕𝟔𝟓𝟎𝟓𝟏𝟐𝟏𝟗
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : 𝐡𝐭𝐭𝐩𝐬://𝐰𝐰𝐰.𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝟐𝐧𝐝𝐉𝐨𝐡𝐧𝐧𝐲𝐒𝐢𝐧𝐬`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://scontent.fdac20-1.fna.fbcdn.net/v/t39.30808-6/469888018_122098033286674221_2304917570420482159_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFYO0xuD1Bdn37-8EW9AqgkxSx5sVT-AMvFLHmxVP4Ay9gUwVLmITjRyKThGDktzHY4SjzVg9TInlIomejtA9xl&_nc_ohc=xO_GsN3-irQQ7kNvgHrxZlO&_nc_zt=23&_nc_ht=scontent.fdac20-1.fna&_nc_gid=A50QvP9YWfIJv-2JV4GoO8o&oh=00_AYDgElou7a4guY-5PHz3NkrKbmyOONJlX6tNX-47sj3m0A&oe=67633D92`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
