let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
const { default: translate } = require('google-translate-open-api')

/**

 * Translate Text

 * @param  {String} text

 * @param  {String} lang

 */

module.exports = doing = (text, lang) => new Promise((resolve, reject) => {

    console.log(`Translate text to ${lang}...`)

    translate(text, { tld: 'cn', to: lang })

        .then((text) => resolve(text.data[0]))

        .catch((err) => reject(err))

})
`.trim(), m)
}
handler.command = /^(trans)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
