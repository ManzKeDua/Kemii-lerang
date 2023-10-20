let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return m.reply(`Example: ${usedPrefix}${command} 1girl, solo, ponytail, blush.`)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://xzn.wtf/api/txt2img?text=${text}&apikey=${global.xzn}`
  conn.sendFile(m.chat, res, 'txt2img.jpg', '```Success...\nDont forget to donate```', m, false)
}
handler.command = handler.help = ['txt2img'];
handler.tags = ['internet'];
handler.register = true;
handler.premium = true;
handler.limit = true;

module.exports = handler;