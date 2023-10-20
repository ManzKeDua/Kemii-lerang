let handler = async (m, { conn, text, usedPrefix: _p }) => {
  let user = global.db.data.users[m.sender]
  let message = `
Online Bos *@${m.sender.split("@")[0]}*`
conn.sendPresenceUpdate("composing", m.chat)
conn.sendMessage(m.chat, {
text: message,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: "Ketik .menu untuk menampilkan fitur bot",
thumbnailUrl: 'https://telegra.ph/file/37f9b75ee60ecf6d0dfe7.jpg',
sourceUrl: sgc,
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
}

handler.customPrefix = /^(pp|p)$/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}