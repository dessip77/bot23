let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pergunta:* ${command} ${text}
*Responda:* ${pickRandom(['Ya','Mungkin iya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['apakah〘𝚙𝚎𝚛𝚐𝚞𝚗𝚝𝚊〙']
handler.tags = ['kerang']
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

