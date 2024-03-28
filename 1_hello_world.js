const dotenv = require('dotenv');
const { Bot } = require('grammy');

dotenv.config();
const bot = new Bot(process.env.TG_BOT_KEY);

bot.command('start', (ctx) => {
    ctx.reply("Hello World ~");
});

bot.command('add', (ctx) => {
    const [a, b] = ctx.match.split(/\s+/);
    const sum = parseInt(a) + parseInt(b);
    ctx.reply(`The sum is ${sum}`);
});

bot.start();
console.log("bot is running ...");