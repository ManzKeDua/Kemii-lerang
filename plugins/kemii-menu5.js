let fetch = require('node-fetch')
let moment = require('moment-timezone')
let fs = require('fs')
Styles = (text, style = 1) => {
  var xStr = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var yStr = Object.freeze({
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  });
  var replacer = [];
  xStr.map((v, i) => replacer.push({
    original: v,
    convert: yStr[style].split('')[i]
  }));
  var str = text.toLowerCase().split('');
  var output = [];
  str.map(v => {
    const find = replacer.find(x => x.original == v);
    find ? output.push(find.convert) : output.push(v);
  });
  return output.join('');
};
let hour_now = moment.tz('Asia/Jakarta').format('HH')
    let ucapanWaktu;
    if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Pagi'
    } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Siang'
    } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Sore'
    } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Petang'
    } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Malam'
    } else {
    ucapanWaktu = 'Malam'
    }
let handler = async (m, { conn, usedPrefix, command, text }) => {
conn.sendMessage(m.chat, { react: { text: '🤖', key: m.key }})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let user = global.db.data.users[who];
let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
let uptime = clockString(_uptime)
let version = require('../package.json').version
let d = new Date(new Date + 3600000) 
   let locale = 'id' 
let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
let wibh = moment.tz('Asia/Jakarta').format('HH') 
let wibm = moment.tz('Asia/Jakarta').format('mm') 
let wibs = moment.tz('Asia/Jakarta').format('ss')
let date = new Date().toLocaleDateString('en-US', {timeZone: 'Asia/Jakarta'})
let time = new Date().toLocaleTimeString('en-US', {timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', hour12: true})
let ppUrl = await conn.profilePictureUrl(who, 'image').catch((_) => "https://telegra.ph/file/65c43c76b126a2e1a8409.png");
  let limit = user.premium ? '∞' : user.limit;
  let balance = user.money > 9999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.money;
  let level = user.level > 9999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.level;
  let status = user.owner ? 'Owner' : user.premium ? 'Premium' : 'Free User';
  let age = user.age > 4000 ? 'Unknown' : user.age;
  let exp = user.exp > 999999999 ? '4̶0̶4̶ N̶o̶t̶ F̶o̶u̶n̶d̶' : user.exp;
  let premiumExpired = user.premium ? new Date(user.premiumDate).toDateString() : "Not Found";
  let pp = await (await fetch(ppUrl)).buffer();
  let name = await conn.getName(m.sender)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let ucpn = `${ucapan()}`
    readmore: readMore
  let menyu = `
–  *Y O U R  I N F O R M A T I O N*

┌ ◦ Name : ${name}
│ ◦ Limit : ${limit}
│ ◦ Balance : ${balance}
│ ◦ Level : ${level}
└ ◦ Status : ${status}

–  *S T I C K E R  M E N U*

┌ ◦ .attp
│ ◦ .ttp
│ ◦ .dadu
│ ◦ .qc
│ ◦ .stickermeme
│ ◦ .stickanime
│ ◦ .animestick
│ ◦ .stickerhug
│ ◦ .stickmaker
│ ◦ .tovideo
│ ◦ .stiker
│ ◦ .stiker
│ ◦ .smeta
│ ◦ .stikergif
│ ◦ .stikergif
│ ◦ .stikertelegram
│ ◦ .stickmaker
│ ◦ .togif
│ ◦ .ttp
└ ◦ .wm
`
conn.sendPresenceUpdate("composing", m.chat)
await conn.sendMessage(m.chat, {
document: myfile, 
mimetype: minety, 
pageCount: 2023,
fileName: '© Takashi Kemii',
fileLength: 100000000000000,
caption: Styles(menyu), 
contextInfo: {
forwardingScore: 2023, 
isForwarded: false,
externalAdReply: {
title: `Date: ${date} (${week})\nTime: ${wibh}:${wibm}:${wibs} ${ucapanWaktu}`,
mediaType: 1,
thumbnailUrl: ppUrl,
mediaUrl: sig,
sourceUrl: gcbot,
containsAutoReply: true,
renderLargerThumbnail: true,
showAdAttribution: false,
}}}, { quoted: m })
}
handler.customPrefix = /^(5|.5|menusticker|.menusticker)$/i
handler.command = new RegExp
handler.register = true;
handler.limit = true;

module.exports = handler


function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Good morning"
  if (time >= 4) {
    res = "Good morning"
  }
  if (time >= 10) {
    res = "Good afternoon"
  }
  if (time >= 15) {
    res = "Good afternoon"
  }
  if (time >= 18) {
    res = "Good night"
  }
  return res
}