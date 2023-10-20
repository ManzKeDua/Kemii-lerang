let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .tiktok https://vm.tiktok.com/xxxxx'
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://xzn.wtf/api/tiktok?url=${text}&apikey=${global.xzn}`)
  try {
  let res = await kemii.json()
  let start = new Date();
  let te = `*〤  TIKTOK VIDEO*

❏ *Author:* @${res.data.author.unique_id}
❏ *Caption:* ${res.data.title}`;
await conn.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
  conn.sendFile(m.chat, res.data.play, 'tiktok.mp4', te, m)
   } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await m.reply(`Enter Link Lol_-`);
  }
}
handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;