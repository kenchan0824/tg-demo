const dotenv = require('dotenv');
const { Bot, session } = require('grammy');

dotenv.config();
const bot = new Bot(process.env.TG_BOT_KEY);

function initial() {
    return { items: [] };
}
bot.use(session({ initial }));

bot.command('order', (ctx) => {
    ctx.session.items.push(ctx.match);
});

bot.command('cart', (ctx) => {
    ctx.session.items.forEach((item, index) => {
        ctx.reply(`${index}. ${item}`);
    });
});

bot.start();
console.log("bot is running ...");