let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.reply(m.chat, `*Total Fitur saat ini:* ${totalf}\n*Sering Digunakan:* ${Object.entries(db.data.stats).length}`, m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler