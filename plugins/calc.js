global.math = global.math ? global.math : {}
let handler = async (m, { conn, text }) => {
  let id = m.chat
  if (id in global.math) {
    clearTimeout(global.math[id][3])
    delete global.math[id]
    m.reply('π·π°π·π° π½π°πΎ ππ° π²πΎπ»π°π½π³πΎ π½π° πΏππΎππ° π½π°πΎ π½π΄π·')
  }
  let val = text
    .replace(/[^0-9\-\/+*ΓΓ·ΟEe()piPI/]/g, '')
    .replace(/Γ/g, '*')
    .replace(/Γ·/g, '/')
    .replace(/Ο|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'Ο')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, 'Γ·')
    .replace(/\*Γ/g, 'Γ')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'ConteΓΊdo?'
    throw 'Formato incorreto, apenas 0-9 e sΓ­mbolo -, +, *, /, Γ, Γ·, Ο, e, (, ) que apoiado'
  }
}
handler.help = ['calc <expression>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.exp = 5

module.exports = handler
