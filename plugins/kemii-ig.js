let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) throw `*Example*: ${command} https://www.instagram.com/p/ABC123/`
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(`https://xzn.wtf/api/igdl?url=${text}&apikey=${global.xzn}`)
  let res = await kemii.json()
  let start = new Date();
  await conn.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
  conn.sendFile(m.chat, res.media, 'instagram.mp4', '```Success...\nDont forget to donate```', m)
}
handler.help = ['ig', 'igdl', 'instagram'];
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;

module.exports = handler;