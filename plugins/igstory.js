let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
    try {
    if (!text) throw `*Example:* ${usedPrefix + command} kemiisalsabila`
    let kemii = await fetch(`https://api.lolhuman.xyz/api/igstory/${text}?apikey=${global.lolkey}`)
    let res = await kemii.json()
    if (!res.result) throw 'Username tidak ditemukan!'
    conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    conn.sendFile(m.chat, res.result[0], '', wm, m)
    } catch (e) {
        await m.reply(e)
    }
}

handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
handler.limit = true
handler.group = false

module.exports = handler
