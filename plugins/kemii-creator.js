let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
const data = global.owner.filter(([id, isCreator]) => id && isCreator)
let msg = await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, {contextInfo: {
externalAdReply: {
title: "ＭＹ ＦＡＶ ＣＲＥＡＴＯＲ",
thumbnailUrl: 'https://telegra.ph/file/0fa0a78bd0ef7b49d080f.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m })
await conn.sendMessage(m.chat, { text: `*Hello @${m.sender.split('@')[0]} this is my owner.*`, mentions: [m.sender] }, { quoted: msg })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler