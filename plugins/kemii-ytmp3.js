let { 
    youtubedl,
    youtubedlv2 
} = require('@bochilteam/scraper')
let regex = /^(^https:\/\/www\.instagram\.com|^https:\/\/vm\.tiktok\.com)$/i
var handler = async (m, { conn, args, command }) => {
  if (!args[0]) throw `*Example:* .${command} https://www.youtube.com/xxxxxxx`
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let q = '128kbps'
  let v = args[0]

  // Ambil info dari video
  try {
  const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
  const dl_url = await yt.audio[q].download()
  const ttl = await yt.title
  const size = await yt.audio[q].fileSizeH

  // Tampilkan informasi file beserta thumbnail
  conn.sendMessage(m.chat, {
    document: { url: dl_url },
    mimetype: 'audio/mpeg', 
    fileName: `${ttl}.mp3`,
  }, {quoted: m})
   } catch (e) {
    console.log(e);
    m.reply(`Failed :(`);
  }
}

// Jika ingin menambahkan tag, ubah code berikut:
handler.tags = ['downloader']
handler.help = ['ytmp3']
handler.command = /^yta|ytmp3|youtubemp3$/i
module.exports = handler