let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `

Bot create by BionistZ

Author: BionistZ
Guthub: https://github.com/BionistZ
Ig    : @shandzn._
*Terima kasih telah menggunakan bot saya*
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
