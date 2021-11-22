//Comment About package.json (dependencies): If you use micro-bot you don't need telegraf anymore, cause micro-bot is built on top of Telegraf library (Dosn't matter if I remove Telegraf dependency or keep it)

//const { Telegraf } = require("telegraf");
const { Composer } = require("micro-bot");

//const bot = new Telegraf("2135760566:AAFEBFri2KRvke8RAor7JNhTq2mYio69hlk");
const bot = new Composer();

bot.start((ctx) => {
	ctx.reply("Bot has started");
});

// bot.launch();
module.exports = bot;

//my Heroku ID: my-heroku-deploy-bot
//my Heroku Address: https://my-heroku-deploy-bot.herokuapp.com
