let fetch = require('node-fetch')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw `Example: ${usedPrefix}${command} product|id|zoneId|email`
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let kemii = await fetch(global.API('xfarr', '/api/epayment/topupml', { product: `${response[0]}`, id: `${response[1]}`, zoneid: `${response[2]}`, email: `${response[3]}` }, 'apikey'));
  try {
  let res = await kemii.json()
  let te = `*〤  TOPUP MOBILE LEGENDS*

❏ *ID:* ${res.result.id}
❏ *ZONEID:* ${res.result.zone_id}
❏ *PRODUCT:* ${res.result.product}
❏ *USERNAME:* ${res.result.username}
❏ *EMAIL:* ${res.result.email}
❏ *DATE:* ${res.result.date}
❏ *PAYMENT:* ${res.result.payment_method}
❏ *HARGA:* ${res.result.price}`;
  conn.sendFile(m.chat, res.result.qris, 'topup.jpg', te, m)
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
}
handler.help = ['topupml']
handler.tags = ['store']

handler.command = /^topupml$/i
handler.premium = false
handler.limit = true

module.exports = handler