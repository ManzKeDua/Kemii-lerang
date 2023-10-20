let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = await conn.getName(who)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Send/Reply Images with the caption *.dukunpelet*'
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let media = await q.download()
  let url = await uploadImage(media)
  let hasil = await (await fetch(`https://oni-chan.my.id/api/canvas/dukun-pelet?picturl=${url}&apikey=7M2e-Q0Cp-sOyH`)).buffer()
  await conn.sendFile(m.chat, hasil, '', '```Success...\nDont forget to donate```', m)
}

handler.help = ['dukunpelet']
handler.tags = ['convert']
handler.premium = false
handler.command = /^(dukunpelet)$/i
handler.register = true
handler.limit = true
handler.private = false

module.exports = handler