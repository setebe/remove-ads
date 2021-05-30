require('dotenv').config()
const {Telegraf} = require('telegraf')
const bot = new Telegraf("1270686685:AAFkDFAM_hog9v1S-FRQA6dKwIb-OCTlgl0")
bot.start((ctx) => ctx.reply('Welcome'))
bot.on('text', ctx => {
    let banned = ["my bill","debt","my earning","my profit","my money","gamble","trade","my wallet","my profit","Thanks Mrs","bitcoin","invest","sex","cock","suck","dick","tiktok","hook up","my payment","https://t.me/joinchat/","trusted"]
    if (ctx.message.text.toLowerCase().match(new RegExp(banned.join("|"), "g"))){
    // if (banned.includes(ctx.message.text.toLowerCase())){
        ctx.deleteMessage()
    }
})
bot.launch().then(() =>
    console.log("Bot started..."))
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))