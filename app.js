require('dotenv').config()
const {Telegraf} = require('telegraf')
const bot = new Telegraf("1270686685:AAFkDFAM_hog9v1S-FRQA6dKwIb-OCTlgl0")
bot.start((ctx) => ctx.reply('Welcome'))
bot.on('text', ctx => {
    let banned = ["my bill","debt","my earning","my profit","my money","gamble","trade","my wallet","my profit","Thanks Mrs","bitcoin","invest","sex","dick","tiktok","hook up","my payment","https://t.me/joinchat/","trusted"]
    if (ctx.message.text.toLowerCase().match(new RegExp(banned.join("|"), "g"))){
    // if (banned.includes(ctx.message.text.toLowerCase())){
        ctx.deleteMessage()
        const chatId = ctx.chat.id
        const userId = ctx.message.from.id
        ctx.telegram.restrictChatMember(chatId, userId, {
            permissions: {
                can_send_messages: false,
                can_send_media_messages: false,
                can_send_polls: false,
                can_send_other_messages: false,
                can_add_web_page_previews: false,
                can_change_info: false,
                can_invite_users: false,
                can_pin_messages: false,
            },
            until_date: Date.now() + 60 * 60 * 1000,
        }).then(r => console.log("SUCCESS"))
    }
})
bot.launch().then(() =>
    console.log("Bot started..."))
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))