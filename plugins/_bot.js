let handler = async (m, { conn, command }) => {
let name = await conn.getName(m.sender)
conn.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: 2,
		scheduledTimestampMs: 100,
		title: `Online Bos ${name}`, 
		}
	}, {})
}
handler.customPrefix = /^(bot|bot?|bott)$/i
handler.command = new RegExp

module.exports = handler
