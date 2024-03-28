const dotenv = require('dotenv');
const { Bot, session } = require('grammy');
const { conversations, createConversation } = require('@grammyjs/conversations');

dotenv.config();
const bot = new Bot(process.env.TG_BOT_KEY);

function initial() {
    return {};
}
bot.use(session({ initial }));
bot.use(conversations());

async function greeting(conversation, ctx) {
    await ctx.reply("Hi there! What is your name?");
    const { message } = await conversation.wait();
    await ctx.reply(`Nice to meet you, ${message.text}!`);
  }
  bot.use(createConversation(greeting));

bot.command('hello', async (ctx) => {
    await ctx.conversation.enter("greeting");
});

bot.start();
console.log("bot is running ...");