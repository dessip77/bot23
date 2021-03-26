const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Número de série Vazio'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Número de série incorreto'
  user.registered = false
  m.reply(`Urul conseguiu!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

