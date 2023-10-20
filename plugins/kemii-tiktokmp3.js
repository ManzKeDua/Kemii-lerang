let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  if (!text) throw `*Example:* .${command} https://vm.tiktok.com/xxxxx`
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
  let kemii = await fetch(global.API('xfarr', '/api/download/tiktokmusic', { url: text }, 'apikey'));
  try {
  let res = await kemii.json()
  let start = new Date();
await conn.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
  await conn.sendMessage(m.chat, {
    document: { url: `${res.result.url}` },
    mimetype: 'audio/mpeg', 
    fileName: `${res.result.audio_title}.mp3`,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: false,
        mediaType: 1,
        body: 'K I K U  -  W A B O T  M U L T I  D E V I C E',
        thumbnailUrl: `${res.result.thumbnail}`,
        renderLargerThumbnail: true
        }}},{quoted: m})
   } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await m.reply(`Enter Link Lol_-`);
  }
}
handler.help = ['tiktokmp3'];
handler.tags = ['downloader'];
handler.command = /^(tiktokmp3|ttmp3|tiktokaudio)$/i;
handler.limit = true;
handler.group = false;

module.exports = handler;