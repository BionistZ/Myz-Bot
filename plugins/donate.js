let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*Saweria:* https://saweria.co/ShandiGaming28
*Gopay  :* 0895704445744 /n shandii28
*OvO    :* 0895704445744 /n MyzStore
*Pulsa  :* 0895704445744

Donate ya heueheuheue
`.trim(), m)
}
handler.command = /^(donate)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
