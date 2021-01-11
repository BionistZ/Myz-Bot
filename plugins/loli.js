let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
const axios = require("axios")
const imageToBase64 = require('image-to-base64');

const loli = () => {
    return new Promise((resolve, reject) => {
        var url = `https://arugaz.herokuapp.com/api/randomloli`
        axios.get(url)
            .then(res => {
                imageToBase64(res.data.image)
                    .then(data => {
                        var buffer = Buffer.from(data, 'base64')
                        resolve(buffer)
                    })
            })
            .catch(err => {
                reject('sepertinya error.')
            })
    })
}

module.exports = loli
`.trim(), m)
}
handler.command = /^(loli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
