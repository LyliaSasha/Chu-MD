/**
 - Create By ZackMans Official
 - Contact Me on https://wa.me/+6281385062956
 - Follow iG : @salman_alfarizi_15
*/

const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./media/image/thumb.jpg")
global.log0 = fs.readFileSync("./media/image/mans.jpg")
global.err4r = fs.readFileSync("./media/image/error.jpg")
global.owner = ['62887433094409','6288289252040','6285795586847']
global.rkyt = []
global.ntilink = ['120363043965529911@g.us']
global.ntihide = ['120363043965529911@g.us']
global.ntidel = ['120363043965529911@g.us']
global.wlcm = ['120363043965529911@g.us']
global.autkick = ['120363043965529911@g.us']
global.gcrevoke = ['16472412324-1386525986@g.us']
global.wjoind = []
global.wleaved = []
global.packname = "Uzui Chan >_<"
global.packname2 = "IkawaTeam"
global.author = "IYAN"
global.sessionName = "Chu2"
global.linkgrupss = "https://chat.whatsapp.com/LdVST4O2wcX2xvpWZNZH3F"
global.antitags = true
global.autred = true
global.anticals = false
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'TUNGGU SEBENTAR YEE...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})