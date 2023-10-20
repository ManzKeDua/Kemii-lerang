let fetch = require('node-fetch')
let handler = async(m, { conn, text , command }) => {
if (command == 'rimuru') {
if (!text) throw `.${command} hallo rimuru`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=rimuru`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'kemii') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=kemii`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'jokowi') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=jokowi`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'megawati') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=megawati`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'yaemiko') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=yaemiko`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'kiku') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=kiku`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'paimon') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=paimon`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'putin') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=putin`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
if (command == 'lisa') {
if (!text) throw `.${command} hallo`
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
let res = await fetch(`https://api.yanzbotz.my.id/api/ai/characterai?text=${text}&name=lisa`)
let kemii = await res.json()
conn.reply(m.chat, `${kemii.result}`, m)
}
}
handler.command = handler.help = ['rimuru','kemii','jokowi','megawati','yaemiko','paimon','kiku','putin','lisa']
handler.tags = ['ai']
handler.limit = true

module.exports = handler