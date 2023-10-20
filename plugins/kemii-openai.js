let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw '*Example:* .ai how to get a girlfriend'
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let hasil = await fetch(`https://xzn.wtf/api/openai?text=${text}&apikey=${global.xzn}`)
  try {
  let res = await hasil.json()
  let kiku = `❏ *Pertanyaan:*
${text}

❏ *Jawaban:*
${res.result}`
  conn.reply(m.chat, kiku, m, {
      contextInfo: {
        externalAdReply: {
          title: "GPT - 3 CHATBOTS",
          thumbnailUrl: 'https://telegra.ph/file/68dd82b54ea1ad55f7ec7.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
    } catch (e) {
    console.log(e);
    m.reply(`Gagal Meminta Apa Yang Kamu Mau:(`);
  }
}
handler.command = /^ai$/i
handler.help = ['ai <text>']
handler.tags = ['tools','ai']
handler.register = false
handler.limit = true

module.exports = handler