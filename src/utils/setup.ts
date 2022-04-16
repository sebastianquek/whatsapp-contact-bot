import { config } from "dotenv";
import { Telegraf } from "telegraf";

config();

export const setupBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN as string);
  if (process.env.IS_OFFLINE) {
    bot.use(Telegraf.log());
  }
  return bot;
};
