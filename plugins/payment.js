let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/7825edbf6e63b6c4d58e0.jpg'
let dann =
`
Scan diatas untuk memproses pembelian anda
`
 await conn.sendFile(m.chat, qris, 'payment.jpg', `${dann}`, m)
}

handler.help = ['payment', 'pembayaran']
handler.tags = ['info', 'tools']
handler.command = /^(payment|pembayaran)$/i
module.exports = handler