module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100070013974971") {
    var aid = ["100070013974971"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["মেনশন দিস না, সাকিব ভাই গফ খুজতে ব্যাস্ত🙈",
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
