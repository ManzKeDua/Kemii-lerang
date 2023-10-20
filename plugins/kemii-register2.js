const {
	createHash
} = require('crypto');
const fetch = require('node-fetch');

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
let handler = async function(m, {
	text,
	usedPrefix
}) {
	let user = global.db.data.users[m.sender];
	let name = conn.getName(m.sender)
	if (user.registered === true) throw `You are already registered\nWant to register again? ${usedPrefix}unreg 90259a21exxxxxx`;
	user.regTime = +new Date();
	user.registered = true;
	let sn = createHash('md5').update(m.sender).digest('hex');
	m.reply(
		`
╭─「 REGISTER SUCCESSFUL 」
│ ID: @${m.sender.split("@")[0]}
│ Name: ${name}
│ SN: ${sn}
╰────
    `
	);
};

handler.help = ['daftar']
handler.tags = ['start']
handler.command = /^(daftar)$/i;

module.exports = handler;