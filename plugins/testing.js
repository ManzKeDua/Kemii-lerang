const nodemailer = require('nodemailer')
let handler = async function (m, { conn, args, usedPrefix, command }) {
    try {
      let users = global.db.data.users[m.sender]
      let name = await conn.getName(m.sender)
         if (users.registered === true) return m.reply(`*✅ Nomor Kamu Udah Terverifikasi*`)
      if (!args || !args[0]) return m.reply(`Silahkan Masukkan Emailnya !\nContoh: .reg sazumikemii@gmail.com`)
      if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig.test(args[0])) return m.reply(`🚩 Email Tidak Ada, Harap Gunakan Email Asli !`)
      let emails = global.db.data.users[m.sender].email
      if (emails.includes(args[0])) return m.reply(`🚩 Email Sudah Terdaftar, Gunakan Email Lain !`)
      let code = getRandomInt(100, 900)
      users.codeExpire = new Date * 1
      users.code = code
      users.email = args[0]
      const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'shelltherv3@gmail.com',
        pass: 'thgahcnlyawhqsbn'
      }
     });
      const mailOptions = {
         from: {
            name: 'Kiku - Wabot',
            address: 'kikuchanj.hub@gmail.com'
         },
         to: args[0],
         subject: 'Email Verification',
         html: `<div style="padding:20px;border:1px dashed #222;font-size:15px"><tt>Halo <b>${name} 😘</b><br><br>Konfirmasi Emailmu Supaya Dapat Menggunakan Remii - Beta. Kirim Angka Dibawah Ini Ke Nomor Remii - Beta, Angka Hanya Berlaku 3 Menit.<br><center><h1>${code}</h1></center>atau Kamu Bisa Langsung Ke wa Bot Dengan Cara Mengklik Link Dibawah : <a href="https://wa.me/62889807400430?text=${code}">https://wa.me/62889807400430?text=${code}</a><br><br><hr style="border:0px; border-top:1px dashed #222"><br>Regards, <b>Remii - Beta</b></tt></div>`
      }
      await transporter.sendMail(mailOptions);
      return m.reply(`✅ Kode Sudah Terkirim \nCek Email Untuk Mendapat Kode Verifikasi ! \n\n
⚠️ Jika mengabaikan pesan ini Sebanyak *5 kali* Kamu akan dibanned atau membayar IDR5.000 !`)
      } catch (e) {
         m.reply(m.chat, `SorryErroR`, m)
      }
   }
handler.help = ['reg <email>']
handler.tags = ['main']

handler.command = /^(reg|daftar|register)$/i
handler.private = true

module.exports = handler

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}