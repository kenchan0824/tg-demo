const dotenv = require('dotenv');
const { Bot } = require('grammy');
const { checkBalance } = require('./api/solana');

dotenv.config();
const bot = new Bot(process.env.TG_BOT_KEY);

bot.on('message', async (ctx) => {
    const wallet_address = ctx.message.text;
    let balance = 0;
    try {
        balance = await checkBalance(wallet_address);
    } catch (err) {}
    await ctx.reply(`Your wallet has ${balance.toFixed(2)} SOL`)
})

bot.start();
console.log('bot is running ...');