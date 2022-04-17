import "dotenv/config";
import { Telegraf } from "telegraf";

export const setupBot = () => {
  const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);
  if (process.env.IS_OFFLINE) {
    bot.use(Telegraf.log());
  }
  return bot;
};
