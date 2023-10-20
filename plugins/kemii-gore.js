let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) throw `*Example*: .${command} isis`
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let kemii = await fetch(global.API('neoxr','/api/gore', { q: text }, 'apikey'))
  try {
  let res = await kemii.json()
  let te = `*〤  GORE RANDOM*

❏ *Title:* ${res.data.title}
❏ *Auhor:* ${res.data.author}
❏ *Views:* ${res.data.views}`;
  conn.sendFile(m.chat, res.data.video, 'gore.mp4', te, m)
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
}
handler.help = ['gore'].map(v => v + ' <text>')
handler.tags = ['downloader','premium']

handler.command = /^gore$/i

handler.premium = true
handler.register = true

module.exports = handler