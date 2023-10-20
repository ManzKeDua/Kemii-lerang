let handler = m => m

let linkRegex = /(chat.whatsapp.com\/([0-9A-Za-z]{20,24})|(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+(com|xyz|me|my|id|io|eu\.org|biz|biz\.id)(\/[^\s]+)?)/i

handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.autoJpm && isGroupLink) {
    await conn.reply(m.chat, `BERIKUT  AKUN PANEL ANDA

Mau Panel Runn Bot Free? Share Link Gc Gw sebanyak banyak nya Kalau Udah Share ss bukti ke pm Langsung ku kasih panel 

GC 1 MEM 300++
https://chat.whatsapp.com/K3NYSm9bju2GuorpWFxKvO
800 MEM BAGI BAGI ADMIN PANEL DAN VPS

GC 2 MEM 100+
https://chat.whatsapp.com/CJ5ToF9MbwR8aWTui3reWb
GC2 BEBAS SHARE LINK

masuk banyak sc free :

JAM 00:00 KU SEND DATA ADMIN PANEL DAN VPS*` ,m)
  }
  return true
}

module.exports = handler