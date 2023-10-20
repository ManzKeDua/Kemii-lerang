let handler = async (m, { conn, text, command, usedPrefix }) => {
if (!text) return m.reply(`Example: ${usedPrefix + command} Kiku - Wabot`)
await conn.updateProfileName(text)
m.reply(`Sukses Bosss ${global.author}`)
}
handler.help = ['setnamabot (text)']
handler.tags = ['owner']
handler.owner = true
handler.command = /^(setnamabot|setnamebot)$/i

module.exports = handler