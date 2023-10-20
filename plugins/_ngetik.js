let fetch = require('node-fetch')

let handler = m => m
handler.before = async (m, { conn }) => {

    let chat = db.data.chats[m.chat]

    if (chat.ngetik && !chat.isBanned) {

        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return

        if (!m.text) return
        conn.sendPresenceUpdate("composing", m.chat)

        return !0

    }

    return !0

}

module.exports = handler