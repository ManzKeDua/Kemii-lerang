let handler = m => m
handler.before = async function (m) {
      try {
         let users = global.db.data.users[m.sender]
         if (!m.isGroup && m.text.toLowerCase(/\d{3}-\d{3}/) && !users.registered) {
         if (m.text.toLowerCase() == users.code.toLowerCase().trim()) {
            if (m.text.toLowerCase() == !users.code.toLowerCase().trim()) return m.reply(`🚩 Code Verifikasi kamu Salah Kak.`)
            if (new Date - users.codeExpire > 180000) return m.reply(`🚩 Yahh Kode Verifikasi Kamu Udah Kaladurasa kak..`).then(() => {
               users.codeExpire = 0
               users.code = ''
               users.email = ''
               users.attempt = 0
            })
            return m.reply(`✅ Yeay Nomor Kamu Berhasil Terverifikasi!\nSilahkan Ketik .menu Untuk Menampilkan Fitur Bot!`).then(() => {
               users.codeExpire = 0
               users.code = ''
               users.attempt = 0
               users.registered = true
            })
         }}
      } catch (e) {
         m.reply(m.chat, `SorryErroR`, m)
      }
   }
module.exports = handler
handler.private = true